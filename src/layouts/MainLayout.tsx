import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default MainLayout;
