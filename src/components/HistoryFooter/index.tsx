import React, { MouseEventHandler } from 'react'
import Icon from '../Icon'

import styles from './HistoryFooter.module.css'

export interface IHistoryFooterProps {
  setHistory: Function
}

const HistoryFooter = ({ setHistory }: IHistoryFooterProps) => {
  const clearHistory: MouseEventHandler = () => {
    setHistory([])
  }

  return (
    <footer className={styles.HistoryFooter}>
      <Icon icon="garbage" onClick={clearHistory} />
    </footer>
  )
}

export default HistoryFooter
