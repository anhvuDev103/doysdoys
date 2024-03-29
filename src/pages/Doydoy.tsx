import { Column } from '@components/primitives';
import { LAST_CONNECTED_NETWORK_ID_KEY } from '@constants/localStorage';
import MainLayout from '@layouts/MainLayout';
import Connection from '@modules/doydoy/connection/Connection';
import Contracts from '@modules/doydoy/contracts/Contracts';
import Functions from '@modules/doydoy/functions/Functions';
import InputOutput from '@modules/doydoy/inputOutput/InputOutput';
import { Box } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { setLocalStorage } from '@utils/localStorage';
import { Network, NetworkId } from '@utils/types';
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

      setLocalStorage<NetworkId>(LAST_CONNECTED_NETWORK_ID_KEY, chainId);
      setNetwork(network);
    }
  }, [chainId, setAccount, setNetwork, walletAccount]);

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      const networkChangedListener = (networkIdHex: string) => {
        const networkId = Number(networkIdHex);

        const network: Network = {
          id: networkId,
          name: getNetworkName(networkId),
        };
        setNetwork(network);
      };

      ethereum.on('chainChanged', networkChangedListener);

      return () => {
        ethereum.removeListener('chainChanged', networkChangedListener);
      };
    }
  }, [setNetwork]);

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
