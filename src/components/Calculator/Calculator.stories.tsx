import React from 'react';

import Calculator from '../Calculator';

import styles from './Calculator.module.css';
import '../../styles/global.css';

export default {
  title: 'Calculator',
  component: Calculator
};

export const CalculatorStory = () => (
  <div className={styles.CalculatorStory}>
    <Calculator />
  </div>
);
