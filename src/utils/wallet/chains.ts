import { NetworkId } from '@utils/types';
import * as chains from '@wagmi/chains';

export const MAINNET_NETWORK_ID = 1;

export const CHAINS = {} as {
  [id: number]: chains.Chain & {
    rpcUrlsArray: string[];
    blockExplorersArray: string[];

    //overrides
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: 18;
    };
  };
};

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

export const getNetwork = (networkId: NetworkId) => {
  return CHAINS[networkId] || undefined;
};
