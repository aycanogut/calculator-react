import React from 'react'

import { IKeyboardProps } from './index'

import Keyboard from './index'

import styles from './Keyboard.module.css'
import '../../styles/global.css'

export default {
  title: 'Keyboard',
  component: Keyboard
}

export const KeyboardStory = (args: IKeyboardProps) => (
  <div className={styles.KeyboardStory}>
    <Keyboard {...args} />
  </div>
)
