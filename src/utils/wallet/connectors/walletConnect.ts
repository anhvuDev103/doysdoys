import { LAST_CONNECTED_NETWORK_ID_KEY } from '@constants/localStorage';
import { getLocalStorage } from '@utils/localStorage';
import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect-v2';

import { MAINNET_NETWORK_ID } from '../chains';
import { Connection, ConnectionType, onConnectionError } from '../connections';

export function buildWalletConnectConnector() {
  const networkId =
    getLocalStorage<number>(LAST_CONNECTED_NETWORK_ID_KEY) ||
    MAINNET_NETWORK_ID;

  const [web3WalletConnect, web3WalletConnectHooks] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            projectId: 'ef0a23043819a793a6b132d96d6825ec',
            chains: [networkId],
            optionalChains: [250, 10],
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
