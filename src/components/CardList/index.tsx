import { Box } from '@mui/material';
import React from 'react';
import { colors } from 'src/common/colors';
import { Card } from '..';
import { AddTaskText } from '../Board/styled';

export const cards = [
  {
    title: 'Card 1',
  },
  {
    title: 'Card 2',
  },
  {
    title: 'Card 3',
  },
  {
    title: 'Card 4',
  },
];

export const CardList = () => {
  return (
    <Box>
      {cards.map((card) => (
        <Card card={card} />
      ))}
      <AddTaskText>Add another card</AddTaskText>
    </Box>
  );
};
