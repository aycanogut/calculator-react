import React from 'react';

import History, { IHistoryProps } from '../History';

import '../../styles/global.css';
import styles from './History.module.css';

export default {
  title: 'History',
  component: History
};

export const HistoryStory = (args: IHistoryProps) => (
  <div className={styles.HistoryWrapper}>
    <History {...args} />
  </div>
);
