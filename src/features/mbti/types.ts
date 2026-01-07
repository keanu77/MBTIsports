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

// Cognitive Function (認知功能)
export interface CognitiveFunctionItem {
  code: string;      // Ti, Te, Fi, Fe, Si, Se, Ni, Ne
  name: string;      // 內傾思考、外傾思考...
  description: string;  // 運動場景中的表現
}

export interface CognitiveFunctions {
  dominant: CognitiveFunctionItem;   // 主導功能
  auxiliary: CognitiveFunctionItem;  // 輔助功能
  tertiary: CognitiveFunctionItem;   // 第三功能
  inferior: CognitiveFunctionItem;   // 劣勢功能
  sportApplication: string;          // 運動應用總結
}

// Injury Risk Profile (傷害風險檔案)
export interface InjuryRiskProfile {
  riskType: string;              // 風險類型名稱
  description: string;           // 風險描述
  warningSignals: string[];      // 警示訊號
  preventionStrategies: string[]; // 預防策略
}

// Communication Style (溝通風格)
export interface CommunicationStyle {
  asAthlete: string[];           // 作為運動員的溝通特點
  coachingApproach: string;      // 教練應採用的指導方式
  motivationTriggers: string[];  // 有效激勵方式
  conflictStyle: string;         // 衝突處理傾向
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
  // 新增欄位（可選，未來擴充用）
  cognitiveFunctions?: CognitiveFunctions;
  injuryRiskProfile?: InjuryRiskProfile;
  communicationStyle?: CommunicationStyle;
}
