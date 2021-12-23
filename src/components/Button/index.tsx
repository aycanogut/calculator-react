import React from 'react';
import styled from 'styled-components';

import helpers from '../../styles/helpers';

const StyledButton = styled.button`
  display: inline-block;
  padding: 1.4rem 3.4rem;
  /* margin: 10rem; */
  background-color: ${helpers.color.numberKeys};
  color: ${helpers.color.textPrimary};
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${helpers.typography.fontSize.md};
  font-weight: ${helpers.typography.fontWeight.bold};
  text-decoration: none;
  white-space: nowrap;
`;

const Button = ({ children, ...props }: { children: string }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
