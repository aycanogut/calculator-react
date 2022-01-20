import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

const Screen = ({ displayValue }: any) => {
  return (
    <section className={styles.Screen}>
      <Display>{displayValue}</Display>
    </section>
  );
};

export default Screen;
