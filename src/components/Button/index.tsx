import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: gray;
  color: white;
`;

const Button = ({ children }: { children: string }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
