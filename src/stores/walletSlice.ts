import { StateCreator } from 'zustand';

export interface WalletSlice {
  account: null;
  activate: () => void;
  deactivate: () => void;
}

export const createWalletSlice: StateCreator<WalletSlice> = (_set) => ({
  account: null,
  activate: () => {},
  deactivate: () => {},
});
