import React from 'react';
import styled from 'styled-components';

import { NumberButton, OperatorButton, EqualButton } from '../Button';

const StyledButtons = styled.section``;

const Buttons = () => {
  return (
    <StyledButtons>
      <NumberButton>1</NumberButton>
      <OperatorButton>+</OperatorButton>
      <EqualButton>=</EqualButton>
    </StyledButtons>
  );
};

export default Buttons;
