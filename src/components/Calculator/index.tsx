import React from 'react';

import Screen from '../Screen';
import Buttons from '../Buttons';

import styles from './Calculator.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
}

const Calculator = ({ displayValue, setDisplayValue }: DisplayValues) => {
  return (
    <div className={styles.Calculator}>
      <Screen displayValue={displayValue} />
      <Buttons displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  );
};

export default Calculator;
