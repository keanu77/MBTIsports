'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button, Card, CardContent } from '@/components/ui';
import { typeProfiles } from '@/data/types';
import { MBTIType } from '@/features/mbti/types';

export default function TypeDetailPage() {
  const params = useParams();
  const typeParam = (params.type as string).toUpperCase() as MBTIType;
  const profile = typeProfiles[typeParam];

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 mb-4">找不到此人格類型</p>
        <Link href="/types">
          <Button>返回類型列表</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/types"
            className="text-gray-500 hover:text-gray-700 text-sm mb-4 inline-block"
          >
            ← 返回類型列表
          </Link>
          <h1 className="text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {profile.type}
            </span>
          </h1>
          <p className="text-2xl text-gray-700 font-medium">{profile.displayName.zh}</p>
          <p className="text-lg text-gray-500 mt-2">{profile.tagline.zh}</p>
        </div>

        {/* Content Sections */}
        <SectionCard title="優勢特質" items={profile.strengths} icon="💪" />
        <SectionCard title="需注意的盲點" items={profile.pitfalls} icon="⚠️" />
        <SectionCard title="適合的運動" items={profile.sportFit} icon="🏃" />
        <SectionCard title="訓練建議" items={profile.trainingTips} icon="📋" />
        <SectionCard title="教練溝通建議" items={profile.coachTips} icon="🎯" />
        <SectionCard title="潛在風險行為" items={profile.riskBehaviors} icon="🚨" />

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">想知道你是否是 {profile.type} 嗎？</p>
          <Link href="/">
            <Button size="lg">開始測驗</Button>
          </Link>
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
