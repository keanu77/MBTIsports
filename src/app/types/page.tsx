'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui';
import { typeProfiles } from '@/data/types';
import { MBTIType } from '@/features/mbti/types';

const typeGroups = {
  'Analysts (分析師)': ['INTJ', 'INTP', 'ENTJ', 'ENTP'] as MBTIType[],
  'Diplomats (外交官)': ['INFJ', 'INFP', 'ENFJ', 'ENFP'] as MBTIType[],
  'Sentinels (守衛者)': ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] as MBTIType[],
  'Explorers (探險家)': ['ISTP', 'ISFP', 'ESTP', 'ESFP'] as MBTIType[],
};

const groupColors: Record<string, string> = {
  'Analysts (分析師)': 'from-purple-500 to-indigo-500',
  'Diplomats (外交官)': 'from-green-500 to-teal-500',
  'Sentinels (守衛者)': 'from-blue-500 to-cyan-500',
  'Explorers (探險家)': 'from-orange-500 to-yellow-500',
};

export default function TypesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            16 種運動人格類型
          </h1>
          <p className="text-lg text-gray-600">
            點擊任一類型了解詳細內容
          </p>
        </div>

        {Object.entries(typeGroups).map(([groupName, types]) => (
          <div key={groupName} className="mb-12">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{groupName}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {types.map((type) => {
                const profile = typeProfiles[type];
                return (
                  <Link key={type} href={`/types/${type.toLowerCase()}`}>
                    <Card variant="elevated" className="h-full hover:scale-105 transition-transform cursor-pointer">
                      <CardContent className="py-6 text-center">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${groupColors[groupName]} bg-clip-text text-transparent mb-2`}>
                          {type}
                        </div>
                        <div className="text-lg font-medium text-gray-800 mb-1">
                          {profile.displayName.zh}
                        </div>
                        <div className="text-sm text-gray-500">
                          {profile.tagline.zh}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 返回首頁開始測驗
          </Link>
        </div>
      </div>
    </div>
  );
}
