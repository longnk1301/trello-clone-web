import * as React from 'react';
import Box from '@mui/material/Box';
import { AppBarStyled, BoardBarStyled, BoardColumn } from './components';
import { BoxStyled } from './common/styled';

export default function App() {
  return (
    <BoxStyled>
      <AppBarStyled />
      <BoardBarStyled />
      <BoardColumn />
    </BoxStyled>
  );
}
