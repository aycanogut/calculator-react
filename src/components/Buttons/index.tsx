import React from 'react';

import { chars } from '../../utils/displayableChars';

import Button from '../Button';

import styles from './Buttons.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Buttons = ({ displayValue, setDisplayValue }: DisplayValues) => {
  const buttonsArray = [
    { variant: 'operator', value: 'C' },
    { variant: 'operator', value: '⌫' },
    { variant: 'operator', value: '%' },
    { variant: 'operator', value: '÷' },
    { variant: 'number', value: '7' },
    { variant: 'number', value: '8' },
    { variant: 'number', value: '9' },
    { variant: 'operator', value: 'x' },
    { variant: 'number', value: '4' },
    { variant: 'number', value: '5' },
    { variant: 'number', value: '6' },
    { variant: 'operator', value: '-' },
    { variant: 'number', value: '1' },
    { variant: 'number', value: '2' },
    { variant: 'number', value: '3' },
    { variant: 'operator', value: '+' },
    { variant: 'number', value: '+/-' },
    { variant: 'number', value: '0' },
    { variant: 'number', value: '.' },
    { variant: 'equal', value: '=' }
  ];

  const updateDisplay = (e: any) => {
    const display = e.target.textContent;

    if (displayValue.length < 16 && chars.includes(display)) {
      if (displayValue === '0') {
        setDisplayValue(display);
      } else {
        setDisplayValue(displayValue.concat(display));
      }
    }

    if (display === 'C') {
      setDisplayValue('0');
    }

    if (display === '⌫') {
      const result = displayValue.substring(0, displayValue.length - 1);
      setDisplayValue(result);
    }
  };

  return (
    <section className={styles.Buttons}>
      {console.log(displayValue)}
      {buttonsArray.map((btn, id) => (
        <Button key={id} variant={btn.variant} value={btn.value} onClick={updateDisplay} />
      ))}
    </section>
  );
};

export default Buttons;
