import React, { HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  variant: 'number' | 'operator' | 'equal';
}

const variants = {
  number: styles.Number,
  operator: styles.Operator,
  equal: styles.Equal
};

const Button = ({ value, variant, ...props }: ButtonProps) => {
  return (
    <button className={cx(styles.Button, variants[variant])} type="button" {...props}>
      {value}
    </button>
  );
};

export default Button;
