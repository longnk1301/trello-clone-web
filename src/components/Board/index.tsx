import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { colors } from 'src/common/colors';
import { CardList } from '..';
import { BoardTitle } from './styled';
import { IBoard, IColumn, initialData } from 'src/common/initialData';
import { BoardNotFound } from './styled';
import { isEmpty } from 'lodash';
import { mapOrder } from 'src/utils';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';

export const Board = () => {
  const [board, setBoard] = useState<IBoard | null>();
  const [columns, setColumns] = useState<IColumn[]>([]);

  useEffect(() => {
    const response = initialData.boards.find((board) => board.id === 'board-1');
    if (response) {
      setBoard(response);

      setColumns(mapOrder(response.columns, response.columnOrder, 'id'));
    }
  }, []);

  if (isEmpty(board)) {
    return (
      <Box display={'flex'} flex={1} justifyContent="center" alignItems="center">
        <BoardNotFound>Board not found!</BoardNotFound>
      </Box>
    );
  }

  const onColumnDrop = (dropResult: DropResult) => {};

  return (
    <Box display={'flex'} flex={1} overflow={'auto'}>
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'cards-drop-preview',
        }}
      >
        {columns?.map((column) => (
          <Draggable key={column?.id}>
            <Box
              m={2}
              pl={2}
              pr={2}
              pb={2}
              maxWidth={'350px'}
              minWidth={'350px'}
              borderRadius={2}
              bgcolor={colors.boardColor}
              overflow={'auto'}
            >
              <BoardTitle className="column-drag-handle">{column?.title}</BoardTitle>
              <CardList column={column} />
            </Box>
          </Draggable>
        ))}
      </Container>
    </Box>
  );
};
