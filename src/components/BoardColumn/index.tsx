import { Box } from '@mui/material';
import React from 'react';
import { colors } from 'src/common/colors';
import { Board } from '..';

export const BoardColumn = () => {
  return (
    <Box display={'flex'} flex={1} overflow={'auto'}>
      {[1, 2, 3, 4, 5, 6].map(() => (
        <Board />
      ))}
    </Box>
  );
};
