import React from 'react';
import styles from './Calculator.module.css';
import Buttons from '../Buttons';

const Calculator = () => {
  return (
    <div className={styles.Calculator}>
      <Buttons />
    </div>
  );
};

export default Calculator;
