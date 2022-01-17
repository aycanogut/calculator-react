import React from 'react';

import Screen from '../Screen';
import Buttons from '../Buttons';

import styles from './Calculator.module.css';

const Calculator = () => {
  return (
    <div className={styles.Calculator}>
      <Screen />
      <Buttons />
    </div>
  );
};

export default Calculator;
