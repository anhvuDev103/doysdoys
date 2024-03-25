import { CHAIN_ID_KEY } from '@constants/localStorage';
import { getLocalStorage } from '@utils/localStorage';
import { CoinbaseWallet } from '@web3-react/coinbase-wallet';
import { initializeConnector } from '@web3-react/core';

import { getRpcUrl, MAINNET_CHAIN_ID } from '../chains';
import { Connection, ConnectionType, onConnectionError } from '../connections';

export function buildCoinbaseWalletConnector() {
  const chainId = getLocalStorage(CHAIN_ID_KEY) || MAINNET_CHAIN_ID;

  const [web3CoinbaseWallet, web3CoinbaseWalletHooks] =
    initializeConnector<CoinbaseWallet>(
      (actions) =>
        new CoinbaseWallet({
          actions,
          options: {
            url: getRpcUrl(chainId),
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
