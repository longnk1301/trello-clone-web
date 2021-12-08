import * as React from 'react';

import { BoxStyled } from './common/styled';
import { AppBarStyled, Board, BoardBarStyled } from './components';

export default function App() {
  return (
    <BoxStyled>
      <AppBarStyled />
      <BoardBarStyled />
      <Board />
    </BoxStyled>
  );
}
