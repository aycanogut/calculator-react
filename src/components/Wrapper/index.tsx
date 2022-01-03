import React from 'react';
import styles from './Wrapper.module.css';
import Screen from '../Screen';
import Buttons from '../Buttons';
import History from '../History';

const Wrapper = () => {
  return (
    <div className={styles.Wrapper}>
      <Screen />
      {/* <Buttons /> */}
      <History />
    </div>
  );
};

export default Wrapper;
