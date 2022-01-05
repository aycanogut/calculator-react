import React from 'react';

import HistoryItem from '../HistoryItem';
import Footer from '../Footer';

import styles from './History.module.css';

const History = () => {
  return (
    <section className={styles.History}>
      <div className={styles.Histories}>
        <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />
        <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />
        <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />
      </div>
      <Footer />
    </section>
  );
};

export default History;
