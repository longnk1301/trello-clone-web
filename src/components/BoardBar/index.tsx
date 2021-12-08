import { Box } from '@mui/material';
import { colors } from 'src/common/colors';
import { TitleStyled } from 'src/common/styled';

export const BoardBarStyled = () => {
  return (
    <Box pl={2} pr={2} display="flex" alignItems="center" bgcolor={colors.boardBarColor}>
      <nav>
        <TitleStyled>Board Bar</TitleStyled>
      </nav>
    </Box>
  );
};
