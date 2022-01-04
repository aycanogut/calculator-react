import React, { HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

// types
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'number' | 'operator' | 'equal';
}

const variants = {
  number: styles.Number,
  operator: styles.Operator,
  equal: styles.Equal
};

const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button className={cx(styles.Button, variants[variant], className)} type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
