import { List } from '@components/List';
import { Column } from '@components/primitives';
import { Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import ContractItem from './ContractItem';

interface Props {}

const ContractsList: FC<Props> = () => {
  const { contracts, removeContract, selectedContract, setSelectedContract } =
    useRootStore(
      useShallow((store) => ({
        contracts: store.contracts,
        removeContract: store.removeContract,
        selectedContract: store.selectedContract,
        setSelectedContract: store.setSelectedContract,
      })),
    );

  return (
    <List
      sx={{
        border: 'none',
        height: '100%',
        flex: 1,
      }}
    >
      {contracts.length > 0 &&
        contracts.map((contract) => {
          const selectedClassName =
            selectedContract?.id === contract.id ? 'selected' : 'unselected';
          return (
            <ContractItem
              contract={contract}
              key={contract.id}
              onRemove={removeContract}
              onClick={() => setSelectedContract(contract)}
              className={selectedClassName}
            />
          );
        })}
      {contracts.length === 0 && <EmptyContract />}
    </List>
  );
};

const EmptyContract: FC = () => {
  return (
    <Column
      sx={{
        flex: 1,
        p: 5,
        justifyContent: 'center',
      }}
    >
      <Typography variant='h3' textAlign='center'>
        🫥
      </Typography>
      <Typography variant='title1' textAlign='center'>
        No contract
      </Typography>
    </Column>
  );
};

export default ContractsList;
