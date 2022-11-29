import React from 'react';
import { colors } from 'src/common/colors';
import { ICard } from 'src/common/initialData';
import { CardStyled, CardTitleStyled, ImageStyled } from './styled';

interface ICardProps {
  card: ICard;
}

export const Card = ({ card }: ICardProps) => {
  return (
    <CardStyled mt={2} p={1} bgcolor={colors.textColor} borderRadius={1}>
      {card?.cover && <ImageStyled src={'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg'} />}
      <CardTitleStyled>{card?.title}</CardTitleStyled>
    </CardStyled>
  );
};
