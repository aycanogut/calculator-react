import React from 'react';

import Screen from '../Screen';
import Buttons from '../Buttons';

import styles from './Calculator.module.css';

export interface DisplayValues {
  displayValue: string;
  setDisplayValue: Function;
  subDisplayValue: string;
  setSubDisplayValue: Function;
}

const Calculator = ({
  displayValue,
  setDisplayValue,
  subDisplayValue,
  setSubDisplayValue
}: DisplayValues) => {
  return (
    <div className={styles.Calculator}>
      <Screen displayValue={displayValue} subDisplayValue={subDisplayValue} />
      <Buttons
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        subDisplayValue={subDisplayValue}
        setSubDisplayValue={setSubDisplayValue}
      />
    </div>
  );
};

export default Calculator;
