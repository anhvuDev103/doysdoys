import { Column } from '@components/primitives';
import MainLayout from '@layouts/MainLayout';
import Connection from '@modules/doydoy/connection/Connection';
import Contracts from '@modules/doydoy/contracts/Contracts';
import Functions from '@modules/doydoy/functions/Functions';
import { Grid, Paper } from '@mui/material';
import { FC } from 'react';

interface Props {}

const Doydoy: FC<Props> = () => {
  return (
    <MainLayout>
      <Grid container spacing={8}>
        <Grid item xs={2.5}>
          <Column sx={{ gap: 6 }}>
            <Connection />
            <Contracts />
          </Column>
        </Grid>
        <Grid item xs={2.5}>
          <Functions />
        </Grid>
        <Grid item xs={7}>
          <Paper>Ahihi</Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Doydoy;
