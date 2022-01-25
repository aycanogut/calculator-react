import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  setDisplayValue: Function;
}

const Screen = ({ displayValue, setDisplayValue }: ScreenProps) => {
  return (
    <section className={styles.Screen}>
      <Display displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </section>
  );
};

export default Screen;
