import { Column } from '@components/primitives';
import MainLayout from '@layouts/MainLayout';
import Connection from '@modules/doydoy/connection/Connection';
import Contracts from '@modules/doydoy/contracts/Contracts';
import Functions from '@modules/doydoy/functions/Functions';
import InputOutput from '@modules/doydoy/inputOutput/InputOutput';
import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {}

const Doydoy: FC<Props> = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '320px 320px 1fr',
          gap: 6,
          height: '100%',
        }}
      >
        <Column sx={{ gap: 6 }}>
          <Connection />
          <Contracts />
        </Column>
        <Functions />
        <InputOutput />
      </Box>
    </MainLayout>
  );
};

export default Doydoy;
