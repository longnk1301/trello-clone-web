import React from 'react';
import { Box } from '@mui/material';
import { colors } from 'src/common/colors';

interface ICard {
  card: { title: string };
}

export const Card = ({ card }: ICard) => {
  return (
    <Box mt={2} p={1} bgcolor={colors.textColor} borderRadius={1}>
      {card.title}
    </Box>
  );
};
