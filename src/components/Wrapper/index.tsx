import React, { useState } from 'react';

import { LayoutTypes } from '../../constant';

import Header from '../Header';
import Calculator from '../Calculator';
import History from '../History';

import styles from './Wrapper.module.css';

const Wrapper = () => {
  const [view, setView] = useState(LayoutTypes.Calculator);
  const isCalculator = view === LayoutTypes.Calculator;

  const [displayValue, setDisplayValue] = useState('');
  const [subDisplayValue, setSubDisplayValue] = useState('');
  const [history, setHistory] = useState<any>([]);

  return (
    <div className={styles.Wrapper}>
      <Header view={view} setView={setView} />
      {isCalculator ? (
        <Calculator
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          subDisplayValue={subDisplayValue}
          setSubDisplayValue={setSubDisplayValue}
        />
      ) : (
        <History history={history} setHistory={setHistory} />
      )}
    </div>
  );
};

export default Wrapper;
