'use client';

import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Progress, RadioGroup, RadioGroupItem, Card, CardContent } from '@/components/ui';
import { useMBTIStore } from '@/features/mbti/store';
import { questions } from '@/data/questions';

export default function TestPage() {
  const router = useRouter();
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

  // Keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === '1' || e.key === 'a' || e.key === 'A') {
      if (question) setAnswer(question.id, 'A');
    } else if (e.key === '2' || e.key === 'b' || e.key === 'B') {
      if (question) setAnswer(question.id, 'B');
    } else if (e.key === 'Enter' && canGoNext()) {
      if (isLastQuestion) {
        handleFinish();
      } else {
        nextQuestion();
      }
    } else if (e.key === 'Backspace' && canGoPrev()) {
      prevQuestion();
    }
  }, [question, setAnswer, canGoNext, canGoPrev, nextQuestion, prevQuestion, isLastQuestion]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleFinish = () => {
    finishTest();
    router.push('/result');
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>載入中...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600">
              問題 {progress.current} / {progress.total}
            </span>
            <span className="text-sm text-gray-500">
              {progress.percent}% 完成
            </span>
          </div>
          <Progress value={progress.current} max={progress.total} size="md" color="blue" />
        </div>

        {/* Question Card */}
        <Card variant="elevated" className="mb-8">
          <CardContent className="py-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-8">
              {question.text}
            </h2>

            <RadioGroup
              value={currentAnswer}
              onChange={(value) => setAnswer(question.id, value as 'A' | 'B')}
            >
              <RadioGroupItem value="A">
                <span className="text-gray-400 mr-2 text-sm">A.</span>
                {question.optionA.text}
              </RadioGroupItem>
              <RadioGroupItem value="B">
                <span className="text-gray-400 mr-2 text-sm">B.</span>
                {question.optionB.text}
              </RadioGroupItem>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={prevQuestion}
            disabled={!canGoPrev()}
            className="flex-1"
          >
            上一題
          </Button>
          {isLastQuestion ? (
            <Button
              size="lg"
              onClick={handleFinish}
              disabled={!canGoNext()}
              className="flex-1"
            >
              查看結果
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={nextQuestion}
              disabled={!canGoNext()}
              className="flex-1"
            >
              下一題
            </Button>
          )}
        </div>

        {/* Keyboard Hint */}
        <p className="text-center text-gray-400 text-sm mt-6">
          快捷鍵：1/2 選擇 · Enter 下一題 · Backspace 上一題
        </p>
      </div>
    </div>
  );
}
