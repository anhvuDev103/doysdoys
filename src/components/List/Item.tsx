import { Box, BoxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props extends BoxProps {
  children: ReactNode;
}

const Item: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        px: 5,
        py: 4,
        borderBottom: '1px dashed',
        borderBottomColor: 'common.black',
        cursor: 'pointer',
        '&:last-child': {
          borderBottomColor: 'transparent',
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Item;
