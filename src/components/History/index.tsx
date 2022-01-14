import React, { useState } from 'react';

import HistoryItem from '../HistoryItem';
import HistoryFooter from '../HistoryFooter';

import styles from './History.module.css';

const History = () => {
  const [history, setHistory] = useState([
    { first: '1', operator: '+', second: '3', result: '2' } // hard coded dummy data
  ]);

  return (
    <section className={styles.History}>
      <div className={styles.Histories}>
        {history.map((item, index) => {
          return <HistoryItem key={index} {...item} />;
        })}
      </div>
      <HistoryFooter setHistory={setHistory} />
    </section>
  );
};

export default History;
