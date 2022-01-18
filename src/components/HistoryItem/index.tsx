import React from 'react';

import styles from './HistoryItem.module.css';

export interface HistoryItemProps {
  first: number;
  operator: string;
  second: number;
  result: number;
}

const HistoryItem = ({ first, operator, second, result }: HistoryItemProps) => {
  return (
    <div className={styles.HistoryItem}>
      <div className={styles.Operation}>
        <span>{first}</span>
        <span>{operator}</span>
        <span>{second}</span>
        <span>=</span>
      </div>
      <div className={styles.Result}>{result}</div>
    </div>
  );
};

export default HistoryItem;
