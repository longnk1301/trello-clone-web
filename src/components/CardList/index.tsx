import React from 'react';
import { Box } from '@mui/material';
import { IColumn } from 'src/common/initialData';
import { mapOrder } from 'src/utils';
import { Card } from '..';
import { AddTaskText } from './styled';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';

interface ICardListProps {
  column: IColumn;
}

export const CardList = ({ column }: ICardListProps) => {
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  const onColumnDrop = (dropResult: DropResult) => {};

  return (
    <Box>
      <Container
        groupName="col"
        onDragStart={(e) => console.log('drag started', e)}
        onDragEnd={(e) => console.log('drag end', e)}
        onDrop={onColumnDrop}
        getChildPayload={(index) => column.cards[index]}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        onDragEnter={() => {
          console.log('drag enter:', column.id);
        }}
        onDragLeave={() => {
          console.log('drag leave:', column.id);
        }}
        onDropReady={(p) => console.log('Drop ready: ', p)}
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
      <AddTaskText>Add another card</AddTaskText>
    </Box>
  );
};
