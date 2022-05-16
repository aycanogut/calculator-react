import React from 'react';
import cx from 'classnames';

import styles from './Display.module.css';

export interface IDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

const Display = ({ displayValue, subDisplayValue }: IDisplayProps) => {
  const isSmallFont = displayValue.length > 10;

  return (
    <section className={styles.Display}>
      <div className={styles.SubValue}>{subDisplayValue}</div>
      <div
        className={cx(styles.Value, {
          [styles.SmallFont]: isSmallFont
        })}>
        {displayValue || '0'}
      </div>
    </section>
  );
};

export default Display;
