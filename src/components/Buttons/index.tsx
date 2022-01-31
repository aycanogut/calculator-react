import React, { useState } from 'react';

import Button from '../Button';

import styles from './Buttons.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const [prevValue, setPrevValue] = useState<string>();
  const [currValue, setCurrValue] = useState<string>();

  const updateDisplay = (e: any) => {
    const inputValue = e.target.textContent;

    if (displayValue.length < 16) {
      if (displayValue === '0') {
        setDisplayValue(inputValue);
      } else {
        setDisplayValue(displayValue.concat(inputValue));
      }
    }
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const removeLastChar = () => {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1));
  };

  const calculatePercent = () => {
    setDisplayValue(String(Number(displayValue) / 100));
  };

  const negateValue = () => {
    setDisplayValue(String(-displayValue));
  };

  const numberToFloat = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const calculation = (e: any) => {
    let inputValue = ` ${e.target.textContent} `;

    setDisplayValue(displayValue + inputValue);
    setPrevValue(displayValue);

    const displayArr = displayValue.split(' ');
    setCurrValue(displayArr[displayArr.length - 1]);
  };

  const equal = () => {};

  const buttonsArray = [
    { variant: 'operator', value: 'C', action: clearDisplay },
    { variant: 'operator', value: '⌫', action: removeLastChar },
    { variant: 'operator', value: '%', action: calculatePercent },
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
    { variant: 'number', value: '+/-', action: negateValue },
    { variant: 'number', value: '0', action: updateDisplay },
    { variant: 'number', value: '.', action: numberToFloat },
    { variant: 'equal', value: '=', action: equal }
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
