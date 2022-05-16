import React from 'react';

import Calculator, { ICalculatorProps } from '../Calculator';

import styles from './Calculator.module.css';
import '../../styles/global.css';

export default {
  title: 'Calculator',
  component: Calculator
};

export const CalculatorStory = (args: ICalculatorProps) => (
  <div className={styles.CalculatorStory}>
    <Calculator {...args} />
  </div>
);
