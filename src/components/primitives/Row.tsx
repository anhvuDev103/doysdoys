import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {}

const Row: FC<Props> = (props) => {
  return (
    <Box
      {...props}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        ...props.sx,
      }}
    ></Box>
  );
};

export default Row;
