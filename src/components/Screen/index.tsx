import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
}

const Screen = ({ displayValue }: ScreenProps) => {
  return (
    <section className={styles.Screen}>
      <Display displayValue={displayValue} />
    </section>
  );
};

export default Screen;
