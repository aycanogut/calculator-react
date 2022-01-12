import React, { useState } from 'react';

import Header from '../Header';
import Calculator from '../Calculator';
import History from '../History';

import styles from './Wrapper.module.css';

const Wrapper = () => {
  const [view, setView] = useState('calculator');
  const isCalculator = view === 'calculator';

  return (
    <div className={styles.Wrapper}>
      <Header view={view} setView={setView} />
      {isCalculator ? <Calculator /> : <History />}
    </div>
  );
};

export default Wrapper;
