import React from 'react';

import { getButtonType } from '../../utils/getButtonType';

import Button from '../Button';

import styles from './Keyboard.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
  subDisplayValue: string;
  setSubDisplayValue: Function;
}

const Keyboard = ({
  displayValue,
  setDisplayValue,
  subDisplayValue,
  setSubDisplayValue
}: DisplayValues) => {
  const handleClick = (e: any) => {
    const inputValue = e.target.textContent;
    const buttonType = getButtonType(inputValue);

    if (buttonType === 'number') {
      updateDisplay(inputValue);
    } else if (inputValue === 'C' && buttonType === 'operator') {
      clearDisplay();
    } else if (inputValue === '⌫' && buttonType === 'operator') {
      removeLastValue();
    } else if (buttonType === 'operator') {
      handleOperator(inputValue);
    } else if (buttonType === 'equal') {
      handleOperator(inputValue);
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

  const handleOperator = (operatorValue: string) => {
    if (displayValue.length === 16) return;

    const isEqual = operatorValue === '=';

    if (!isEqual && displayValue && subDisplayValue) return;
    if (!isEqual && subDisplayValue.includes('=')) return;

    if (isEqual && displayValue && subDisplayValue) {
      setSubDisplayValue(`${subDisplayValue} ${displayValue} ${operatorValue}`);
      setDisplayValue('');
    } else if (!isEqual && displayValue) {
      setSubDisplayValue(`${displayValue} ${operatorValue}`);
      setDisplayValue('');
    } else if (subDisplayValue && !displayValue && !isEqual) {
      setSubDisplayValue(subDisplayValue.slice(0, -1) + operatorValue);
    }
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
