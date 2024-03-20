import { Panel } from '@components/Panel';
import { Button } from '@mui/material';

import ContractsList from './ContractsList';

const Contracts = () => {
  return (
    <Panel label='Contracts' action={<Button size='small'>Add</Button>}>
      <ContractsList />
    </Panel>
  );
};

export default Contracts;
