import React from 'react';
import { Box } from '@mui/material';
import { colors } from 'src/common/colors';
import { TitleStyled } from 'src/common/styled';

export const AppBarStyled = () => {
  return (
    <Box pl={2} pr={2} display="flex" alignItems="center" bgcolor={colors.appBarColor}>
      <nav>
        <TitleStyled>App Bar</TitleStyled>
      </nav>
    </Box>
  );
};
