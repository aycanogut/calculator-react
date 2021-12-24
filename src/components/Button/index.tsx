import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import helpers from '../../styles/helpers';

// types
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'number' | 'operator' | 'equal';
}

const Button = ({ children, variant, ...props }: Props) => {
  const style: CSSProperties = {
    display: 'inline-block',
    padding: '14px 34px',
    outline: 'none',
    border: 'none',
    whiteSpace: 'nowrap',
    fontSize: helpers.typography.fontSize.md,
    fontWeight: helpers.typography.fontWeight.bold,
    textDecoration: 'none',
    color: helpers.color.textPrimary,
    backgroundColor:
      variant === 'number'
        ? helpers.color.numberKeys
        : variant === 'operator'
        ? helpers.color.operatorKeys
        : helpers.color.equalKey
  };
  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
