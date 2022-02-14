import React from 'react';

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

  const buttonsArray = [
    { variant: 'operator', value: 'C', action: clearDisplay },
    { variant: 'operator', value: '⌫', action: removeLastValue },
    { variant: 'operator', value: '%', action: undefined },
    { variant: 'operator', value: '÷', action: handleOperator },
    { variant: 'number', value: '7', action: updateDisplay },
    { variant: 'number', value: '8', action: updateDisplay },
    { variant: 'number', value: '9', action: updateDisplay },
    { variant: 'operator', value: 'x', action: handleOperator },
    { variant: 'number', value: '4', action: updateDisplay },
    { variant: 'number', value: '5', action: updateDisplay },
    { variant: 'number', value: '6', action: updateDisplay },
    { variant: 'operator', value: '-', action: handleOperator },
    { variant: 'number', value: '1', action: updateDisplay },
    { variant: 'number', value: '2', action: updateDisplay },
    { variant: 'number', value: '3', action: updateDisplay },
    { variant: 'operator', value: '+', action: handleOperator },
    { variant: 'number', value: '+/-', action: undefined },
    { variant: 'number', value: '0', action: updateDisplay },
    { variant: 'number', value: '.', action: undefined },
    { variant: 'equal', value: '=', action: handleOperator }
  ];

  return (
    <section className={styles.Keyboard}>
      {buttonsArray.map((btn, id) => (
        <Button key={id} variant={btn.variant} value={btn.value} onClick={btn.action} />
      ))}
    </section>
  );
};

export default Keyboard;
