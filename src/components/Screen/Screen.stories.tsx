import React from 'react';

import Screen, { IScreenProps } from '../Screen';

import styles from './Screen.module.css';
import '../../styles/global.css';

export default {
  title: 'Screen',
  component: Screen
};

export const ScreenStory = (args: IScreenProps) => (
  <div className={styles.ScreenStory}>
    <Screen {...args} />
  </div>
);
