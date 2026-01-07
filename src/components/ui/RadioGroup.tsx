'use client';

import { HTMLAttributes, forwardRef, createContext, useContext, useId } from 'react';

interface RadioGroupContextValue {
  name: string;
  value: string | null;
  onChange: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

interface RadioGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string | null;
  onChange: (value: string) => void;
  name?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className = '', value, onChange, name, children, ...props }, ref) => {
    const generatedName = useId();

    return (
      <RadioGroupContext.Provider value={{ name: name || generatedName, value, onChange }}>
        <div
          ref={ref}
          role="radiogroup"
          className={`space-y-3 ${className}`}
          {...props}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

interface RadioGroupItemProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  value: string;
  disabled?: boolean;
}

export const RadioGroupItem = forwardRef<HTMLLabelElement, RadioGroupItemProps>(
  ({ className = '', value, disabled = false, children, ...props }, ref) => {
    const context = useContext(RadioGroupContext);
    if (!context) {
      throw new Error('RadioGroupItem must be used within RadioGroup');
    }

    const { name, value: groupValue, onChange } = context;
    const isSelected = groupValue === value;
    const id = useId();

    const handleClick = () => {
      if (!disabled) {
        onChange(value);
      }
    };

    return (
      <label
        ref={ref}
        htmlFor={id}
        className={`
          flex items-center p-4 rounded-xl border-2 cursor-pointer
          transition-all duration-200
          ${isSelected
            ? 'border-blue-500 bg-blue-50 shadow-md shadow-blue-500/10'
            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${className}
        `}
        onClick={handleClick}
        {...props}
      >
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={isSelected}
          onChange={() => onChange(value)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`
            w-5 h-5 rounded-full border-2 flex-shrink-0 mr-3
            flex items-center justify-center transition-all duration-200
            ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}
          `}
        >
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </div>
        <span className={`text-base ${isSelected ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
          {children}
        </span>
      </label>
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';

export default RadioGroup;
