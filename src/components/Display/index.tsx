import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from './Display.module.css';

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
}

const Display = ({ displayValue }: DisplayProps) => {
  const [isSmallFont, setIsSmallFont] = useState(false);

  useEffect(() => {
    displayValue.length < 10 ? setIsSmallFont(false) : setIsSmallFont(true);
  }, [displayValue]);

  return (
    <div
      className={cx(styles.Display, {
        [styles.SmallFont]: isSmallFont
      })}>
      {displayValue}
    </div>
  );
};

export default Display;
