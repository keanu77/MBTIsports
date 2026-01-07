import { Question } from '@/features/mbti/types';

// 28 Questions for Sports MBTI (7 per dimension)
export const questions: Question[] = [
  // ========== E/I Dimension (7 questions) ==========
  {
    id: 'ei-1',
    text: '比賽前一晚，你會怎麼準備？',
    dimension: 'EI',
    optionA: { text: '和隊友聚在一起聊天、互相打氣', pole: 'E' },
    optionB: { text: '獨自在房間休息、聽音樂放鬆', pole: 'I' },
  },
  {
    id: 'ei-2',
    text: '進行團隊訓練時，你更喜歡：',
    dimension: 'EI',
    optionA: { text: '大聲鼓勵隊友、主動帶動氣氛', pole: 'E' },
    optionB: { text: '專注自己的動作、默默完成訓練', pole: 'I' },
  },
  {
    id: 'ei-3',
    text: '練習結束後，你通常會：',
    dimension: 'EI',
    optionA: { text: '和隊友繼續聊天、討論剛才的表現', pole: 'E' },
    optionB: { text: '盡快回家休息、恢復體力', pole: 'I' },
  },
  {
    id: 'ei-4',
    text: '面對新隊友，你會：',
    dimension: 'EI',
    optionA: { text: '主動自我介紹、很快熟絡起來', pole: 'E' },
    optionB: { text: '等對方先開口、慢慢觀察再互動', pole: 'I' },
  },
  {
    id: 'ei-5',
    text: '比賽中場休息時，你傾向：',
    dimension: 'EI',
    optionA: { text: '和隊友討論戰術、保持熱絡', pole: 'E' },
    optionB: { text: '安靜補充水分、整理思緒', pole: 'I' },
  },
  {
    id: 'ei-6',
    text: '你認為最能激勵自己的方式是：',
    dimension: 'EI',
    optionA: { text: '觀眾的加油聲和隊友的鼓勵', pole: 'E' },
    optionB: { text: '內心的自我對話和目標設定', pole: 'I' },
  },
  {
    id: 'ei-7',
    text: '休賽期間，你會：',
    dimension: 'EI',
    optionA: { text: '參加各種社交活動、認識不同領域的人', pole: 'E' },
    optionB: { text: '享受獨處時光、做自己喜歡的事', pole: 'I' },
  },

  // ========== S/N Dimension (7 questions) ==========
  {
    id: 'sn-1',
    text: '學習新技術時，你偏好：',
    dimension: 'SN',
    optionA: { text: '一步一步跟著示範、反覆練習基本動作', pole: 'S' },
    optionB: { text: '先了解原理、嘗試自己的變化版本', pole: 'N' },
  },
  {
    id: 'sn-2',
    text: '制定訓練計畫時，你更看重：',
    dimension: 'SN',
    optionA: { text: '具體的數據目標，如次數、時間、距離', pole: 'S' },
    optionB: { text: '整體的進步方向和長期發展', pole: 'N' },
  },
  {
    id: 'sn-3',
    text: '比賽中出現意外狀況，你會：',
    dimension: 'SN',
    optionA: { text: '依照過去經驗和練習內容應對', pole: 'S' },
    optionB: { text: '臨機應變、嘗試創新的解決方式', pole: 'N' },
  },
  {
    id: 'sn-4',
    text: '分析對手時，你更關注：',
    dimension: 'SN',
    optionA: { text: '對手的具體習慣和過去表現數據', pole: 'S' },
    optionB: { text: '對手可能的戰術變化和潛在弱點', pole: 'N' },
  },
  {
    id: 'sn-5',
    text: '設定目標時，你傾向：',
    dimension: 'SN',
    optionA: { text: '設定可量化的短期目標', pole: 'S' },
    optionB: { text: '描繪一個激勵人心的長遠願景', pole: 'N' },
  },
  {
    id: 'sn-6',
    text: '教練講解戰術時，你期待：',
    dimension: 'SN',
    optionA: { text: '清楚的步驟說明和具體執行方式', pole: 'S' },
    optionB: { text: '概念性的框架和靈活運用的空間', pole: 'N' },
  },
  {
    id: 'sn-7',
    text: '回顧比賽錄影時，你會：',
    dimension: 'SN',
    optionA: { text: '逐一檢視每個動作的細節', pole: 'S' },
    optionB: { text: '關注整體節奏和戰術模式', pole: 'N' },
  },

  // ========== T/F Dimension (7 questions) ==========
  {
    id: 'tf-1',
    text: '隊友表現失常時，你會：',
    dimension: 'TF',
    optionA: { text: '指出問題所在、提出改進建議', pole: 'T' },
    optionB: { text: '先給予情感支持、鼓勵對方振作', pole: 'F' },
  },
  {
    id: 'tf-2',
    text: '選擇比賽策略時，你更看重：',
    dimension: 'TF',
    optionA: { text: '勝率最高的方案，即使不是最有趣的', pole: 'T' },
    optionB: { text: '能讓團隊都投入享受的方案', pole: 'F' },
  },
  {
    id: 'tf-3',
    text: '輸掉重要比賽後，你會：',
    dimension: 'TF',
    optionA: { text: '理性分析失敗原因、避免重蹈覆轍', pole: 'T' },
    optionB: { text: '允許自己難過一陣子、再慢慢調適', pole: 'F' },
  },
  {
    id: 'tf-4',
    text: '團隊內部有衝突時，你傾向：',
    dimension: 'TF',
    optionA: { text: '客觀分析事情對錯、找出解決方案', pole: 'T' },
    optionB: { text: '關注每個人的感受、維護團隊和諧', pole: 'F' },
  },
  {
    id: 'tf-5',
    text: '教練給你嚴厲的批評時，你會：',
    dimension: 'TF',
    optionA: { text: '專注在批評的內容、思考如何改進', pole: 'T' },
    optionB: { text: '在意教練的態度和說話方式', pole: 'F' },
  },
  {
    id: 'tf-6',
    text: '決定是否參加比賽時，你更考慮：',
    dimension: 'TF',
    optionA: { text: '這場比賽對我的成長有什麼幫助', pole: 'T' },
    optionB: { text: '隊友和支持者對我的期待', pole: 'F' },
  },
  {
    id: 'tf-7',
    text: '你認為最好的教練是：',
    dimension: 'TF',
    optionA: { text: '能客觀分析、給予專業指導的教練', pole: 'T' },
    optionB: { text: '能理解選手、建立信任關係的教練', pole: 'F' },
  },

  // ========== J/P Dimension (7 questions) ==========
  {
    id: 'jp-1',
    text: '準備比賽時，你會：',
    dimension: 'JP',
    optionA: { text: '提前規劃好每天的訓練內容', pole: 'J' },
    optionB: { text: '依當天狀態彈性調整訓練', pole: 'P' },
  },
  {
    id: 'jp-2',
    text: '比賽當天，你希望：',
    dimension: 'JP',
    optionA: { text: '按照固定的賽前流程準備', pole: 'J' },
    optionB: { text: '保持輕鬆、隨性應對', pole: 'P' },
  },
  {
    id: 'jp-3',
    text: '對於訓練器材和裝備，你：',
    dimension: 'JP',
    optionA: { text: '有固定的擺放位置、整理得井井有條', pole: 'J' },
    optionB: { text: '大致知道在哪就好、不太在意整齊', pole: 'P' },
  },
  {
    id: 'jp-4',
    text: '面對突然改變的行程，你會：',
    dimension: 'JP',
    optionA: { text: '感到有些困擾、需要時間調適', pole: 'J' },
    optionB: { text: '覺得還好、很快就能適應', pole: 'P' },
  },
  {
    id: 'jp-5',
    text: '你對訓練日誌的態度是：',
    dimension: 'JP',
    optionA: { text: '每次訓練後都會記錄、追蹤進度', pole: 'J' },
    optionB: { text: '偶爾記錄、主要靠感覺判斷進步', pole: 'P' },
  },
  {
    id: 'jp-6',
    text: '規劃賽季目標時，你傾向：',
    dimension: 'JP',
    optionA: { text: '列出明確的時間表和階段目標', pole: 'J' },
    optionB: { text: '設定大方向、過程中慢慢調整', pole: 'P' },
  },
  {
    id: 'jp-7',
    text: '你最享受的比賽時刻是：',
    dimension: 'JP',
    optionA: { text: '計畫順利執行、一切在掌控中', pole: 'J' },
    optionB: { text: '隨機應變、享受比賽的不確定性', pole: 'P' },
  },
];

export default questions;
