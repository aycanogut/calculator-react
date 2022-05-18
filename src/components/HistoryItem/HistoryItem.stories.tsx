import React from 'react'

import HistoryItem from '../HistoryItem'

import '../../styles/global.css'
import styles from './HistoryItem.module.css'

export default {
  title: 'HistoryItem',
  component: HistoryItem
}

export const HistoryItemStory = () => (
  <div className={styles.HistoryItemWrapper}>
    <HistoryItem first={21} operator="+" second={42} result={63} />
  </div>
)
