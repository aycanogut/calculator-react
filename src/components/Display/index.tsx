import React from 'react';

import styles from './Display.module.css';

export interface DisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  children: number;
}

const Display = ({ children }: DisplayProps) => {
  return <div className={styles.Display}>{children}</div>;
};

export default Display;
