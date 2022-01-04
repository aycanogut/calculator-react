import React from 'react';
import Screen from '../Screen';
import '../../styles/global.css';
import styles from './Screen.module.css';

export default {
  title: 'Screen',
  component: Screen
};

export const ScreenStory = () => (
  <div className={styles.StoryWrapper}>
    <Screen />
  </div>
);
