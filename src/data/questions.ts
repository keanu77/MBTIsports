import { Question } from '@/features/mbti/types';

// 28 道運動心理學情境題目 (每維度 7 題)
// 設計原則：
// - E/I: 喚醒水平調節機制 (Arousal Regulation)
// - S/N: 運動學習偏好 (Motor Learning Style)
// - T/F: 團隊角色定位 (Task vs Relationship Orientation)
// - J/P: 心理彈性與不確定性容忍度 (Psychological Flexibility)

export const questions: Question[] = [
  // ========== E/I 維度：喚醒水平調節機制 ==========
  // 評估運動員如何調節比賽前後的身心狀態
  {
    id: 'ei-1',
    text: '在高強度比賽的中場休息時，你傾向於：',
    dimension: 'EI',
    optionA: { text: '與隊友激動地討論戰術、互相打氣', pole: 'E' },
    optionB: { text: '戴上耳機閉目養神，獨自恢復專注', pole: 'I' },
  },
  {
    id: 'ei-2',
    text: '比賽前的最佳喚醒狀態，對你來說是：',
    dimension: 'EI',
    optionA: { text: '被觀眾熱情感染，腎上腺素飆升', pole: 'E' },
    optionB: { text: '內心平靜專注，進入「心流」狀態', pole: 'I' },
  },
  {
    id: 'ei-3',
    text: '當你需要在高壓情境下快速恢復冷靜時：',
    dimension: 'EI',
    optionA: { text: '透過和隊友擊掌、喊話來釋放壓力', pole: 'E' },
    optionB: { text: '使用呼吸技巧，在內心默默調整節奏', pole: 'I' },
  },
  {
    id: 'ei-4',
    text: '高強度訓練後，最能幫助你恢復的方式是：',
    dimension: 'EI',
    optionA: { text: '和隊友邊聊天邊做收操，分享今天的心得', pole: 'E' },
    optionB: { text: '獨自進行伸展或泡澡，享受安靜的恢復時間', pole: 'I' },
  },
  {
    id: 'ei-5',
    text: '在重要比賽的前一晚，你會選擇：',
    dimension: 'EI',
    optionA: { text: '與隊友聚在一起，透過談笑減輕緊張感', pole: 'E' },
    optionB: { text: '提早回房獨處，用自己的方式做心理準備', pole: 'I' },
  },
  {
    id: 'ei-6',
    text: '連續多日賽程中，你覺得最消耗精力的是：',
    dimension: 'EI',
    optionA: { text: '長時間待在選手村房間，缺乏社交互動', pole: 'E' },
    optionB: { text: '過多的團體活動和媒體採訪，沒有獨處時間', pole: 'I' },
  },
  {
    id: 'ei-7',
    text: '賽前熱身時，能讓你進入最佳狀態的環境是：',
    dimension: 'EI',
    optionA: { text: '有音樂、有隊友互動的熱鬧氛圍', pole: 'E' },
    optionB: { text: '安靜專注，可以完全按自己節奏準備', pole: 'I' },
  },

  // ========== S/N 維度：運動學習偏好 ==========
  // 評估運動員吸收新技術的認知風格
  {
    id: 'sn-1',
    text: '學習一個全新的運動技術時，你希望教練：',
    dimension: 'SN',
    optionA: { text: '先示範具體的分解步驟，讓你逐一模仿練習', pole: 'S' },
    optionB: { text: '先解釋這個動作的原理和在整體戰術中的意義', pole: 'N' },
  },
  {
    id: 'sn-2',
    text: '觀看比賽錄影回顧時，你更傾向關注：',
    dimension: 'SN',
    optionA: { text: '逐格分析每個動作的細節和執行角度', pole: 'S' },
    optionB: { text: '整體的比賽節奏和戰術模式的變化', pole: 'N' },
  },
  {
    id: 'sn-3',
    text: '當教練給你一套新戰術時，你最想知道的是：',
    dimension: 'SN',
    optionA: { text: '具體要站哪個位置、什麼時機做什麼動作', pole: 'S' },
    optionB: { text: '這套戰術的核心理念和想達成的效果', pole: 'N' },
  },
  {
    id: 'sn-4',
    text: '訓練中遇到動作瓶頸時，你會：',
    dimension: 'SN',
    optionA: { text: '反覆觀看標準示範，逐一比對自己哪裡不同', pole: 'S' },
    optionB: { text: '嘗試用不同的身體感覺或想像方式去理解動作', pole: 'N' },
  },
  {
    id: 'sn-5',
    text: '設定訓練目標時，你更看重：',
    dimension: 'SN',
    optionA: { text: '可量化的具體數據，如重量、速度、次數', pole: 'S' },
    optionB: { text: '能力的整體提升和長期發展的可能性', pole: 'N' },
  },
  {
    id: 'sn-6',
    text: '分析對手時，你更關注：',
    dimension: 'SN',
    optionA: { text: '對手過去的具體數據、習慣動作和常用套路', pole: 'S' },
    optionB: { text: '對手可能做出的戰術變化和潛在的弱點', pole: 'N' },
  },
  {
    id: 'sn-7',
    text: '比賽中遇到預期外的狀況時，你傾向：',
    dimension: 'SN',
    optionA: { text: '運用練習過的應對方式，依照經驗處理', pole: 'S' },
    optionB: { text: '臨場創造新的解決方案，享受即興發揮', pole: 'N' },
  },

  // ========== T/F 維度：團隊角色定位 ==========
  // 評估運動員的任務導向 vs 關係導向傾向
  {
    id: 'tf-1',
    text: '當隊友在關鍵時刻發生失誤導致輸球，你的第一反應是：',
    dimension: 'TF',
    optionA: { text: '分析導致失誤的技術原因，思考如何避免再犯', pole: 'T' },
    optionB: { text: '先關心隊友的心理狀態，擔心他會自責', pole: 'F' },
  },
  {
    id: 'tf-2',
    text: '在團隊討論中，有兩派意見相持不下時，你認為最重要的是：',
    dimension: 'TF',
    optionA: { text: '客觀分析哪個方案勝率更高，用數據說服大家', pole: 'T' },
    optionB: { text: '確保每個人的想法都被聽到，維持團隊凝聚力', pole: 'F' },
  },
  {
    id: 'tf-3',
    text: '教練給你嚴厲的批評時，你會：',
    dimension: 'TF',
    optionA: { text: '專注批評的內容是否正確，思考如何改進', pole: 'T' },
    optionB: { text: '注意到教練的語氣和態度，這會影響你的接受度', pole: 'F' },
  },
  {
    id: 'tf-4',
    text: '選擇比賽先發陣容時，你認為應該優先考慮：',
    dimension: 'TF',
    optionA: { text: '客觀的表現數據和狀態，即使可能傷害某些人', pole: 'T' },
    optionB: { text: '球員的心理狀態和團隊士氣的影響', pole: 'F' },
  },
  {
    id: 'tf-5',
    text: '當你發現隊友的訓練態度不佳時，你會：',
    dimension: 'TF',
    optionA: { text: '直接指出問題，因為這會影響整體表現', pole: 'T' },
    optionB: { text: '私下關心他最近是否有什麼困擾', pole: 'F' },
  },
  {
    id: 'tf-6',
    text: '輸掉重要比賽後，你認為團隊最需要的是：',
    dimension: 'TF',
    optionA: { text: '冷靜檢討問題，避免情緒化影響判斷', pole: 'T' },
    optionB: { text: '先讓大家抒發情緒，等心情平復再討論', pole: 'F' },
  },
  {
    id: 'tf-7',
    text: '你心目中最理想的教練是：',
    dimension: 'TF',
    optionA: { text: '專業能力強、能給予精準技術指導的教練', pole: 'T' },
    optionB: { text: '能理解球員、建立信任和情感連結的教練', pole: 'F' },
  },

  // ========== J/P 維度：心理彈性與不確定性容忍度 ==========
  // 評估運動員對變化和不確定性的適應能力
  {
    id: 'jp-1',
    text: '當比賽因天氣或其他因素臨時延遲或改期時，你的反應是：',
    dimension: 'JP',
    optionA: { text: '感到焦慮和不安，因為打亂了你的準備節奏', pole: 'J' },
    optionB: { text: '覺得可以靈活應對，利用多出的時間調整狀態', pole: 'P' },
  },
  {
    id: 'jp-2',
    text: '對於每日的訓練安排，你更傾向：',
    dimension: 'JP',
    optionA: { text: '有固定的課表和流程，按計畫執行', pole: 'J' },
    optionB: { text: '根據當天身體狀況彈性調整內容', pole: 'P' },
  },
  {
    id: 'jp-3',
    text: '比賽中戰術突然被對手破解時，你的感受是：',
    dimension: 'JP',
    optionA: { text: '感到壓力，希望能盡快找到新的應對計畫', pole: 'J' },
    optionB: { text: '反而覺得興奮，喜歡這種需要臨場應變的挑戰', pole: 'P' },
  },
  {
    id: 'jp-4',
    text: '對於訓練器材和個人物品的管理，你：',
    dimension: 'JP',
    optionA: { text: '有固定的擺放位置，賽前會確認一切就緒', pole: 'J' },
    optionB: { text: '大致知道在哪就好，不太在意整齊與否', pole: 'P' },
  },
  {
    id: 'jp-5',
    text: '規劃賽季目標時，你的方式是：',
    dimension: 'JP',
    optionA: { text: '列出明確的階段目標和達成時間表', pole: 'J' },
    optionB: { text: '設定大方向，過程中保持開放和彈性', pole: 'P' },
  },
  {
    id: 'jp-6',
    text: '你最享受的比賽時刻是：',
    dimension: 'JP',
    optionA: { text: '戰術按計畫執行、一切都在掌控之中', pole: 'J' },
    optionB: { text: '局面混亂、需要隨機應變的精彩時刻', pole: 'P' },
  },
  {
    id: 'jp-7',
    text: '當教練臨時改變比賽戰術時，你會：',
    dimension: 'JP',
    optionA: { text: '需要一些時間消化，擔心準備不足', pole: 'J' },
    optionB: { text: '很快接受改變，相信自己能適應新戰術', pole: 'P' },
  },
];

export default questions;
