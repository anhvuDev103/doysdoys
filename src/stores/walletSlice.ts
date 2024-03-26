import { ConnectionType } from '@utils/wallet/connections';
import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export interface WalletSlice {
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
  connectionType: ConnectionType | undefined;
  setConnectionType: (connectionType: ConnectionType) => void;
}

export const createWalletSlice: StateCreator<RootStore, [], [], WalletSlice> = (
  set,
) => ({
  account: undefined,
  connectionType: undefined,
  setAccount: (account: string | undefined) => {
    set({ account });
  },
  setConnectionType: (connectionType: ConnectionType) =>
    set({ connectionType }),
});
