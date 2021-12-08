import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import { colors } from 'src/common/colors';

export const BoxStyled = styled(Box)(() => ({
  display: 'grid',
  height: '100vh',
  gridTemplateRows: '40px 50px 1fr',
  lineHeight: '1.3em',
  backgroundColor: colors.backgroundColor,
}));

export const TitleStyled = styled(Typography)(() => ({
  color: colors.textColor,
  fontSize: 24,
  fontWeight: 700,
}));
