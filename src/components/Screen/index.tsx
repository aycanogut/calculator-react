import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

export interface ScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

const Screen = ({ displayValue, subDisplayValue }: ScreenProps) => {
  return (
    <section className={styles.Screen}>
      <Display displayValue={displayValue} subDisplayValue={subDisplayValue} />
    </section>
  );
};

export default Screen;
