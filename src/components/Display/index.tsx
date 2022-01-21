import React from 'react';

import styles from './Display.module.css';

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  displayValue: string;
}

const Display = ({ displayValue }: DisplayProps) => {
  return <div className={styles.Display}>{displayValue}</div>;
};

export default Display;
