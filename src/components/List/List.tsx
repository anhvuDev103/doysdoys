import { Stack, StackProps } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props extends StackProps {
  children: ReactNode;
}

const List: FC<Props> = ({ children, ...props }) => {
  return (
    <Stack
      {...props}
      sx={{
        border: '1px solid',
        borderColor: 'common.black',
        borderRadius: 1.5,
        ...props.sx,
      }}
    >
      {children}
    </Stack>
  );
};

export default List;
