import { Column } from '@components/primitives';
import MainLayout from '@layouts/MainLayout';
import Call from '@modules/doydoy/call/Call';
import Connection from '@modules/doydoy/connection/Connection';
import Contracts from '@modules/doydoy/contracts/Contracts';
import Functions from '@modules/doydoy/functions/Functions';
import Result from '@modules/doydoy/result/Result';
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
        }}
      >
        <Column sx={{ gap: 6 }}>
          <Connection />
          <Contracts />
        </Column>
        <Functions />
        <Box>
          <Result />
          <Call />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Doydoy;
