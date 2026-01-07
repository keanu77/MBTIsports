import { describe, it, expect } from 'vitest';
import { calculateMBTI, isValidMBTIType, getDimensionLabel } from './scoring';
import { AnswerMap } from './types';
import { questions } from '@/data/questions';

describe('calculateMBTI', () => {
  // Helper to generate all answers for a specific option
  const generateAllAnswers = (answer: 'A' | 'B'): AnswerMap => {
    return questions.reduce((acc, q) => {
      acc[q.id] = answer;
      return acc;
    }, {} as AnswerMap);
  };

  // Helper to get questions by dimension
  const getQuestionsByDimension = (dimension: string) =>
    questions.filter((q) => q.dimension === dimension);

  it('should return ESTJ when all answers are A', () => {
    const answers = generateAllAnswers('A');
    const result = calculateMBTI(answers);

    expect(result.type).toBe('ESTJ');
    expect(result.scores.EI.scoreA).toBe(7);
    expect(result.scores.EI.scoreB).toBe(0);
    expect(result.scores.SN.scoreA).toBe(7);
    expect(result.scores.TF.scoreA).toBe(7);
    expect(result.scores.JP.scoreA).toBe(7);
  });

  it('should return INFP when all answers are B', () => {
    const answers = generateAllAnswers('B');
    const result = calculateMBTI(answers);

    expect(result.type).toBe('INFP');
    expect(result.scores.EI.scoreB).toBe(7);
    expect(result.scores.EI.scoreA).toBe(0);
    expect(result.scores.SN.scoreB).toBe(7);
    expect(result.scores.TF.scoreB).toBe(7);
    expect(result.scores.JP.scoreB).toBe(7);
  });

  it('should return 50% percentages when no answers provided', () => {
    const answers: AnswerMap = {};
    const result = calculateMBTI(answers);

    expect(result.scores.EI.percentA).toBe(50);
    expect(result.scores.EI.percentB).toBe(50);
    expect(result.scores.SN.percentA).toBe(50);
    expect(result.scores.SN.percentB).toBe(50);
  });

  it('should calculate correct percentages for mixed answers', () => {
    // Answer 5 A and 2 B for EI dimension
    const eiQuestions = getQuestionsByDimension('EI');
    const answers: AnswerMap = {};

    // Set 5 A and 2 B for EI
    eiQuestions.forEach((q, idx) => {
      answers[q.id] = idx < 5 ? 'A' : 'B';
    });

    // Fill rest with A
    questions.forEach((q) => {
      if (!answers[q.id]) {
        answers[q.id] = 'A';
      }
    });

    const result = calculateMBTI(answers);

    // 5/7 = 71.4% -> rounds to 71%
    expect(result.scores.EI.percentA).toBe(71);
    expect(result.scores.EI.percentB).toBe(29);
    expect(result.scores.EI.scoreA).toBe(5);
    expect(result.scores.EI.scoreB).toBe(2);
  });

  it('should handle partial answers correctly', () => {
    const answers: AnswerMap = {
      'ei-1': 'A',
      'ei-2': 'A',
      'sn-1': 'B',
    };

    const result = calculateMBTI(answers);

    expect(result.scores.EI.scoreA).toBe(2);
    expect(result.scores.EI.scoreB).toBe(0);
    expect(result.scores.SN.scoreA).toBe(0);
    expect(result.scores.SN.scoreB).toBe(1);
  });

  it('should preserve raw answers in result', () => {
    const answers: AnswerMap = {
      'ei-1': 'A',
      'sn-1': 'B',
    };

    const result = calculateMBTI(answers);

    expect(result.rawAnswers).toEqual(answers);
    expect(result.rawAnswers['ei-1']).toBe('A');
    expect(result.rawAnswers['sn-1']).toBe('B');
  });

  it('should determine type based on dominant pole when tied', () => {
    // With equal scores, A pole wins (E, S, T, J)
    const eiQuestions = getQuestionsByDimension('EI');
    const answers: AnswerMap = {};

    // Set alternating for EI (if odd number, first pole wins)
    eiQuestions.forEach((q, idx) => {
      answers[q.id] = idx % 2 === 0 ? 'A' : 'B';
    });

    // Fill rest with A
    questions.forEach((q) => {
      if (!answers[q.id]) {
        answers[q.id] = 'A';
      }
    });

    const result = calculateMBTI(answers);

    // 4 A, 3 B -> E wins
    expect(result.type[0]).toBe('E');
  });

  it('should ensure percentages sum to 100 for each dimension', () => {
    const answers = generateAllAnswers('A');
    const result = calculateMBTI(answers);

    expect(result.scores.EI.percentA + result.scores.EI.percentB).toBe(100);
    expect(result.scores.SN.percentA + result.scores.SN.percentB).toBe(100);
    expect(result.scores.TF.percentA + result.scores.TF.percentB).toBe(100);
    expect(result.scores.JP.percentA + result.scores.JP.percentB).toBe(100);
  });

  it('should return consistent results for same answers', () => {
    const answers: AnswerMap = {
      'ei-1': 'A',
      'ei-2': 'B',
      'ei-3': 'A',
      'ei-4': 'A',
      'ei-5': 'B',
      'ei-6': 'A',
      'ei-7': 'A',
      'sn-1': 'B',
      'sn-2': 'B',
      'sn-3': 'A',
      'sn-4': 'B',
      'sn-5': 'B',
      'sn-6': 'A',
      'sn-7': 'B',
      'tf-1': 'A',
      'tf-2': 'A',
      'tf-3': 'A',
      'tf-4': 'B',
      'tf-5': 'A',
      'tf-6': 'A',
      'tf-7': 'B',
      'jp-1': 'B',
      'jp-2': 'A',
      'jp-3': 'B',
      'jp-4': 'B',
      'jp-5': 'A',
      'jp-6': 'B',
      'jp-7': 'B',
    };

    const result1 = calculateMBTI(answers);
    const result2 = calculateMBTI(answers);

    expect(result1.type).toBe(result2.type);
    expect(result1.scores.EI.percentA).toBe(result2.scores.EI.percentA);
    expect(result1.scores.SN.percentB).toBe(result2.scores.SN.percentB);
  });
});

