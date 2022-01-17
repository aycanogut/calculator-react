import React from 'react';

import Screen from '../Screen';

import styles from './Screen.module.css';
import '../../styles/global.css';

export default {
  title: 'Screen',
  component: Screen
};

export const ScreenStory = () => (
  <div className={styles.ScreenStory}>
    <Screen />
  </div>
);
