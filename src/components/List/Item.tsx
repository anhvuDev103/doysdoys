import { Box, BoxProps } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface ItemProps extends BoxProps {
  children?: ReactNode;
}

export const Item: FC<ItemProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        px: 5,
        py: 4,
        borderBottom: '1px dashed',
        borderBottomColor: 'common.black',
        cursor: 'pointer',
        // '&:last-child': {
        //   borderBottomColor: 'transparent',
        // },
        '&:hover': {
          backgroundColor: 'action.hover',
        },
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
};
