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
    <Button
      styles={() => ({
        root: {
          display: 'inline-block',
          height: 42,
          width: 76,
          borderRadius: '0',
          backgroundColor:
            variant === 'number'
              ? helpers.color.numberKeys
              : variant === 'operator'
              ? helpers.color.operatorKeys
              : helpers.color.equalKey,
          border: 0,
          transition: 'background-color 0.2s ease-in-out',

          '&:hover': {
            backgroundColor: helpers.color.black,
            transition: 'background-color 0.2s ease-in-out'
          }
        }
      })}
      {...props}>
      {children}
    </Button>
  );
};

export default Button;
