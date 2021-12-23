import React from 'react';
import styled from 'styled-components';
import { NumberButton, OperatorButton, EqualButton } from '../Button';

const StyledButtons = styled.section``;

const Buttons = ({ modifiers }: { modifiers?: string }) => {
  return (
    <StyledButtons>
      <NumberButton modifiers="number">1</NumberButton>
      <OperatorButton modifiers="operator">+</OperatorButton>
      <EqualButton modifiers="equal">=</EqualButton>
    </StyledButtons>
  );
};

export default Buttons;
