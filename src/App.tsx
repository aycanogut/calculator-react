import React from 'react';
import GlobalStyle from './styles/globalStyles';
import { Reset } from 'styled-reset';

import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper />
    </>
  );
}

export default App;
