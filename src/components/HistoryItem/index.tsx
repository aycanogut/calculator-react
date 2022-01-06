import React from 'react';

import styles from './HistoryItem.module.css';

export interface Props {
  firstArgument: number | string;
  operator: string;
  secondArgument: number | string;
  result: number | string;
}

const HistoryItem = ({ firstArgument, operator, secondArgument, result }: Props) => {
  return (
    <div className={styles.HistoryItem}>
      <div className={styles.Operation}>
        <span>{firstArgument}</span>
        <span>{operator}</span>
        <span>{secondArgument}</span>
        <span>=</span>
      </div>
      <div className={styles.Result}>{result}</div>
    </div>
  );
};

export default HistoryItem;
