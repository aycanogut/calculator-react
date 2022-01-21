import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

const Screen = ({ displayValue }: any) => {
  return (
    <section className={styles.Screen}>
      <Display displayValue={displayValue} />
    </section>
  );
};

export default Screen;
