import type { Dispatch, SetStateAction, MouseEvent } from 'react';

import type { ItemProps } from './History/Item';

import Button from './Button';

import { add, subtract, multiply, divide } from '@/utils/calculation';
import getButtonType from '@/utils/getButtonType';

export interface KeyboardProps {
  displayValue: string;
  setDisplayValue: Dispatch<SetStateAction<string>>;
  subDisplayValue: string;
  setSubDisplayValue: Dispatch<SetStateAction<string>>;
  setHistory: Dispatch<SetStateAction<ItemProps[]>>;
}

const MAX_DISPLAY_LENGTH = 16;

function calculateResult(subDisplay: string, display: string): number {
  const parts = subDisplay.trim().split(' ');
  const operator = parts[parts.length - 1];
  const firstValue = Number(parts[0]);
  const secondValue = Number(display);

  switch (operator) {
    case '+':
      return add(firstValue, secondValue);
    case '-':
      return subtract(firstValue, secondValue);
    case 'x':
      return multiply(firstValue, secondValue);
    case '÷':
      return divide(firstValue, secondValue);
    default:
      return secondValue;
  }
}

function Keyboard({ displayValue, setDisplayValue, subDisplayValue, setSubDisplayValue, setHistory }: KeyboardProps) {
  const isAfterEqual = subDisplayValue.endsWith('=');

  const handleNumber = (inputValue: string) => {
    if (isAfterEqual) {
      setSubDisplayValue('');
      setDisplayValue(inputValue === '0' ? '' : inputValue);
      return;
    }

    if (displayValue.length >= MAX_DISPLAY_LENGTH) return;

    if (displayValue === '0') {
      setDisplayValue(inputValue);
      return;
    }

    setDisplayValue(displayValue + inputValue);
  };

  const handleOperator = (operatorValue: string) => {
    const isEqual = operatorValue === '=';

    if (isEqual) {
      if (isAfterEqual || !subDisplayValue || !displayValue) return;

      const result = calculateResult(subDisplayValue, displayValue);
      const parts = subDisplayValue.trim().split(' ');
      const firstValue = Number(parts[0]);
      const operator = parts[parts.length - 1];

      setSubDisplayValue(`${subDisplayValue} ${displayValue} =`);
      setDisplayValue(String(result));
      setHistory(prev => [{ first: firstValue, operator, second: Number(displayValue), result }, ...prev]);
      return;
    }

    if (operatorValue === '%') {
      if (!displayValue) return;
      setDisplayValue(String(Number(displayValue) / 100));
      return;
    }

    if (isAfterEqual) {
      setSubDisplayValue(`${displayValue} ${operatorValue}`);
      setDisplayValue('');
      return;
    }

    if (displayValue) {
      setSubDisplayValue(`${displayValue} ${operatorValue}`);
      setDisplayValue('');
    } else if (subDisplayValue) {
      const parts = subDisplayValue.trim().split(' ');
      parts[parts.length - 1] = operatorValue;
      setSubDisplayValue(parts.join(' '));
    }
  };

  const handleHelper = (inputValue: string) => {
    if (inputValue === '±') {
      if (!displayValue || displayValue === '0') return;
      setDisplayValue(displayValue.startsWith('-') ? displayValue.slice(1) : `-${displayValue}`);
    } else if (inputValue === '.') {
      if (displayValue.includes('.')) return;
      setDisplayValue((displayValue || '0') + '.');
    }
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const inputValue = e.currentTarget.textContent ?? '';
    const buttonType = getButtonType(inputValue);

    if (inputValue === 'C') {
      setDisplayValue('');
      setSubDisplayValue('');
      return;
    }

    if (inputValue === '⌫') {
      if (!isAfterEqual) setDisplayValue(displayValue.slice(0, -1));
      return;
    }

    if (buttonType === 'number') {
      handleNumber(inputValue);
    } else if (buttonType === 'operator' || buttonType === 'equal') {
      handleOperator(inputValue);
    } else if (buttonType === 'helper') {
      handleHelper(inputValue);
    }
  };

  const keyboardButtons = [
    ['C', '⌫', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '='],
  ].flat();

  return (
    <section className="mt-auto grid grid-cols-4 grid-rows-5 gap-1">
      {keyboardButtons.map((val: string) => (
        <Button
          key={val}
          variant={getButtonType(val)}
          value={val}
          onClick={handleClick}
        />
      ))}
    </section>
  );
}

export default Keyboard;
