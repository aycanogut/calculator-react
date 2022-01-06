import React, { useState } from 'react';

import { historyIcon } from '../../utils/iconShortcuts';

import Header from '../Header';
import Calculator from '../Calculator';

import styles from './Wrapper.module.css';

const Wrapper = () => {
  // element variables render method, 1
  const calculator = <Calculator />;

  const [layout, setLayout] = useState(calculator);
  const [icon, setIcon] = useState(historyIcon);

  return (
    <div className={styles.Wrapper}>
      <Header setLayout={setLayout} icon={icon} setIcon={setIcon} />
      {layout} // 1
    </div>
  );
};

export default Wrapper;
