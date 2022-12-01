import { DropResult } from 'react-smooth-dnd';

export const mapOrder = (array: any[], order: any[], key: string) => {
  array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));

  return array;
};

export const applyDrag = (arr: any[], dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;

  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }

  return result;
};

export const filterDropResult = (dropResult: DropResult) => {
  if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
    return true;
  }
  return false;
};
