import React from 'react';

import { DisplayValues } from '../Calculator';

import Buttons from '../Buttons';

import styles from './Buttons.module.css';
import '../../styles/global.css';

export default {
  title: 'Buttons',
  component: Buttons
};

export const ButtonStory = (args: DisplayValues) => (
  <div className={styles.ButtonsStory}>
    <Buttons {...args} />
  </div>
);
