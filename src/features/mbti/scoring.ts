import { questions } from '@/data/questions';
import {
  AnswerMap,
  DimensionScore,
  MBTIType,
  ScoringResult,
  Dimension,
  DimensionPole,
} from './types';

// Dimension configuration
const dimensionConfig: Record<Dimension, { poleA: DimensionPole; poleB: DimensionPole }> = {
  EI: { poleA: 'E', poleB: 'I' },
  SN: { poleA: 'S', poleB: 'N' },
  TF: { poleA: 'T', poleB: 'F' },
  JP: { poleA: 'J', poleB: 'P' },
};

/**
 * Calculate MBTI scores from answers
 * @param answers - Map of question IDs to answers (A or B)
 * @returns ScoringResult with type and dimension scores
 */
export function calculateMBTI(answers: AnswerMap): ScoringResult {
  // Initialize dimension counts
  const counts: Record<Dimension, { A: number; B: number }> = {
    EI: { A: 0, B: 0 },
    SN: { A: 0, B: 0 },
    TF: { A: 0, B: 0 },
    JP: { A: 0, B: 0 },
  };

  // Count answers for each dimension
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (answer) {
      counts[question.dimension][answer]++;
    }
  });

  // Calculate scores for each dimension
  const scores: Record<Dimension, DimensionScore> = {} as Record<Dimension, DimensionScore>;

  for (const dim of Object.keys(dimensionConfig) as Dimension[]) {
    const config = dimensionConfig[dim];
    const total = counts[dim].A + counts[dim].B;

    // Handle division by zero
    const percentA = total > 0 ? Math.round((counts[dim].A / total) * 100) : 50;
    const percentB = 100 - percentA;

    scores[dim] = {
      dimension: dim,
      poleA: config.poleA,
      poleB: config.poleB,
      scoreA: counts[dim].A,
      scoreB: counts[dim].B,
      percentA,
      percentB,
    };
  }

  // Determine MBTI type
  const type = determineMBTIType(scores);

  return {
    type,
    scores,
    rawAnswers: { ...answers },
  };
}

/**
 * Determine the 4-letter MBTI type from dimension scores
 */
function determineMBTIType(scores: Record<Dimension, DimensionScore>): MBTIType {
  const letter1 = scores.EI.scoreA >= scores.EI.scoreB ? 'E' : 'I';
  const letter2 = scores.SN.scoreA >= scores.SN.scoreB ? 'S' : 'N';
  const letter3 = scores.TF.scoreA >= scores.TF.scoreB ? 'T' : 'F';
  const letter4 = scores.JP.scoreA >= scores.JP.scoreB ? 'J' : 'P';

  return `${letter1}${letter2}${letter3}${letter4}` as MBTIType;
}

/**
 * Validate that a result is one of the 16 valid MBTI types
 */
export function isValidMBTIType(type: string): type is MBTIType {
  const validTypes: MBTIType[] = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ',
  ];
  return validTypes.includes(type as MBTIType);
}

/**
 * Get dimension label
 */
export function getDimensionLabel(dim: Dimension): { poleA: string; poleB: string } {
  const labels: Record<Dimension, { poleA: string; poleB: string }> = {
    EI: { poleA: '外向 (E)', poleB: '內向 (I)' },
    SN: { poleA: '實感 (S)', poleB: '直覺 (N)' },
    TF: { poleA: '思考 (T)', poleB: '情感 (F)' },
    JP: { poleA: '判斷 (J)', poleB: '知覺 (P)' },
  };
  return labels[dim];
}

export default calculateMBTI;
