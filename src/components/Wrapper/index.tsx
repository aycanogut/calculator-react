import React from 'react';
import styled from 'styled-components';

import Buttons from '../Buttons';

const StyledWrapper = styled.div`
  display: flex;
`;

const Wrapper = () => {
  return (
    <StyledWrapper>
      <Buttons />
    </StyledWrapper>
  );
};

export default Wrapper;
