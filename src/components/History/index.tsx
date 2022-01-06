import React, { useState } from 'react';

import HistoryItem from '../HistoryItem';
import Footer from '../Footer';

import styles from './History.module.css';

const History = () => {
  const [history, setHistory] = useState([
    { firstArgument: '1', operator: '+', secondArgument: '3', result: '2' } // hard coded dummy data
  ]);

  return (
    <section className={styles.History}>
      <div className={styles.Histories}>
        {history.map((item, index) => {
          return (
            <HistoryItem
              key={index}
              firstArgument={item.firstArgument}
              operator={item.operator}
              secondArgument={item.secondArgument}
              result={item.result}
            />
          );
        })}
      </div>
      <Footer setHistory={setHistory} />
    </section>
  );
};

export default History;
