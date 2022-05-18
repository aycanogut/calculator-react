import React from 'react'

import HistoryItem from '../HistoryItem'
import HistoryFooter from '../HistoryFooter'

import styles from './History.module.css'

export interface IHistoryProps {
  history: []
  setHistory: Function
}

const History = ({ history, setHistory }: IHistoryProps) => {
  return (
    <section className={styles.History}>
      <div className={styles.Histories}>
        {history.map((item, index) => (
          <HistoryItem key={index} {...item} />
        ))}
      </div>
      <HistoryFooter setHistory={setHistory} />
    </section>
  )
}

export default History
