import React from 'react';

import Button from '../Button';

import styles from './Buttons.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const updateDisplay = (e: any) => {
    const display = e.target.textContent;

    if (displayValue.length < 16) {
      if (displayValue === '0') {
        setDisplayValue(display);
      } else {
        setDisplayValue(displayValue.concat(display));
      }
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const removeLastChar = () => {
    const result = displayValue.substring(0, displayValue.length - 1);
    setDisplayValue(result);
  };

  const calculatePercent = () => {
    setDisplayValue(String(parseFloat(displayValue) / 100));
  };

  const negateValue = () => {
    setDisplayValue(String(-displayValue));
  };

  const buttonsArray = [
    { variant: 'operator', value: 'C', action: clearDisplay },
    { variant: 'operator', value: '⌫', action: removeLastChar },
    { variant: 'operator', value: '%', action: calculatePercent },
    { variant: 'operator', value: '÷', action: updateDisplay },
    { variant: 'number', value: '7', action: updateDisplay },
    { variant: 'number', value: '8', action: updateDisplay },
    { variant: 'number', value: '9', action: updateDisplay },
    { variant: 'operator', value: 'x', action: updateDisplay },
    { variant: 'number', value: '4', action: updateDisplay },
    { variant: 'number', value: '5', action: updateDisplay },
    { variant: 'number', value: '6', action: updateDisplay },
    { variant: 'operator', value: '-', action: updateDisplay },
    { variant: 'number', value: '1', action: updateDisplay },
    { variant: 'number', value: '2', action: updateDisplay },
    { variant: 'number', value: '3', action: updateDisplay },
    { variant: 'operator', value: '+', action: updateDisplay },
    { variant: 'number', value: '+/-', action: negateValue },
    { variant: 'number', value: '0', action: updateDisplay },
    { variant: 'number', value: '.', action: updateDisplay },
    { variant: 'equal', value: '=', action: updateDisplay }
  ];

  return (
    <section className={styles.Buttons}>
      {buttonsArray.map((btn, id) => (
        <Button key={id} variant={btn.variant} value={btn.value} onClick={btn.action} />
      ))}
    </section>
  );
};

export default Buttons;
