import React from 'react';
import styles from './Wrapper.module.css';
import Screen from '../Screen';
import Buttons from '../Buttons';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Screen />
      <Buttons />
    </div>
  );
};

export default Wrapper;
