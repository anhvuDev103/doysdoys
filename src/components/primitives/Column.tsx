import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {}

const Column: FC<Props> = ({ ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        ...props.sx,
      }}
    ></Box>
  );
};

export default Column;
