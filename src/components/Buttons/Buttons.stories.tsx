import React from 'react';

import Buttons from '../Buttons';

import styles from './Buttons.module.css';
import '../../styles/global.css';

export default {
  title: 'Buttons',
  component: Buttons
};

export const ButtonStory = () => (
  <div className={styles.ButtonsStory}>
    <Buttons />
  </div>
);
