import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { IColumn } from 'src/common/initialData';
import { mapOrder } from 'src/utils';
import { Card } from '..';
import { AddTaskText } from './styled';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import AddIcon from '@mui/icons-material/Add';

interface ICardListProps {
  column: IColumn;
  onCardDrop: (columnId: string, dropResult: DropResult) => void;
  onAddNewCard: (columnId: string, value: string) => void;
}

export const CardList = ({ column, onCardDrop, onAddNewCard }: ICardListProps) => {
  const [isDisplayInput, setIsDisplayInput] = useState<boolean>(false);
  const [txtNewCard, setTxtNewCard] = useState<string>('');
  const cards = mapOrder(column.cards, column.cardOrder, 'id');

  const onHandleAddAnotherCard = () => {
    setIsDisplayInput(!isDisplayInput);
    setTxtNewCard('');
  };

  const onChangeCardName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.value) {
      setTxtNewCard(e.target.value);
    }
  };

  const saveNewCard = () => {
    if (txtNewCard !== '') {
      onAddNewCard(column._id, txtNewCard);
    }
    onHandleAddAnotherCard();
  };

  return (
    <Box>
      <Container
        groupName="col"
        onDrop={(dropResult) => onCardDrop(column._id, dropResult)}
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
          <Draggable key={card._id}>
            <Card key={card?._id} card={card} />
          </Draggable>
        ))}
      </Container>
      <Box mt={2}>
        {isDisplayInput ? (
          <Box>
            <TextField
              fullWidth
              id="add-card-name"
              label="Card name"
              variant="outlined"
              onChange={onChangeCardName}
              value={txtNewCard}
              onBlur={saveNewCard}
              autoFocus
            />
          </Box>
        ) : (
          <Button variant="text" color="info" onClick={onHandleAddAnotherCard}>
            <AddIcon />
            <AddTaskText>Add another card</AddTaskText>
          </Button>
        )}
      </Box>
    </Box>
  );
};
