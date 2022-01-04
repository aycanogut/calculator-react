import React from 'react';

import styles from './Input.module.css';

// types
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: number;
}

const Input = ({ children }: Props) => {
  const [inputValue, setInputValue] = React.useState(21);
  return <div className={styles.Input}>{inputValue}</div>;
};

export default Input;
