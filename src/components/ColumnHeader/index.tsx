import React, { useState } from 'react';
import { Box, Button, List, ListItem, ListItemButton, ListItemText, Popover, TextField } from '@mui/material';
import { BoardTitle } from '../Board/styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IColumn } from 'src/common/initialData';

interface IColumnHeader {
  column: IColumn;
  onSaveNewTitle: (columnId: string, title: string) => void;
  onDeleteColumn: (columnId: string) => void;
}

export const ColumHeader = ({ column, onSaveNewTitle, onDeleteColumn }: IColumnHeader) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [isEditTitleColumn, setIsEditTitleColumn] = useState<boolean>(false);
  const [titleColumn, setTitleColumn] = useState<string>(column.title);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'more-action' : undefined;

  const onEditColumnTitle = () => {
    handleClose();
    setIsEditTitleColumn(!isEditTitleColumn);
  };

  const handleModalConfirmDelete = () => {
    handleClose();
    onDeleteColumn(column.id);
  };

  const onChangeColumnName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.value) {
      setTitleColumn(e.target.value);
    }
  };

  const saveNewTitle = () => {
    onSaveNewTitle(column.id, titleColumn);
    setIsEditTitleColumn(!isEditTitleColumn);
  };

  return (
    <>
      {isEditTitleColumn ? (
        <TextField
          fullWidth
          id="add-column-name"
          label="Column name"
          variant="outlined"
          onChange={onChangeColumnName}
          value={titleColumn}
          onBlur={saveNewTitle}
          autoFocus
        />
      ) : (
        <Box onClick={onEditColumnTitle}>
          <BoardTitle className="column-drag-handle">{column?.title}</BoardTitle>
        </Box>
      )}

      <Button aria-describedby={id} onClick={handleClick}>
        <MoreHorizIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleModalConfirmDelete}>
              <ListItemText primary="Delete column" />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
