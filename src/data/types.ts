import { TypeProfile, MBTIType } from '@/features/mbti/types';

export const typeProfiles: Record<MBTIType, TypeProfile> = {
  // ========== ISTJ - The Reliable Anchor ==========
  ISTJ: {
    type: 'ISTJ',
    displayName: { zh: '可靠基石', en: 'The Reliable Anchor' },
    tagline: { zh: '紀律與堅持的化身', en: 'Discipline personified' },
    strengths: [
      '訓練極為自律，從不偷懶',
      '擅長遵守戰術紀律',
      '準備工作細緻周全',
      '情緒穩定，比賽時冷靜',
      '對團隊承諾高度負責',
    ],
    pitfalls: [
      '可能過於固執，難以接受新戰術',
      '突發狀況時適應較慢',
      '不擅長即興發揮',
    ],
    trainingTips: [
      '給予明確的訓練計畫和進度表',
      '先讓他們熟練基礎再求變化',
      '用數據追蹤進步會很有動力',
    ],
    coachTips: [
      '直接、具體地說明期望',
      '給予足夠的準備時間',
      '肯定他們的可靠和付出',
    ],
    sportFit: ['馬拉松', '鐵人三項', '高爾夫', '射擊', '游泳', '自行車'],
    riskBehaviors: [
      '過度訓練而忽略恢復',
      '堅持既定計畫即使身體已發出警訊',
    ],
  },

  // ========== ISFJ - The Supportive Guardian ==========
  ISFJ: {
    type: 'ISFJ',
    displayName: { zh: '溫暖守護者', en: 'The Supportive Guardian' },
    tagline: { zh: '默默付出的團隊支柱', en: 'The quiet pillar of the team' },
    strengths: [
      '對隊友關懷備至',
      '記住每個人的需求和習慣',
      '在幕後做好大量準備工作',
      '穩定可靠，鮮少出錯',
      '擅長維護團隊和諧',
    ],
    pitfalls: [
      '可能壓抑自己需求以配合他人',
      '不習慣成為焦點或發號施令',
      '面對衝突時可能過度退讓',
    ],
    trainingTips: [
      '肯定他們對團隊的貢獻',
      '提供穩定、可預測的訓練環境',
      '鼓勵他們也為自己設定目標',
    ],
    coachTips: [
      '私下溝通比公開表揚更舒適',
      '感謝他們的付出，不要視為理所當然',
      '幫助他們建立自信、表達需求',
    ],
    sportFit: ['體操', '花式滑冰', '排球', '桌球', '羽球', '瑜伽'],
    riskBehaviors: [
      '為了團隊需要而隱瞞傷痛',
      '過度承擔他人責任而耗盡自己',
    ],
  },

  // ========== INFJ - The Visionary Mentor ==========
  INFJ: {
    type: 'INFJ',
    displayName: { zh: '靈性導師', en: 'The Visionary Mentor' },
    tagline: { zh: '以直覺洞察比賽本質', en: 'Seeing beyond the game' },
    strengths: [
      '能預判對手意圖和戰局變化',
      '激勵隊友發揮潛能',
      '有強烈的使命感和目標',
      '善於調解團隊內部矛盾',
      '比賽時專注力極高',
    ],
    pitfalls: [
      '可能過於理想化而脫離現實',
      '不喜歡競爭中的衝突面',
      '完美主義導致過度自我要求',
    ],
    trainingTips: [
      '讓他們理解訓練背後的意義',
      '給予獨處和反思的空間',
      '肯定他們的直覺判斷',
    ],
    coachTips: [
      '用願景和意義來激勵',
      '一對一深入對話更有效',
      '避免當眾批評，保護他們的自尊',
    ],
    sportFit: ['武術', '射箭', '瑜伽', '登山', '長跑', '自行車'],
    riskBehaviors: [
      '忽略身體訊號而追求精神目標',
      '對自己要求過高導致倦怠',
    ],
  },

  // ========== INTJ - The Strategic Mastermind ==========
  INTJ: {
    type: 'INTJ',
    displayName: { zh: '戰略大師', en: 'The Strategic Mastermind' },
    tagline: { zh: '用智慧統御比賽', en: 'Winning through intelligence' },
    strengths: [
      '戰術理解力極強',
      '擅長分析對手弱點',
      '獨立自主、自我驅動',
      '不斷追求改進和創新',
      '在壓力下保持冷靜',
    ],
    pitfalls: [
      '可能過於自信，忽略他人意見',
      '不擅長團隊配合和溝通',
      '對「不合理」的指令難以服從',
    ],
    trainingTips: [
      '解釋訓練的邏輯和原理',
      '給予自主空間和挑戰',
      '尊重他們的分析和建議',
    ],
    coachTips: [
      '用邏輯和證據說服',
      '允許他們質疑和討論',
      '讓他們參與戰術規劃',
    ],
    sportFit: ['西洋棋', '擊劍', '網球', '高爾夫', '撞球', '射擊'],
    riskBehaviors: [
      '過度分析而行動遲疑',
      '因堅持己見與團隊產生摩擦',
    ],
  },

  // ========== ISTP - The Cool Operator ==========
  ISTP: {
    type: 'ISTP',
    displayName: { zh: '冷靜實踐家', en: 'The Cool Operator' },
    tagline: { zh: '在瞬間做出最佳反應', en: 'Precision in the moment' },
    strengths: [
      '危機時刻特別冷靜',
      '動作精準、技術紮實',
      '善於在壓力下即興發揮',
      '快速學習新動作和技巧',
      '問題解決能力強',
    ],
    pitfalls: [
      '可能缺乏長期計畫',
      '不喜歡被規則和流程約束',
      '情緒表達較少，隊友難以了解',
    ],
    trainingTips: [
      '給予動手實作的機會',
      '保持訓練的變化和挑戰',
      '減少冗長的講解',
    ],
    coachTips: [
      '用實際示範取代長篇說明',
      '尊重他們的獨立空間',
      '對他們的表現直接給予具體回饋',
    ],
    sportFit: ['賽車', '滑雪', '衝浪', '攀岩', '射擊', '拳擊'],
    riskBehaviors: [
      '追求刺激而冒過大風險',
      '忽略規則和安全指引',
    ],
  },

  // ========== ISFP - The Artistic Athlete ==========
  ISFP: {
    type: 'ISFP',
    displayName: { zh: '藝術型運動員', en: 'The Artistic Athlete' },
    tagline: { zh: '用身體表達美感', en: 'Athletics as art' },
    strengths: [
      '動作優美、充滿創意',
      '對身體感受非常敏銳',
      '享受運動本身的樂趣',
      '適應力強、隨遇而安',
      '重視和諧的團隊氛圍',
    ],
    pitfalls: [
      '可能逃避激烈競爭',
      '不喜歡被嚴格評判',
      '缺乏長期的訓練紀律',
    ],
    trainingTips: [
      '讓訓練保持趣味和美感',
      '減少數據壓力和排名比較',
      '鼓勵他們的創意表現',
    ],
    coachTips: [
      '用溫和、支持的方式溝通',
      '肯定他們的獨特風格',
      '不要過度強調結果',
    ],
    sportFit: ['體操', '花式滑冰', '舞蹈', '衝浪', '自由式滑雪', '瑜伽'],
    riskBehaviors: [
      '因不喜歡壓力而逃避重要比賽',
      '訓練時容易分心',
    ],
  },

  // ========== INFP - The Idealistic Dreamer ==========
  INFP: {
    type: 'INFP',
    displayName: { zh: '理想主義者', en: 'The Idealistic Dreamer' },
    tagline: { zh: '為信念而戰', en: 'Competing for a cause' },
    strengths: [
      '有強大的內在動機',
      '能在逆境中保持信念',
      '對隊友有深刻的同理心',
      '追求運動的更高意義',
      '創造力和想像力豐富',
    ],
    pitfalls: [
      '可能過於敏感而受傷',
      '不喜歡激烈的對抗',
      '容易自我懷疑',
    ],
    trainingTips: [
      '連結訓練與他們的價值觀',
      '提供情感支持和肯定',
      '尊重他們的感受和節奏',
    ],
    coachTips: [
      '真誠地關心他們作為一個人',
      '用鼓勵取代批評',
      '幫助他們建立自信',
    ],
    sportFit: ['長跑', '瑜伽', '登山', '游泳', '自行車', '舞蹈'],
    riskBehaviors: [
      '情緒低落時完全失去動力',
      '為了他人期望勉強自己',
    ],
  },

  // ========== INTP - The Analytical Innovator ==========
  INTP: {
    type: 'INTP',
    displayName: { zh: '分析創新者', en: 'The Analytical Innovator' },
    tagline: { zh: '解構運動的本質', en: 'Deconstructing the game' },
    strengths: [
      '善於分析技術細節',
      '獨立思考、不盲從',
      '喜歡研究和創新訓練方法',
      '能發現他人忽略的細節',
      '解決複雜問題的能力強',
    ],
    pitfalls: [
      '可能過度思考而缺乏行動',
      '不重視團隊社交',
      '對重複性訓練容易厭倦',
    ],
    trainingTips: [
      '解釋原理和背後的科學',
      '允許他們以自己的方式練習',
      '提供知識性的挑戰',
    ],
    coachTips: [
      '歡迎他們的問題和討論',
      '不要強迫過多社交活動',
      '給予探索和實驗的空間',
    ],
    sportFit: ['西洋棋', '射箭', '高爾夫', '擊劍', '撞球', '攀岩'],
    riskBehaviors: [
      '理論研究取代實際練習',
      '因分析癱瘓而無法在比賽中做決定',
    ],
  },

  // ========== ESTP - The Dynamic Competitor ==========
  ESTP: {
    type: 'ESTP',
    displayName: { zh: '動態競爭者', en: 'The Dynamic Competitor' },
    tagline: { zh: '活在比賽的每一刻', en: 'Living for the moment' },
    strengths: [
      '比賽時充滿活力和幹勁',
      '善於捕捉瞬間機會',
      '適應力極強',
      '天生喜歡競爭',
      '能帶動團隊氣氛',
    ],
    pitfalls: [
      '可能衝動而犯錯',
      '對長期計畫缺乏耐心',
      '可能輕視對手或過於自信',
    ],
    trainingTips: [
      '保持訓練的競爭性和刺激',
      '避免冗長乏味的練習',
      '給予即時的回饋',
    ],
    coachTips: [
      '用挑戰來激勵他們',
      '直接、簡短的溝通最有效',
      '讓他們有發揮領導力的機會',
    ],
    sportFit: ['籃球', '足球', '極限運動', '賽車', '拳擊', '衝浪'],
    riskBehaviors: [
      '衝動決策導致受傷',
      '過度追求刺激而忽略基本功',
    ],
  },

  // ========== ESFP - The Energetic Performer ==========
  ESFP: {
    type: 'ESFP',
    displayName: { zh: '活力表演者', en: 'The Energetic Performer' },
    tagline: { zh: '讓運動成為派對', en: 'Making sports a celebration' },
    strengths: [
      '極富感染力和魅力',
      '享受在眾人面前表現',
      '適應力強、樂觀',
      '能緩解團隊壓力',
      '現場表現往往超越練習',
    ],
    pitfalls: [
      '可能缺乏訓練紀律',
      '容易受情緒影響表現',
      '對枯燥訓練缺乏耐心',
    ],
    trainingTips: [
      '讓訓練保持趣味和社交性',
      '用音樂和遊戲增加樂趣',
      '給予大量正面鼓勵',
    ],
    coachTips: [
      '保持輕鬆愉快的氣氛',
      '公開表揚他們的表現',
      '避免過於嚴肅或批評',
    ],
    sportFit: ['舞蹈', '啦啦隊', '沙灘排球', '衝浪', '滑雪', '體操'],
    riskBehaviors: [
      '為了表演而冒不必要的風險',
      '忽略基本功練習',
    ],
  },

  // ========== ENFP - The Inspiring Champion ==========
  ENFP: {
    type: 'ENFP',
    displayName: { zh: '熱情冠軍', en: 'The Inspiring Champion' },
    tagline: { zh: '用熱情點燃團隊', en: 'Igniting passion in others' },
    strengths: [
      '無限的熱情和創意',
      '能激勵整個團隊',
      '不怕嘗試新事物',
      '在逆境中保持樂觀',
      '善於看到每個人的潛力',
    ],
    pitfalls: [
      '可能缺乏持續專注力',
      '容易被新事物分心',
      '不喜歡重複和例行訓練',
    ],
    trainingTips: [
      '保持訓練的多樣性',
      '讓他們參與創新和改變',
      '連結訓練與有意義的目標',
    ],
    coachTips: [
      '用願景和可能性來激勵',
      '允許他們的創意和表達',
      '耐心處理他們的情緒波動',
    ],
    sportFit: ['籃球', '足球', '排球', '極限運動', '舞蹈', '團隊運動'],
    riskBehaviors: [
      '同時嘗試太多項目而無法專精',
      '熱情消退後可能放棄',
    ],
  },

  // ========== ENTP - The Bold Strategist ==========
  ENTP: {
    type: 'ENTP',
    displayName: { zh: '大膽策略家', en: 'The Bold Strategist' },
    tagline: { zh: '打破傳統的革新者', en: 'Breaking conventions' },
    strengths: [
      '戰術創新能力極強',
      '善於發現對手漏洞',
      '不懼怕挑戰權威',
      '能在辯論中說服他人',
      '適應力和應變力強',
    ],
    pitfalls: [
      '可能過於愛爭辯',
      '不重視基本功和細節',
      '可能挑戰教練的權威',
    ],
    trainingTips: [
      '給予知識性的挑戰',
      '允許他們質疑和討論',
      '讓他們參與策略制定',
    ],
    coachTips: [
      '用邏輯和證據說服',
      '歡迎他們的創新想法',
      '建立互相尊重的討論空間',
    ],
    sportFit: ['西洋棋', '辯論', '擊劍', '籃球', '網球', '美式足球'],
    riskBehaviors: [
      '為了證明自己對而冒險',
      '與隊友或教練產生不必要的衝突',
    ],
  },

  // ========== ESTJ - The Field Commander ==========
  ESTJ: {
    type: 'ESTJ',
    displayName: { zh: '場上指揮官', en: 'The Field Commander' },
    tagline: { zh: '用紀律打造勝利', en: 'Discipline breeds victory' },
    strengths: [
      '天生的領導者',
      '擅長組織和執行',
      '紀律嚴明、以身作則',
      '決策果斷、承擔責任',
      '追求卓越和效率',
    ],
    pitfalls: [
      '可能過於專制',
      '不容易接受不同意見',
      '對表現不佳的隊友可能過於嚴厲',
    ],
    trainingTips: [
      '給予領導和組織的機會',
      '設定明確的目標和標準',
      '用結果來衡量進步',
    ],
    coachTips: [
      '尊重他們的領導角色',
      '給予責任和權限',
      '幫助他們學習更柔性的溝通',
    ],
    sportFit: ['美式足球', '籃球', '棒球', '排球', '划船', '團隊運動'],
    riskBehaviors: [
      '給隊友過大壓力',
      '不願承認錯誤或調整方向',
    ],
  },

  // ========== ESFJ - The Team Captain ==========
  ESFJ: {
    type: 'ESFJ',
    displayName: { zh: '團隊隊長', en: 'The Team Captain' },
    tagline: { zh: '凝聚團隊的核心', en: 'The heart of the team' },
    strengths: [
      '極佳的人際關係能力',
      '善於照顧每個隊友',
      '維護團隊傳統和士氣',
      '可靠、盡責、值得信賴',
      '善於協調和溝通',
    ],
    pitfalls: [
      '可能過度在意他人評價',
      '難以做出可能傷害他人的決定',
      '可能犧牲自己來滿足團隊',
    ],
    trainingTips: [
      '肯定他們對團隊的貢獻',
      '讓他們參與團隊建設活動',
      '提供穩定、和諧的環境',
    ],
    coachTips: [
      '重視他們的人際洞察',
      '感謝他們的付出',
      '幫助他們學習說不',
    ],
    sportFit: ['排球', '籃球', '足球', '啦啦隊', '划船', '團隊運動'],
    riskBehaviors: [
      '為了取悅他人而過度承諾',
      '忽視自己的需求和恢復',
    ],
  },

  // ========== ENFJ - The Inspirational Coach ==========
  ENFJ: {
    type: 'ENFJ',
    displayName: { zh: '啟發型教練', en: 'The Inspirational Coach' },
    tagline: { zh: '帶領團隊超越自我', en: 'Elevating others to greatness' },
    strengths: [
      '天生的激勵者',
      '能看到每個人的潛力',
      '善於建立願景和目標',
      '溝通能力極強',
      '在團隊中自然成為領袖',
    ],
    pitfalls: [
      '可能過度投入他人而忽略自己',
      '太在意團隊和諧而避免衝突',
      '可能對自己要求過高',
    ],
    trainingTips: [
      '讓他們有帶領和指導的機會',
      '肯定他們對他人的正面影響',
      '提醒他們也要照顧自己',
    ],
    coachTips: [
      '重視他們對團隊的影響力',
      '給予領導的責任',
      '幫助他們設定個人界限',
    ],
    sportFit: ['籃球', '排球', '足球', '划船', '田徑接力', '團隊運動'],
    riskBehaviors: [
      '為了團隊而忽視自己的傷痛',
      '承擔過多情緒負擔',
    ],
  },

  // ========== ENTJ - The Field General ==========
  ENTJ: {
    type: 'ENTJ',
    displayName: { zh: '場上將軍', en: 'The Field General' },
    tagline: { zh: '天生為勝利而生', en: 'Born to lead, built to win' },
    strengths: [
      '強大的領導力和決斷力',
      '戰略眼光極佳',
      '追求卓越、永不滿足',
      '能在壓力下做出艱難決定',
      '激勵團隊達成目標',
    ],
    pitfalls: [
      '可能過於強勢和控制',
      '對自己和他人要求過高',
      '可能忽視情感因素',
    ],
    trainingTips: [
      '給予挑戰性的目標',
      '讓他們參與決策和規劃',
      '尊重他們的領導地位',
    ],
    coachTips: [
      '用能力和結果贏得他們的尊重',
      '給予足夠的權限和責任',
      '幫助他們學習同理心',
    ],
    sportFit: ['美式足球', '籃球', '網球', '高爾夫', '划船', '團隊運動'],
    riskBehaviors: [
      '為了勝利而忽視傷病',
      '給團隊施加過大壓力',
    ],
  },
};

export default typeProfiles;
