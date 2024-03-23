import { Panel } from '@components/Panel';
import { Row } from '@components/primitives';
import useModal from '@hooks/useModal';
import AddContract from '@modules/doydoy/modals/AddContract';
import { Button, styled, Typography } from '@mui/material';

import ContractsList from './ContractsList';

const StyledContractsListHead = styled(Row)(() => ({
  padding: '12px 20px',
  borderBottom: '1px solid',
  borderBottomColor: 'common.black',
}));

const ContractsListHead = () => {
  const [open] = useModal(<AddContract />);
  return (
    <StyledContractsListHead>
      <Typography variant='title2'>Contracts</Typography>
      <Button size='small' variant='yellow' onClick={open}>
        Add
      </Button>
    </StyledContractsListHead>
  );
};

const Contracts = () => {
  return (
    <Panel label='Contracts' headless sx={{ p: 0, flex: 1 }}>
      <ContractsListHead />
      <ContractsList />
    </Panel>
  );
};

export default Contracts;
