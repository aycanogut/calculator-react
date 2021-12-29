import React from 'react';
import styles from './Wrapper.module.css';
import Calculator from '../Calculator';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Calculator />
    </div>
  );
};

export default Wrapper;
