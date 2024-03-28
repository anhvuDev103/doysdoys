import { Box, BoxProps, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {}

const NoFunctionItem: FC<Props> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Typography>No Function Item</Typography>
    </Box>
  );
};

export default NoFunctionItem;
