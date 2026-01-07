'use client';

import { HTMLAttributes, forwardRef, memo } from 'react';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export const Progress = memo(forwardRef<HTMLDivElement, ProgressProps>(
  ({ className = '', value, max = 100, showLabel = false, size = 'md', color = 'blue', ...props }, ref) => {
    const percent = Math.min(Math.max((value / max) * 100, 0), 100);

    const sizeStyles = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    };

    const colorStyles = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
    };

    return (
      <div ref={ref} className={`w-full ${className}`} {...props}>
        {showLabel && (
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{value} / {max}</span>
            <span>{Math.round(percent)}%</span>
          </div>
        )}
        <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeStyles[size]}`}>
          <div
            className={`h-full transition-all duration-500 ease-out rounded-full ${colorStyles[color]}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }
));

Progress.displayName = 'Progress';

export default Progress;
