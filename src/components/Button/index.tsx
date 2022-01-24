import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  variant: string;
}

interface variantProps {
  [key: string]: string;
}

const variants: variantProps = {
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
