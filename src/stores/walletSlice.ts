import { Network } from '@utils/types';
import { ConnectionType } from '@utils/wallet/connections';
import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export interface WalletSlice {
  account: string | undefined;
  connectionType: ConnectionType | undefined;
  network: Network | undefined;
  setAccount: (account: string | undefined) => void;
  setConnectionType: (connectionType: ConnectionType) => void;
  setNetwork: (network: Network) => void;
}

export const createWalletSlice: StateCreator<RootStore, [], [], WalletSlice> = (
  set,
) => ({
  account: undefined,
  connectionType: undefined,
  network: undefined,
  setAccount: (account) => set({ account }),
  setConnectionType: (connectionType) => set({ connectionType }),
  setNetwork: (network) => set({ network }),
});
