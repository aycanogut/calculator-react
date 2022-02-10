import React from 'react';
import cx from 'classnames';

import styles from './Display.module.css';

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
  subDisplayValue: string;
}

const Display = ({ displayValue, subDisplayValue }: DisplayProps) => {
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
