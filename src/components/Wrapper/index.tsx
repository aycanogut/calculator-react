import React from 'react';

import Header from '../Header';
import Calculator from '../Calculator';
import History from '../History';

import styles from './Wrapper.module.css';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <Calculator />
      {/* <History /> */}
    </div>
  );
};

export default Wrapper;
