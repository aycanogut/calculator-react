import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import styles from './Button.module.css';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  variant?: string;
}

interface IVariantProps {
  [key: string]: string;
}

const variants: IVariantProps = {
  number: styles.Number,
  operator: styles.Operator,
  helper: styles.Number,
  equal: styles.Equal
};

const Button = ({ value, variant = 'default', ...props }: IButtonProps) => {
  return (
    <button className={cx(styles.Button, variants[variant])} type="button" {...props}>
      {value}
    </button>
  );
};

export default Button;
