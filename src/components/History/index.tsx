import React from 'react';
import styles from './History.module.css';

import HistoryItem from '../HistoryItem';
import Footer from '../Footer';

const History = () => {
  return (
    <section className={styles.History}>
      <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />
      <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />
      <HistoryItem firstArgument={21} operator="+" secondArgument={42} result={63} />

      <Footer />
    </section>
  );
};

export default History;
