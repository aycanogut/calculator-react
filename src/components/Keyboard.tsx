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

function Keyboard({ displayValue, setDisplayValue, subDisplayValue, setSubDisplayValue, setHistory }: KeyboardProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const inputValue = e.currentTarget.textContent ?? '';
    const buttonType = getButtonType(inputValue);

    if (inputValue === 'C') {
      clearDisplay();
    } else if (inputValue === '⌫') {
      removeLastValue();
    } else if (buttonType === 'number') {
      updateDisplay(inputValue);
    } else if (buttonType === 'operator' || buttonType === 'equal') {
      handleOperator(inputValue);
    }

    if (displayValue && subDisplayValue.includes('=') && buttonType === 'number') {
      setSubDisplayValue('');
      if (displayValue !== '0') {
        setDisplayValue(inputValue);
      } else if (displayValue === '0') {
        setDisplayValue(displayValue.substring(1).concat(inputValue));
      }
    }
  };

  const updateDisplay = (inputValue: string) => {
    if (displayValue.length === MAX_DISPLAY_LENGTH) return;

    if (!displayValue) {
      setDisplayValue(inputValue);
    } else {
      setDisplayValue(displayValue.concat(inputValue));
    }
  };

  const mathCalculations = () => {
    const operator = subDisplayValue.slice(-1);
    const firstValue = Number(subDisplayValue.slice(0, -1));
    const secondValue = Number(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = add(firstValue, secondValue);
        break;
      case '-':
        result = subtract(firstValue, secondValue);
        break;
      case 'x':
        result = multiply(firstValue, secondValue);
        break;
      case '÷':
        result = divide(firstValue, secondValue);
        break;
    }
    setDisplayValue(String(result));
  };

  const handleOperator = (operatorValue: string) => {
    if (displayValue.length === MAX_DISPLAY_LENGTH) return;

    const isEqual = operatorValue === '=';

    if (!isEqual && subDisplayValue.includes('=')) return;

    if (!isEqual && displayValue && subDisplayValue.includes('=')) {
      // TODO: İşlem mantığı eklenecek
    }

    if (isEqual && displayValue && subDisplayValue) {
      setSubDisplayValue(`${subDisplayValue} ${displayValue} ${operatorValue}`);
      mathCalculations();
    } else if (!isEqual && displayValue) {
      setSubDisplayValue(`${displayValue} ${operatorValue}`);
      setDisplayValue('');
    } else if (!isEqual && !displayValue && subDisplayValue) {
      setSubDisplayValue(subDisplayValue.slice(0, -1) + operatorValue);
    }

    // TODO: Gerçek hesaplama verisi ile history güncellenecek
    setHistory([{ first: 1, operator: '+', second: 2, result: 3 }]); //
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setSubDisplayValue('');
  };

  const removeLastValue = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1));
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