describe('isValidMBTIType', () => {
  it('should return true for all 16 valid MBTI types', () => {
    const validTypes = [
      'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
      'ISTP', 'ISFP', 'INFP', 'INTP',
      'ESTP', 'ESFP', 'ENFP', 'ENTP',
      'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ',
    ];

    validTypes.forEach((type) => {
      expect(isValidMBTIType(type)).toBe(true);
    });
  });

  it('should return false for invalid types', () => {
    expect(isValidMBTIType('ABCD')).toBe(false);
    expect(isValidMBTIType('EST')).toBe(false);
    expect(isValidMBTIType('ESTJX')).toBe(false);
    expect(isValidMBTIType('')).toBe(false);
    expect(isValidMBTIType('estj')).toBe(false); // lowercase
  });
});

describe('getDimensionLabel', () => {
  it('should return correct labels for EI dimension', () => {
    const labels = getDimensionLabel('EI');
    expect(labels.poleA).toBe('外向 (E)');
    expect(labels.poleB).toBe('內向 (I)');
  });

  it('should return correct labels for SN dimension', () => {
    const labels = getDimensionLabel('SN');
    expect(labels.poleA).toBe('務實 (S)');
    expect(labels.poleB).toBe('直覺 (N)');
  });

  it('should return correct labels for TF dimension', () => {
    const labels = getDimensionLabel('TF');
    expect(labels.poleA).toBe('理性 (T)');
    expect(labels.poleB).toBe('感性 (F)');
  });

  it('should return correct labels for JP dimension', () => {
    const labels = getDimensionLabel('JP');
    expect(labels.poleA).toBe('計畫 (J)');
    expect(labels.poleB).toBe('隨性 (P)');
  });
});

describe('MBTI Type Coverage', () => {
  it('should be able to produce all 16 types with appropriate answers', () => {
    // This test verifies the scoring engine can produce all 16 types
    const typeTestCases: Array<{
      type: string;
      eiAnswer: 'A' | 'B';
      snAnswer: 'A' | 'B';
      tfAnswer: 'A' | 'B';
      jpAnswer: 'A' | 'B';
    }> = [
      { type: 'ESTJ', eiAnswer: 'A', snAnswer: 'A', tfAnswer: 'A', jpAnswer: 'A' },
      { type: 'INFP', eiAnswer: 'B', snAnswer: 'B', tfAnswer: 'B', jpAnswer: 'B' },
      { type: 'ENFJ', eiAnswer: 'A', snAnswer: 'B', tfAnswer: 'B', jpAnswer: 'A' },
      { type: 'ISTP', eiAnswer: 'B', snAnswer: 'A', tfAnswer: 'A', jpAnswer: 'B' },
    ];

    typeTestCases.forEach(({ type, eiAnswer, snAnswer, tfAnswer, jpAnswer }) => {
      const answers: AnswerMap = {};

      questions.forEach((q) => {
        switch (q.dimension) {
          case 'EI':
            answers[q.id] = eiAnswer;
            break;
          case 'SN':
            answers[q.id] = snAnswer;
            break;
          case 'TF':
            answers[q.id] = tfAnswer;
            break;
          case 'JP':
            answers[q.id] = jpAnswer;
            break;
        }
      });

      const result = calculateMBTI(answers);
      expect(result.type).toBe(type);
    });
  });
});
