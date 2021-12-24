import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import helpers from '../../styles/helpers';

// modifiers
export const button_modifiers = {
  number: () => `
  background-color: ${helpers.color.numberKeys};
  `,
  operator: () => `
  background-color: ${helpers.color.operatorKeys};
  `,
  equal: () => `
  background-color: ${helpers.color.equalKey};
  `
};

// button styles
const StyledButton = styled.button<IButton>`
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

  ${applyStyleModifiers(button_modifiers)};
`;

// variants
export const NumberButton = styled(StyledButton)`
  ${applyStyleModifiers(button_modifiers)};
`;

export const OperatorButton = styled(StyledButton)`
  ${applyStyleModifiers(button_modifiers)};
`;

export const EqualButton = styled(StyledButton)`
  ${applyStyleModifiers(button_modifiers)};
`;

interface IButton {
  children: string;
  modifiers?: string;
}

const Button = ({ children, modifiers, ...props }: IButton) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
