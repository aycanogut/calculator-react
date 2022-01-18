import React from 'react';

import styles from './Input.module.css';

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  children: number;
}

const Input = ({ children }: InputProps) => {
  return <div className={styles.Input}>{children}</div>;
};

export default Input;
