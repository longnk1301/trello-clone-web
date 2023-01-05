import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { colors } from 'src/common/colors';
import { CardList } from '..';
import { IBoard, ICard, IColumn, IColumnPayload } from 'src/common/initialData';
import { BoardNotFound } from './styled';
import { isEmpty } from 'lodash';
import { mapOrder, applyDrag, filterDropResult } from 'src/utils';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import { AddTaskText } from '../CardList/styled';
import AddIcon from '@mui/icons-material/Add';
import { ColumHeader } from '../ColumnHeader';
import { fetchBoard, createColumn, updateColumn, updateBoard } from 'src/services/TrelloService';

export const Board = () => {
  const [board, setBoard] = useState<IBoard | null>(null);
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [columnNameValue, setColumnNameValue] = useState<string>('');
  const [isOpenAddNewColumn, setIsOpenAddNewColumn] = useState<boolean>(false);

  const getBoard = async () => {
    const boardId = '63b3a61a48e2f240a27679a5';
    const response = await fetchBoard(boardId);

    if (response && !response._destroy) {
      setBoard(response);
      if (response.columns && response.columnOrder) {
        const filterActiveColumns = response.columns.filter((column: IColumn) => !column._destroy);
        setColumns(mapOrder(filterActiveColumns, response.columnOrder, '_id'));
      }
    }
  };

  useEffect(() => {
    getBoard();
  }, []);

  if (isEmpty(board)) {
    return (
      <Box display={'flex'} flex={1} justifyContent="center" alignItems="center">
        <BoardNotFound>Board not found!</BoardNotFound>
      </Box>
    );
  }

  const onColumnDrop = async (dropResult: DropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c._id);
    newBoard.columns = newColumns;

    if (newBoard.columnOrder && newBoard._id) {
      setColumns(newColumns);
      setBoard(newBoard);

      await updateBoard(newBoard._id, { columnOrder: newBoard.columnOrder });
    }
  };

  const onCardDrop = (columnId: string, dropResult: DropResult) => {
    if (filterDropResult(dropResult)) {
      let newColumns = [...columns];
      let currentColumn = newColumns.find((c) => c._id === columnId);

      if (currentColumn) {
        currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
        currentColumn.cardOrder = currentColumn.cards.map((i) => i._id);
      }

      setColumns(newColumns);
    }
  };

  const onToggleAddNewColumn = () => {
    setIsOpenAddNewColumn(!isOpenAddNewColumn);
    setColumnNameValue('');
  };

  const onAddNewColumn = async () => {
    const params: IColumnPayload = {
      boardId: board?._id ?? '',
      title: columnNameValue.trim() ?? '',
    };

    const response = await createColumn(params);

    if (response) {
      let newColumns = [...columns];
      newColumns.push(response);

      let newBoard = { ...board };
      newBoard.columnOrder = newColumns.map((c) => c._id);
      newBoard.columns = newColumns;

      setColumns(newColumns);
      setBoard(newBoard);
      onToggleAddNewColumn();
    }
  };

  const onChangeColumnName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setColumnNameValue(e.target.value);
  };

  const onSaveNewTitleColumn = async (columnId: string, newTitle: string) => {
    const newColumns = [...columns];
    let findColumnUpdated = newColumns.find((column) => column._id === columnId);
    if (findColumnUpdated) {
      findColumnUpdated.title = newTitle;
    }

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c._id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);

    await updateColumn(columnId, { title: newTitle });
  };

  const onDeleteColumn = async (columnId: string) => {
    const newColumns = columns.filter((column) => column._id !== columnId);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c._id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);

    await updateColumn(columnId, { _destroy: true });
  };

  const onAddNewCard = (columnId: string, value: string) => {
    const params: ICard = {
      _id: Math.random().toString(36).substring(2, 5),
      boardId: board?._id ?? '',
      columnId,
      title: value,
      cover: null,
    };
    const newColumns = [...columns];
    const findColumn = newColumns.find((column) => column._id === columnId);

    if (findColumn) {
      const indexOfColumnWillAddCard = newColumns.indexOf(findColumn);

      newColumns[indexOfColumnWillAddCard].cards.push(params);
      newColumns[indexOfColumnWillAddCard].cardOrder.push(params._id);

      const newBoard = { ...board };
      newBoard.columnOrder = newColumns.map((c) => c._id);
      newBoard.columns = newColumns;

      setColumns(newColumns);
      setBoard(newBoard);
    }
  };

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
          <Draggable key={column?._id}>
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
              <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                <ColumHeader column={column} onSaveNewTitle={onSaveNewTitleColumn} onDeleteColumn={onDeleteColumn} />
              </Box>
              <CardList column={column} onCardDrop={onCardDrop} onAddNewCard={onAddNewCard} />
            </Box>
          </Draggable>
        ))}
        {!isOpenAddNewColumn ? (
          <Box mt={2} mr={2} minWidth={'350px'} bgcolor={colors.boardColor} borderRadius={2}>
            <Button variant="text" color="info" fullWidth onClick={onToggleAddNewColumn}>
              <AddIcon />
              <AddTaskText>Add new column</AddTaskText>
            </Button>
          </Box>
        ) : (
          <Box mt={2} mr={2} p={2} minWidth={'350px'} bgcolor={colors.boardColor} borderRadius={2}>
            <TextField
              fullWidth
              id="add-column-name"
              label="Column name"
              variant="outlined"
              onChange={onChangeColumnName}
              value={columnNameValue}
              autoFocus
            />
            <Button variant="text" color="info" onClick={onAddNewColumn} disabled={columnNameValue === ''}>
              <AddIcon />
              <AddTaskText>Add column</AddTaskText>
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};
