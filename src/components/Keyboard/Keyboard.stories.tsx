import React from 'react';

import { DisplayValues } from './index';

import Keyboard from './index';

import styles from './Keyboard.module.css';
import '../../styles/global.css';

export default {
  title: 'Keyboard',
  component: Keyboard
};

export const KeyboardStory = (args: DisplayValues) => (
  <div className={styles.KeyboardStory}>
    <Keyboard {...args} />
  </div>
);
