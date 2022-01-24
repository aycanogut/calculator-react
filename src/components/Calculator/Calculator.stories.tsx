import React from 'react';

import Calculator, { DisplayValues } from '../Calculator';

import styles from './Calculator.module.css';
import '../../styles/global.css';

export default {
  title: 'Calculator',
  component: Calculator
};

export const CalculatorStory = (args: DisplayValues) => (
  <div className={styles.CalculatorStory}>
    <Calculator {...args} />
  </div>
);
