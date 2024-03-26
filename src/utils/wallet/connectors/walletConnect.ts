import { NETWORK_ID_KEY } from '@constants/localStorage';
import { getLocalStorage } from '@utils/localStorage';
import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect-v2';

import { MAINNET_NETWORK_ID } from '../chains';
import { Connection, ConnectionType, onConnectionError } from '../connections';

export function buildWalletConnectConnector() {
  const networkId = getLocalStorage(NETWORK_ID_KEY) || MAINNET_NETWORK_ID;

  const [web3WalletConnect, web3WalletConnectHooks] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            projectId: 'a4b016caa6b2c6032ce9226b04ab4c6b',
            chains: [networkId],
            optionalChains: [250],
            showQrModal: true,
          },
          onError: onConnectionError,
        }),
    );
  const walletConnectConnection: Connection = {
    connector: web3WalletConnect,
    hooks: web3WalletConnectHooks,
    type: ConnectionType.WALLET_CONNECT,
  };
  return walletConnectConnection;
}
