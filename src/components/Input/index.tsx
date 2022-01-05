import React from 'react';

import styles from './Input.module.css';

// types
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: number;
}

const Input = ({ children }: Props) => {
  return <div className={styles.Input}>{children}</div>;
};

export default Input;
