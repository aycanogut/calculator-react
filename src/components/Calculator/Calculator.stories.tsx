import React from 'react';

import Calculator from '../Calculator';
import '../../styles/global.css';
import styles from './Calculator.module.css';

export default {
  title: 'Calculator',
  component: Calculator
};

export const CalculatorStory = () => (
  <div className={styles.CalculatorWrapper}>
    <Calculator />
  </div>
);
