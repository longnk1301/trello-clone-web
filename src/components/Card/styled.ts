import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const ImageStyled = styled.img(() => ({
  width: '100%',
  borderRadius: '2%',
}));

export const CardTitleStyled = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 400,
}));

export const CardStyled = styled(Box)(() => ({
  '&:hover': {
    cursor: 'pointer',
  },
}));
