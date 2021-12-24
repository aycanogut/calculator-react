import React, { HTMLAttributes, ReactNode } from 'react';
import { Button } from '@mantine/core';
import helpers from '../../styles/helpers';

// types
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'number' | 'operator' | 'equal';
}

const ButtonComponent = ({ children, variant, ...props }: Props) => {
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

export default ButtonComponent;
