import React from 'react';

import Screen from '../Screen';
import Buttons from '../Keyboard';

import styles from './Calculator.module.css';

export interface ICalculatorProps {
  displayValue: string;
  setDisplayValue: Function;
  subDisplayValue: string;
  setSubDisplayValue: Function;
  setHistory: Function;
}

const Calculator = ({
  displayValue,
  setDisplayValue,
  subDisplayValue,
  setSubDisplayValue,
  setHistory
}: ICalculatorProps) => {
  return (
    <div className={styles.Calculator}>
      <Screen displayValue={displayValue} subDisplayValue={subDisplayValue} />
      <Buttons
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        subDisplayValue={subDisplayValue}
        setSubDisplayValue={setSubDisplayValue}
        setHistory={setHistory}
      />
    </div>
  );
};

export default Calculator;
