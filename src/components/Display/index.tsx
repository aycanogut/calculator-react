import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import styles from './Display.module.css';

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
}

const Display = ({ displayValue }: DisplayProps) => {
  const [fontSize, setFontSize] = useState(false);

  useEffect(() => {
    displayValue.length < 10 ? setFontSize(true) : setFontSize(false);
  }, [displayValue]);

  return (
    <div className={cx(styles.Display, !fontSize ? styles.SmallFont : '')}>{displayValue}</div>
  );
};

export default Display;
