import React from 'react';

import { getButtonType } from '../../utils/getButtonType';
import { add, subtract, multiply, divide } from '../../utils/calculation';

import Button from '../Button';

import styles from './Keyboard.module.css';

export interface IKeyboardProps {
  displayValue: string;
  setDisplayValue: Function;
  subDisplayValue: string;
  setSubDisplayValue: Function;
  setHistory: Function;
}

const Keyboard = ({
  displayValue,
  setDisplayValue,
  subDisplayValue,
  setSubDisplayValue,
  setHistory
}: IKeyboardProps) => {
  const handleClick = (e: any) => {
    const inputValue = e.target.textContent;
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
    if (displayValue.length === 16) return;

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
    if (displayValue.length === 16) return;

    const isEqual = operatorValue === '=';

    if (!isEqual && subDisplayValue.includes('=')) return;

    if (!isEqual && displayValue && subDisplayValue.includes('=')) {
      console.log('test');
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

    setHistory([{ first: 1, operator: '+', second: 2, result: 3 }]); // dummy data (will match the calculations)
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
    ['±', '0', '.', '=']
  ].flat();

  return (
    <section className={styles.Keyboard}>
      {keyboardButtons.map((val) => (
        <Button key={val} variant={getButtonType(val)} value={val} onClick={handleClick} />
      ))}
    </section>
  );
};

export default Keyboard;
