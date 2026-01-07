'use client';

import { useEffect, useRef, useState } from 'react';
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
  const shareCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isCompleted || !result) {
      router.push('/');
    }
  }, [isCompleted, result, router]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>載入中...</p>
      </div>
    );
  }

  const profile = typeProfiles[result.type];

  const handleRetake = () => {
    reset();
    router.push('/test');
  };

  const handleDownloadImage = async () => {
    if (!shareCardRef.current) return;

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(shareCardRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
      });

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
        {/* Result Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">你的運動人格類型是</p>
          <h1 className="text-5xl sm:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {result.type}
            </span>
          </h1>
          <p className="text-2xl text-gray-700 font-medium">{profile.displayName.zh}</p>
          <p className="text-lg text-gray-500 mt-2">{profile.tagline.zh}</p>
        </div>

        {/* Dimension Chart */}
        <Card variant="elevated" className="mb-8">
          <CardContent className="py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">維度分析</h3>
            <div className="space-y-6">
              {(['EI', 'SN', 'TF', 'JP'] as Dimension[]).map((dim) => {
                const score = result.scores[dim];
                const labels = getDimensionLabel(dim);
                return (
                  <div key={dim}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className={score.percentA >= 50 ? 'font-semibold text-blue-600' : 'text-gray-500'}>
                        {labels.poleA} {score.percentA}%
                      </span>
                      <span className={score.percentB > 50 ? 'font-semibold text-indigo-600' : 'text-gray-500'}>
                        {score.percentB}% {labels.poleB}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500"
                        style={{ width: `${score.percentA}%` }}
                      />
                      <div
                        className="h-full bg-gradient-to-r from-indigo-400 to-indigo-500"
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
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                !isCoachMode ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsCoachMode(false)}
            >
              一般模式
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isCoachMode ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsCoachMode(true)}
            >
              教練模式
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {!isCoachMode ? (
          <>
            <SectionCard title="你的優勢" items={profile.strengths} icon="💪" />
            <SectionCard title="需注意的盲點" items={profile.pitfalls} icon="⚠️" />
            <SectionCard title="適合的運動" items={profile.sportFit} icon="🏃" />
            <SectionCard title="訓練建議" items={profile.trainingTips} icon="📋" />
            <SectionCard title="潛在風險行為" items={profile.riskBehaviors} icon="🚨" />
          </>
        ) : (
          <>
            <SectionCard title="指導建議" items={profile.coachTips} icon="🎯" />
            <SectionCard title="訓練調整建議" items={profile.trainingTips} icon="📋" />
            <SectionCard title="需注意的特質" items={profile.pitfalls} icon="⚠️" />
            <SectionCard title="潛在風險行為" items={profile.riskBehaviors} icon="🚨" />
          </>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" onClick={handleDownloadImage} className="flex-1">
            下載分享圖
          </Button>
          <Button size="lg" variant="outline" onClick={handleRetake} className="flex-1">
            重新測驗
          </Button>
        </div>

        {/* Share Card (Hidden, for screenshot) */}
        <div className="fixed -left-[9999px] top-0">
          <div
            ref={shareCardRef}
            className="w-[1080px] h-[1080px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-16 flex flex-col items-center justify-center text-white"
          >
            <p className="text-2xl mb-4 opacity-80">我的運動人格類型是</p>
            <h2 className="text-9xl font-bold mb-4">{result.type}</h2>
            <p className="text-4xl font-medium mb-8">{profile.displayName.zh}</p>
            <p className="text-2xl opacity-80 mb-12">{profile.tagline.zh}</p>

            <div className="w-full max-w-2xl space-y-4">
              {(['EI', 'SN', 'TF', 'JP'] as Dimension[]).map((dim) => {
                const score = result.scores[dim];
                const labels = getDimensionLabel(dim);
                return (
                  <div key={dim} className="flex items-center gap-4">
                    <span className="w-24 text-right text-xl">{labels.poleA.split(' ')[0]}</span>
                    <div className="flex-1 h-6 bg-white/30 rounded-full overflow-hidden flex">
                      <div
                        className="h-full bg-white transition-all"
                        style={{ width: `${score.percentA}%` }}
                      />
                    </div>
                    <span className="w-24 text-xl">{labels.poleB.split(' ')[0]}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-xl mt-12 opacity-60">運動人格測驗 | sports-mbti.app</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionCard({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <Card variant="elevated" className="mb-4">
      <CardContent className="py-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span>{icon}</span>
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-blue-500 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
