import React from 'react';
import { Box } from '@mui/material';
import { colors } from 'src/common/colors';
import { ICard } from 'src/common/initialData';
import { CardStyled, CardTitleStyled, ImageStyled } from './styled';

interface ICardProps {
  card: ICard;
}

export const Card = ({ card }: ICardProps) => {
  return (
    <CardStyled mt={2} p={1} bgcolor={colors.textColor} borderRadius={1}>
      {card?.cover && (
        <ImageStyled src={'https://www.fiditourjsc.com/wp-content/uploads/2020/10/featured-e1603256714543.jpg'} />
      )}
      <CardTitleStyled>{card?.title}</CardTitleStyled>
    </CardStyled>
  );
};
