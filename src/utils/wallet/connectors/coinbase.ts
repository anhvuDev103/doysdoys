import { NETWORK_ID_KEY } from '@constants/localStorage';
import { getLocalStorage } from '@utils/localStorage';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { initializeConnector } from '@web3-react/core';

import { getRpcUrl, MAINNET_NETWORK_ID } from '../chains';
import { Connection, ConnectionType, onConnectionError } from '../connections';

export function buildCoinbaseWalletConnector() {
  const networkId = getLocalStorage(NETWORK_ID_KEY) || MAINNET_NETWORK_ID;

  const [web3CoinbaseWallet, web3CoinbaseWalletHooks] =
    initializeConnector<CoinbaseWallet>(
      (actions) =>
        new CoinbaseWallet({
          actions,
          options: {
            url: getRpcUrl(networkId),
            appName: 'Uniswap Example',
            reloadOnDisconnect: false,
          },
          onError: onConnectionError,
        }),
    );
  const coinbaseWalletConnection: Connection = {
    connector: web3CoinbaseWallet,
    hooks: web3CoinbaseWalletHooks,
    type: ConnectionType.COINBASE_WALLET,
  };

  return coinbaseWalletConnection;
}
