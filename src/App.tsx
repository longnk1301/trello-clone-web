import * as React from 'react';

import { BoxStyled } from './common/styled';
import { AppBarStyled, BoardBarStyled, BoardColumn } from './components';

export default function App() {
  return (
    <BoxStyled>
      <AppBarStyled />
      <BoardBarStyled />
      <BoardColumn />
    </BoxStyled>
  );
}
