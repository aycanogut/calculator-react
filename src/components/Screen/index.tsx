import React from 'react';

import Display from '../Display';

import styles from './Screen.module.css';

export interface IScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

const Screen = ({ displayValue, subDisplayValue }: IScreenProps) => {
  return (
    <section className={styles.Screen}>
      <Display displayValue={displayValue} subDisplayValue={subDisplayValue} />
    </section>
  );
};

export default Screen;
