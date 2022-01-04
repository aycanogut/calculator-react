import React from 'react';

import History from '../History';
import '../../styles/global.css';
import styles from './History.module.css';

export default {
  title: 'History',
  component: History
};

export const HistoryStory = () => (
  <div className={styles.HistoryWrapper}>
    <History />
  </div>
);
