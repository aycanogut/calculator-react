import React from 'react';

const Button = ({ children }: { children: HTMLElement }) => {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    padding: '10px'
  };
  return <button>{children}</button>;
};

export default Button;
