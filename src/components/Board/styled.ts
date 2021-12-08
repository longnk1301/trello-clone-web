import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const BoardTitle = styled(Typography)(() => ({
  fontSize: 16,
  fontWeight: 700,
}));

export const ImageStyled = styled.img(() => ({
  width: '100%',
  borderRadius: '2%',
}));

export const AddTaskText = styled(Typography)(() => ({
  margin: '8px 0px',
  fontSize: 14,
  fontWeight: 400,
}));
