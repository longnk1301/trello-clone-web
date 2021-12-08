import React from 'react';
import { Box } from '@mui/material';
import { colors } from 'src/common/colors';
import { CardList } from '..';
import { BoardTitle, ImageStyled } from './styled';

export const Board = () => {
  return (
    <Box m={2} p={2} maxWidth={'350px'} minWidth={'350px'} borderRadius={2} bgcolor={colors.boardColor}>
      <BoardTitle>Board</BoardTitle>
      <ImageStyled src={'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg'} />
      <CardList />
    </Box>
  );
};
