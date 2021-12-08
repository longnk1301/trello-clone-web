export interface IDataList {
  boards: IBoard[];
}

export interface IBoard {
  id: string;
  columnOrder: string[];
  columns: IColumn[];
}

export interface IColumn {
  id: string;
  boardId: string;
  title: string;
  cardOrder: string[];
  cards: ICard[];
}

export interface ICard {
  id: string;
  boardId: string;
  columnId: string;
  title: string;
  cover: string | null;
}

export const initialData: IDataList = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'To do',
          cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 1',
              cover: 'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg',
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 2',
              cover: null,
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 3',
              cover: null,
            },
            {
              id: 'card-4',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 4',
              cover: 'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg',
            },
            {
              id: 'card-5',
              boardId: 'board-1',
              columnId: 'column-1',
              title: 'Title of card 5',
              cover: null,
            },
          ],
        },
        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'Inprogress',
          cardOrder: ['card-6', 'card-7', 'card-8'],
          cards: [
            {
              id: 'card-6',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 6',
              cover: null,
            },
            {
              id: 'card-7',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 7',
              cover: 'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg',
            },
            {
              id: 'card-8',
              boardId: 'board-1',
              columnId: 'column-2',
              title: 'Title of card 8',
              cover: null,
            },
          ],
        },
        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'Done',
          cardOrder: ['card-9', 'card-10', 'card-11'],
          cards: [
            {
              id: 'card-9',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 9',
              cover: null,
            },
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 10',
              cover: null,
            },
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-3',
              title: 'Title of card 11',
              cover: 'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg',
            },
          ],
        },
      ],
    },
  ],
};
