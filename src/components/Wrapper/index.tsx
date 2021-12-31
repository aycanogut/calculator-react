import React from 'react';
import styles from './Wrapper.module.css';
import Buttons from '../Buttons';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Buttons />
    </div>
  );
};

export default Wrapper;
