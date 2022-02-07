import React from 'react';

import Button from '../Button';

import styles from './Buttons.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const updateDisplay = (e: any) => {
    if (displayValue.length === 15) return;

    const inputValue = e.target.textContent;

    if (displayValue === '0') {
      setDisplayValue(inputValue);
    } else {
      setDisplayValue(displayValue.concat(inputValue));
    }
  };

  const calculation = (e: any) => {
    const operatorValue = e.target.textContent;
    const latestChar = displayValue[displayValue.length - 1];

    if (displayValue.length === 15) return;

    if ('+x-÷'.includes(latestChar)) {
      setDisplayValue(displayValue.slice(0, -1) + operatorValue);
    } else {
      if (!/[x+÷-]/g.test(displayValue)) {
        setDisplayValue(displayValue + operatorValue);
      }
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const removeLastValue = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1));
  };

  const buttonsArray = [
    { variant: 'operator', value: 'C', action: clearDisplay },
    { variant: 'operator', value: '⌫', action: removeLastValue },
    { variant: 'operator', value: '%', action: undefined },
    { variant: 'operator', value: '÷', action: calculation },
    { variant: 'number', value: '7', action: updateDisplay },
    { variant: 'number', value: '8', action: updateDisplay },
    { variant: 'number', value: '9', action: updateDisplay },
    { variant: 'operator', value: 'x', action: calculation },
    { variant: 'number', value: '4', action: updateDisplay },
    { variant: 'number', value: '5', action: updateDisplay },
    { variant: 'number', value: '6', action: updateDisplay },
    { variant: 'operator', value: '-', action: calculation },
    { variant: 'number', value: '1', action: updateDisplay },
    { variant: 'number', value: '2', action: updateDisplay },
    { variant: 'number', value: '3', action: updateDisplay },
    { variant: 'operator', value: '+', action: calculation },
    { variant: 'number', value: '+/-', action: undefined },
    { variant: 'number', value: '0', action: updateDisplay },
    { variant: 'number', value: '.', action: undefined },
    { variant: 'equal', value: '=', action: undefined }
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
