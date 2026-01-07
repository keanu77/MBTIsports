// MBTI Dimension Types
export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';
export type DimensionPole = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

// All 16 MBTI Types
export type MBTIType =
  | 'ISTJ' | 'ISFJ' | 'INFJ' | 'INTJ'
  | 'ISTP' | 'ISFP' | 'INFP' | 'INTP'
  | 'ESTP' | 'ESFP' | 'ENFP' | 'ENTP'
  | 'ESTJ' | 'ESFJ' | 'ENFJ' | 'ENTJ';

// Question Option
export interface QuestionOption {
  text: string;
  pole: DimensionPole;
}

// Question
export interface Question {
  id: string;
  text: string;
  dimension: Dimension;
  optionA: QuestionOption;
  optionB: QuestionOption;
}

// Answer record
export type Answer = 'A' | 'B';
export type AnswerMap = Record<string, Answer>;

// Dimension Score
export interface DimensionScore {
  dimension: Dimension;
  poleA: DimensionPole;
  poleB: DimensionPole;
  scoreA: number;
  scoreB: number;
  percentA: number;
  percentB: number;
}

// Scoring Result
export interface ScoringResult {
  type: MBTIType;
  scores: {
    EI: DimensionScore;
    SN: DimensionScore;
    TF: DimensionScore;
    JP: DimensionScore;
  };
  rawAnswers: AnswerMap;
}

// 16 Type Profile Content
export interface TypeProfile {
  type: MBTIType;
  displayName: {
    zh: string;
    en: string;
  };
  tagline: {
    zh: string;
    en: string;
  };
  strengths: string[];
  pitfalls: string[];
  trainingTips: string[];
  coachTips: string[];
  sportFit: string[];
  riskBehaviors: string[];
}
