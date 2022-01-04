import React from 'react';

import Calculator from '../Calculator';
import History from '../History';

import styles from './Wrapper.module.css';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Calculator />
      {/* <History /> */}
    </div>
  );
};

export default Wrapper;
