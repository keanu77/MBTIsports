'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui';
import { useMBTIStore } from '@/features/mbti/store';

export default function Home() {
  const router = useRouter();
  const { reset, isCompleted, result } = useMBTIStore();

  const handleStartTest = () => {
    reset();
    router.push('/test');
  };

  const handleViewResult = () => {
    router.push('/result');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              運動人格測驗
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            透過 28 道運動情境題目，發現你的運動人格類型，
            <br className="hidden sm:block" />
            找到最適合你的訓練方式和運動項目
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleStartTest}>
              開始測驗
            </Button>
            {isCompleted && result && (
              <Button size="lg" variant="outline" onClick={handleViewResult}>
                查看上次結果 ({result.type})
              </Button>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <FeatureCard
            icon="🎯"
            title="運動項目建議"
            description="根據你的人格特質，推薦最適合的運動類型"
          />
          <FeatureCard
            icon="💪"
            title="訓練偏好分析"
            description="了解你理想的訓練模式和節奏"
          />
          <FeatureCard
            icon="🤝"
            title="教練溝通指南"
            description="讓教練更了解如何與你有效溝通"
          />
          <FeatureCard
            icon="⚠️"
            title="行為風險提醒"
            description="識別可能影響表現的行為模式"
          />
        </div>

        {/* About Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>此測驗基於 MBTI 人格理論，結合運動心理學情境設計</p>
          <p className="mt-2">共 28 題 · 約 5-10 分鐘完成 · 匿名免登入</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
