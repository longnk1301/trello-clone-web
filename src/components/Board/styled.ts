import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { colors } from 'src/common/colors';

export const BoardTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 700,
  paddingTop: 16,
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const BoardNotFound = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 700,
  color: colors.textColor,
}));
