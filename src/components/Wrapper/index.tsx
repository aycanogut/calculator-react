import React from 'react';
import styles from './Wrapper.module.css';

import Calculator from '../Calculator';
import History from '../History';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Calculator />
      {/* <History /> */}
    </div>
  );
};

export default Wrapper;
