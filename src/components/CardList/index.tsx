import React from 'react';
import { Box, Button } from '@mui/material';
import { IColumn } from 'src/common/initialData';
import { mapOrder } from 'src/utils';
import { Card } from '..';
import { AddTaskText } from './styled';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import AddIcon from '@mui/icons-material/Add';

interface ICardListProps {
  column: IColumn;
  onCardDrop: (columnId: string, dropResult: DropResult) => void;
}

export const CardList = ({ column, onCardDrop }: ICardListProps) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  return (
    <Box>
      <Container
        groupName="col"
        onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
        getChildPayload={(index) => column.cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'drop-preview',
        }}
      >
        {cards?.map((card) => (
          <Draggable key={card.id}>
            <Card key={card?.id} card={card} />
          </Draggable>
        ))}
      </Container>
      <Box mt={2}>
        <Button variant="text" color="info">
          <AddIcon />
          <AddTaskText>Add another card</AddTaskText>
        </Button>
      </Box>
    </Box>
  );
};
