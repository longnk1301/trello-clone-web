import React from 'react';
import { Box } from '@mui/material';
import { IColumn } from 'src/common/initialData';
import { mapOrder } from 'src/utils';
import { Card } from '..';
import { AddTaskText } from './styled';

interface ICardListProps {
  column: IColumn;
}

export const CardList = ({ column }: ICardListProps) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  return (
    <Box>
      {cards?.map((card) => (
        <Card card={card} />
      ))}
      <AddTaskText>Add another card</AddTaskText>
    </Box>
  );
};
