import { Stack, StackProps } from '@mui/material';
import { FC, ReactNode } from 'react';

export interface ListProps extends StackProps {
  children: ReactNode;
}

export const List: FC<ListProps> = ({ children, ...props }) => {
  return (
    <Stack
      {...props}
      sx={{
        border: '1px solid',
        borderColor: 'common.black',
        ...props.sx,
      }}
    >
      {children}
    </Stack>
  );
};
