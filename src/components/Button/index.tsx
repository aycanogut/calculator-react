import React from 'react';
import styled from 'styled-components';

import helpers from '../../styles/helpers';

const StyledButton = styled.button`
  display: inline-block;
  padding: 1.4rem 3.4rem;
  color: ${helpers.color.textPrimary};
  outline: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  font-size: ${helpers.typography.fontSize.md};
  font-weight: ${helpers.typography.fontWeight.bold};
  text-decoration: none;
`;

export const NumberButton = styled(StyledButton)`
  background-color: ${helpers.color.numberKeys};
`;

export const OperatorButton = styled(StyledButton)`
  background-color: ${helpers.color.operatorKeys};
`;

export const EqualButton = styled(StyledButton)`
  background-color: ${helpers.color.equalKey};
`;

const Button = ({ children, ...props }: { children: string }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
