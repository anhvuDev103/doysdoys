import { Column } from '@components/primitives';
import MainLayout from '@layouts/MainLayout';
import Connection from '@modules/doydoy/connection/Connection';
import Contracts from '@modules/doydoy/contracts/Contracts';
import Functions from '@modules/doydoy/functions/Functions';
import InputOutput from '@modules/doydoy/inputOutput/InputOutput';
import { Box } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { Network } from '@utils/types';
import { getNetworkName } from '@utils/wallet/chains';
import { useWeb3React } from '@web3-react/core';
import { FC, useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';

interface Props {}

const Doydoy: FC<Props> = () => {
  const { account: walletAccount, chainId } = useWeb3React();
  const [setAccount, setNetwork] = useRootStore(
    useShallow((store) => [store.setAccount, store.setNetwork]),
  );

  useEffect(() => {
    setAccount(walletAccount?.toLowerCase());
    if (chainId) {
      const network: Network = {
        id: chainId,
        name: getNetworkName(chainId),
      };

      setNetwork(network);
    }
  }, [chainId, setAccount, setNetwork, walletAccount]);

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
