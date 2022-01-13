import React from 'react';

import styles from './HistoryItem.module.css';

export interface Props {
  first: number | string;
  operator: string;
  second: number | string;
  result: number | string;
}

const HistoryItem = ({ first, operator, second, result }: Props) => {
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
