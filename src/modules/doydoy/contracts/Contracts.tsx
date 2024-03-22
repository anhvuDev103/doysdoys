import { Panel } from '@components/Panel';
import { Row } from '@components/primitives';
import { Button, styled, Typography } from '@mui/material';

import ContractsList from './ContractsList';

const StyledContractsListHead = styled(Row)(() => ({
  padding: '12px 20px',
  borderBottom: '1px solid',
  borderBottomColor: 'common.black',
}));

const ContractsListHead = () => {
  return (
    <StyledContractsListHead>
      <Typography variant='title2'>Contracts</Typography>
      <Button variant='yellow'>Add</Button>
    </StyledContractsListHead>
  );
};

const Contracts = () => {
  return (
    <Panel label='Contracts' headless sx={{ p: 0 }}>
      <ContractsListHead />
      <ContractsList />
    </Panel>
  );
};

export default Contracts;
