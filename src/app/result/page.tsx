'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, CardContent } from '@/components/ui';
import { useMBTIStore } from '@/features/mbti/store';
import { typeProfiles } from '@/data/types';
import { getDimensionLabel } from '@/features/mbti/scoring';
import { Dimension } from '@/features/mbti/types';

export default function ResultPage() {
  const router = useRouter();
  const { result, isCompleted, reset } = useMBTIStore();
  const [isCoachMode, setIsCoachMode] = useState(false);

  useEffect(() => {
    if (!isCompleted || !result) {
      router.push('/');
    }
  }, [isCompleted, result, router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center sports-bg">
        <p className="text-gray-600">載入中...</p>
      </div>
    );
  }

  const profile = typeProfiles[result.type];

  const handleRetake = () => {
    reset();
    router.push('/test');
  };

  const handleDownloadImage = async () => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas not supported');

      const width = 1080;
      const height = 1080;
      canvas.width = width;
      canvas.height = height;

      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#ff6b35');
      gradient.addColorStop(0.3, '#ff8c42');
      gradient.addColorStop(0.6, '#ffc107');
      gradient.addColorStop(1, '#2eb872');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Text settings
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';

      // Title
      ctx.font = '32px Arial';
      ctx.globalAlpha = 0.9;
      ctx.fillText('我的運動人格類型是', width / 2, 280);

      // MBTI Type
      ctx.globalAlpha = 1;
      ctx.font = 'bold 160px Arial';
      ctx.fillText(result.type, width / 2, 450);

      // Display name
      ctx.font = '48px Arial';
      ctx.fillText(profile.displayName.zh, width / 2, 540);

      // Tagline
      ctx.globalAlpha = 0.8;
      ctx.font = '32px Arial';
      ctx.fillText(`"${profile.tagline.zh}"`, width / 2, 610);

      // Dimension bars - 中央對稱式圖表
      ctx.globalAlpha = 1;
      const dimensions: Dimension[] = ['EI', 'SN', 'TF', 'JP'];
      const barY = 680;
      const barHeight = 28;
      const barWidth = 240; // 單邊寬度
      const centerX = width / 2;
      const gap = 10; // 中間間隔

      dimensions.forEach((dim, index) => {
        const score = result.scores[dim];
        const labels = getDimensionLabel(dim);
        const y = barY + index * 70;

        // 左側標籤 (pole A)
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        ctx.fillText(labels.poleA.split(' ')[0], centerX - barWidth - gap - 60, y + 20);

        // 左側百分比
        ctx.font = 'bold 22px Arial';
        ctx.fillText(`${score.percentA}%`, centerX - barWidth - gap - 10, y + 20);

        // 右側標籤 (pole B)
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(labels.poleB.split(' ')[0], centerX + barWidth + gap + 60, y + 20);

        // 右側百分比
        ctx.font = 'bold 22px Arial';
        ctx.fillText(`${score.percentB}%`, centerX + barWidth + gap + 10, y + 20);

        // 左側長條 (藍色系) - 從中間向左延伸
        const leftBarWidth = barWidth * (score.percentA / 100);
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath();
        ctx.roundRect(centerX - barWidth - gap/2, y, barWidth, barHeight, 6);
        ctx.fill();

        ctx.fillStyle = '#42a5f5'; // 藍色
        ctx.beginPath();
        ctx.roundRect(centerX - leftBarWidth - gap/2, y, leftBarWidth, barHeight, 6);
        ctx.fill();

        // 右側長條 (紫色系) - 從中間向右延伸
        const rightBarWidth = barWidth * (score.percentB / 100);
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.beginPath();
        ctx.roundRect(centerX + gap/2, y, barWidth, barHeight, 6);
        ctx.fill();

        ctx.fillStyle = '#b388ff'; // 紫色
        ctx.beginPath();
        ctx.roundRect(centerX + gap/2, y, rightBarWidth, barHeight, 6);
        ctx.fill();

        // 中間分隔線
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillRect(centerX - 1, y - 5, 2, barHeight + 10);
      });

      // Footer
      ctx.fillStyle = 'white';
      ctx.globalAlpha = 0.7;
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('運動人格測驗', width / 2, 980);

      // Download
      const link = document.createElement('a');
      link.download = `mbti-sport-${result.type}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to generate image:', error);
      alert('圖片產生失敗，請稍後再試');
    }
  };

  return (
    <div className="min-h-screen sports-bg">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16 relative z-10">
        {/* Result Header */}
        <div className="text-center mb-8 animate-slide-up">
          <p className="text-gray-600 mb-2">你的運動人格類型是</p>
          <h1 className="text-6xl sm:text-7xl font-bold mb-2 ribbon">
            <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff8c42] to-[#ffc107] bg-clip-text text-transparent">
              {result.type}
            </span>
          </h1>
          <p className="text-2xl text-gray-700 font-medium">{profile.displayName.zh}</p>
          <p className="text-lg text-gray-500 mt-2 italic">"{profile.tagline.zh}"</p>
        </div>

        {/* Dimension Chart */}
        <Card variant="elevated" className="mb-8 athletic-card sport-stripe">
          <CardContent className="py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              維度分析
            </h3>
            <div className="space-y-6">
              {(['EI', 'SN', 'TF', 'JP'] as Dimension[]).map((dim) => {
                const score = result.scores[dim];
                const labels = getDimensionLabel(dim);
                return (
                  <div key={dim} className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span className={score.percentA >= 50 ? 'font-bold text-[#1e88e5]' : 'text-gray-500'}>
                        {labels.poleA} {score.percentA}%
                      </span>
                      <span className={score.percentB > 50 ? 'font-bold text-[#7c4dff]' : 'text-gray-500'}>
                        {score.percentB}% {labels.poleB}
                      </span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden flex shadow-inner">
                      <div
                        className="h-full score-bar-a transition-all duration-700 ease-out"
                        style={{ width: `${score.percentA}%` }}
                      />
                      <div
                        className="h-full score-bar-b"
                        style={{ width: `${score.percentB}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-md border border-gray-100">
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                !isCoachMode
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsCoachMode(false)}
            >
              運動員模式
            </button>
            <button
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                isCoachMode
                  ? 'bg-gradient-to-r from-[#1e88e5] to-[#42a5f5] text-white shadow'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsCoachMode(true)}
            >
              教練模式
            </button>
          </div>
        </div>

        {/* Mode Description */}
        <div className="text-center text-sm text-gray-500 mb-6">
          {!isCoachMode ? (
            <p>了解自己的運動特質、優勢與需要注意的地方</p>
          ) : (
            <p>提供教練指導此類型運動員的建議與溝通方式</p>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {!isCoachMode ? (
            <>
              <SectionCard title="你的優勢" items={profile.strengths} color="green" />
              <SectionCard title="需注意的盲點" items={profile.pitfalls} color="yellow" />
              <SectionCard title="訓練建議" items={profile.trainingTips} color="blue" />
              <SectionCard title="潛在風險行為" items={profile.riskBehaviors} color="red" />
            </>
          ) : (
            <>
              <SectionCard title="指導建議" items={profile.coachTips} color="blue" />
              <SectionCard title="訓練調整建議" items={profile.trainingTips} color="green" />
              <SectionCard title="需注意的特質" items={profile.pitfalls} color="yellow" />
              <SectionCard title="潛在風險行為" items={profile.riskBehaviors} color="red" />
            </>
          )}
        </div>

        {/* Educational Note */}
        <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-blue-500">💡</span>
            關於運動人格的重要提醒
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span><strong>沒有所謂的「冠軍人格」</strong>——各種類型的運動員都有機會在運動場上取得卓越成就</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>雖然某些特質在特定情境有優勢，但<strong>後天的心理技能訓練 (PST) 可以彌補先天的性格弱點</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>內向者也可能成為優秀隊長（透過以身作則的領導風格）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>感性者也能在關鍵時刻冷靜決策（透過情緒調節訓練）</span>
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 p-4 bg-gray-100 rounded-lg text-center text-sm text-gray-600">
          <p>本測驗結果僅供參考，不代表專業心理評估或醫療診斷</p>
          <p className="mt-1">如有任何疑慮，請諮詢專業人士</p>
        </div>

        {/* Creator Info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            製作者：
            <a
              href="https://line.me/R/ti/p/@521cvffb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1e88e5] hover:text-[#1565c0] font-medium transition-colors"
            >
              運動醫學科吳易澄醫師
            </a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={handleDownloadImage}
            className="flex-1 btn-sport text-white font-bold py-4 px-6 rounded-xl text-lg"
          >
            下載分享圖
          </button>
          <Button size="lg" variant="outline" onClick={handleRetake} className="flex-1">
            重新測驗
          </Button>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => router.push('/types')}
            className="text-[#1e88e5] hover:text-[#1565c0] font-medium transition-colors"
          >
            探索全部 16 種運動人格類型 →
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  title,
  items,
  color,
  badge = false,
}: {
  title: string;
  items: string[];
  color: 'green' | 'yellow' | 'orange' | 'blue' | 'red';
  badge?: boolean;
}) {
  const colorClasses = {
    green: 'border-l-[#2eb872]',
    yellow: 'border-l-[#ffc107]',
    orange: 'border-l-[#ff6b35]',
    blue: 'border-l-[#1e88e5]',
    red: 'border-l-[#ef4444]',
  };

  return (
    <Card variant="elevated" className={`athletic-card border-l-4 ${colorClasses[color]}`}>
      <CardContent className="py-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        {badge ? (
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#ff6b35]/10 to-[#ff8c42]/10 text-[#ff6b35] rounded-full text-sm font-medium border border-[#ff6b35]/20"
              >
                {item}
              </span>
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-[#ff6b35] mt-0.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
