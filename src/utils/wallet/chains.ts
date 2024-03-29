import { NetworkId, NetworkInfo, NetworkInfoMap } from '@utils/types';
import * as chains from '@wagmi/chains';

export const MAINNET_NETWORK_ID = 1;

export const CHAINS = {} as NetworkInfoMap;

Object.values(chains).forEach((chain: chains.Chain) => {
  const rpcUrlsArray = [
    ...new Set([
      ...Object.values(chain.rpcUrls.public.http),
      ...Object.values(chain.rpcUrls.default.http),
    ]),
  ];

  const blockExplorersArray = [chain.blockExplorers?.default.url || ''];

  CHAINS[chain.id] = {
    ...chain,
    rpcUrlsArray,
    blockExplorersArray,
    nativeCurrency: {
      ...chain.nativeCurrency,
      decimals: 18,
    },
  };
});

export const getRpcUrl = (networkId: NetworkId) => {
  return CHAINS[networkId].rpcUrlsArray?.[0] || '';
};

export const getNetworkName = (networkId: NetworkId) => {
  return CHAINS[networkId]?.name;
};

export const getNetwork = (networkId: NetworkId): NetworkInfo | undefined => {
  return CHAINS[networkId];
};
