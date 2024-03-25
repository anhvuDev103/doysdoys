import { CHAIN_ID_KEY } from '@constants/localStorage';
import { getLocalStorage } from '@utils/localStorage';
import { initializeConnector } from '@web3-react/core';
import { WalletConnect } from '@web3-react/walletconnect';

import { getRpcUrl, MAINNET_CHAIN_ID } from '../chains';
import { Connection, ConnectionType, onConnectionError } from '../connections';

export function buildWalletConnectConnector() {
  const chainId = getLocalStorage(CHAIN_ID_KEY) || MAINNET_CHAIN_ID;

  const [web3WalletConnect, web3WalletConnectHooks] =
    initializeConnector<WalletConnect>(
      (actions) =>
        new WalletConnect({
          actions,
          options: {
            rpc: getRpcUrl(chainId),
            qrcode: true,
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
