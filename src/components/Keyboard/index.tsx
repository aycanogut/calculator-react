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
  const updateDisplay = (e: any) => {
    if (displayValue.length === 16) return;

    const inputValue = e.target.textContent;

    if (!displayValue) {
      setDisplayValue(inputValue);
    } else {
      setDisplayValue(displayValue.concat(inputValue));
    }
  };

  const handleOperator = (e: any) => {
    if (displayValue.length === 16) return;

    const operatorValue = e.target.textContent;

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

  const keywordButtons = [
    ['C', '⌫', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['±', '0', '.', '=']
  ].flat();

  return (
    <section className={styles.Keyboard}>
      {buttonsArray.map((btn, id) => (
        <Button key={id} variant={btn.variant} value={btn.value} onClick={btn.action} />
      ))}
    </section>
  );
};

export default Keyboard;
