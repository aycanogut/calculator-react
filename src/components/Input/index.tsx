import React from 'react';
import styles from './Wrapper.module.css';

// types
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

const Input = ({ children }: Props) => {
  return <div className={styles.Input}>{children}</div>;
};

export default Input;
