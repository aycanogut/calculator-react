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
    <div
      className={cx(styles.Display, {
        [styles.SmallFont]: isSmallFont
      })}>
      {displayValue || '0'}
    </div>
  );
};

export default Display;
