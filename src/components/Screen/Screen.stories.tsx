import React from 'react';

import Screen, { ScreenProps } from '../Screen';

import styles from './Screen.module.css';
import '../../styles/global.css';

export default {
  title: 'Screen',
  component: Screen
};

export const ScreenStory = (args: ScreenProps) => (
  <div className={styles.ScreenStory}>
    <Screen {...args} />
  </div>
);
