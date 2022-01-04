import React from 'react';

import data from '../../data.json';

import styles from './History.module.css';

import Icon from '../Icon';
import HistoryItem from '../HistoryItem';
import Footer from '../Footer';

const History = () => {
  return (
    <section className={styles.History}>
      <Icon source={data.icons.back.src} alt={data.icons.back.alt} />
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
