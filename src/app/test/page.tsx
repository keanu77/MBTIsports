'use client';

import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Card, CardContent } from '@/components/ui';
import { useMBTIStore } from '@/features/mbti/store';
import { questions } from '@/data/questions';

const dimensionColors: Record<string, string> = {
  EI: 'from-[#ff6b35] to-[#ff8c42]',
  SN: 'from-[#2eb872] to-[#34d399]',
  TF: 'from-[#1e88e5] to-[#42a5f5]',
  JP: 'from-[#7c4dff] to-[#b388ff]',
};

export default function TestPage() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const {
    currentIndex,
    answers,
    setAnswer,
    nextQuestion,
    prevQuestion,
    finishTest,
    canGoNext,
    canGoPrev,
    getProgress,
    getCurrentQuestion,
  } = useMBTIStore();

  const question = getCurrentQuestion();
  const progress = getProgress();
  const currentAnswer = question ? answers[question.id] : null;
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === '1' || e.key === 'a' || e.key === 'A') {
      if (question) setAnswer(question.id, 'A');
    } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
      if (question) setAnswer(question.id, 'B');
    } else if (e.key === 'Enter' && canGoNext()) {
      if (isLastQuestion) {
        handleFinish();
      } else {
        handleNext();
      }
    } else if (e.key === 'Backspace' && canGoPrev()) {
      handlePrev();
    }
  }, [question, setAnswer, canGoNext, canGoPrev, isLastQuestion]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      nextQuestion();
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      prevQuestion();
      setIsTransitioning(false);
    }, 150);
  };

  const handleFinish = () => {
    finishTest();
    router.push('/result');
  };

  const handleOptionSelect = (option: 'A' | 'B') => {
    if (question) {
      setAnswer(question.id, option);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center sports-bg">
        <p className="text-gray-600">載入中...</p>
      </div>
    );
  }

  const dimensionColor = dimensionColors[question.dimension];

  return (
    <div className="min-h-screen sports-bg">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16 relative z-10">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600">
              問題 {progress.current} / {progress.total}
            </span>
            <span className="text-sm text-gray-500">
              {progress.percent}%
            </span>
          </div>

          {/* Athletic Progress Bar */}
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className={`h-full bg-gradient-to-r ${dimensionColor} transition-all duration-500 ease-out progress-athletic`}
              style={{ width: `${(progress.current / progress.total) * 100}%` }}
            />
          </div>

          {/* Mini progress dots */}
          <div className="flex justify-between mt-2 px-1">
            {[7, 14, 21, 28].map((milestone) => (
              <div key={milestone} className="flex flex-col items-center">
                <div
                  className={`w-2 h-2 rounded-full ${
                    progress.current >= milestone ? 'bg-[#ff6b35]' : 'bg-gray-300'
                  }`}
                />
                <span className="text-xs text-gray-400 mt-1">{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className={`transition-all duration-150 ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <Card variant="elevated" className="mb-8 sport-stripe athletic-card">
            <CardContent className="py-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8 leading-relaxed">
                {question.text}
              </h2>

              <div className="space-y-4">
                <OptionButton
                  selected={currentAnswer === 'A'}
                  onClick={() => handleOptionSelect('A')}
                  label="A"
                  text={question.optionA.text}
                  color={dimensionColor}
                />
                <OptionButton
                  selected={currentAnswer === 'B'}
                  onClick={() => handleOptionSelect('B')}
                  label="B"
                  text={question.optionB.text}
                  color={dimensionColor}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={handlePrev}
            disabled={!canGoPrev()}
            className="flex-1"
          >
            ← 上一題
          </Button>
          {isLastQuestion ? (
            <button
              onClick={handleFinish}
              disabled={!canGoNext()}
              className={`flex-1 btn-sport text-white font-bold py-3 px-6 rounded-xl text-lg ${
                !canGoNext() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              查看結果
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canGoNext()}
              className={`flex-1 btn-sport text-white font-bold py-3 px-6 rounded-xl text-lg ${
                !canGoNext() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              下一題
            </button>
          )}
        </div>

        {/* Keyboard Hint */}
        <div className="text-center text-gray-400 text-sm mt-6 bg-white/50 rounded-lg py-2">
          <span className="inline-flex items-center gap-4">
            <span><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">1</kbd>/<kbd className="px-2 py-1 bg-gray-100 rounded text-xs">2</kbd> 選擇</span>
            <span><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Enter</kbd> 下一題</span>
            <span><kbd className="px-2 py-1 bg-gray-100 rounded text-xs">←</kbd> 上一題</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function OptionButton({
  selected,
  onClick,
  label,
  text,
  color,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
  text: string;
  color: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 ${
        selected
          ? `bg-gradient-to-r ${color} text-white border-transparent shadow-lg scale-[1.02]`
          : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300 hover:shadow'
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            selected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
          }`}
        >
          {label}
        </span>
        <span className={`text-lg ${selected ? 'text-white' : 'text-gray-700'}`}>
          {text}
        </span>
      </div>
    </button>
  );
}
