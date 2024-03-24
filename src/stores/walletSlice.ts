import { StateCreator } from 'zustand';

export interface WalletSlice {
  account: string | undefined;
  setAccount: (account: string | undefined) => void;
}

export const createWalletSlice: StateCreator<WalletSlice> = (set) => ({
  account: undefined,
  setAccount: (account: string | undefined) => {
    set({ account });
  },
});
