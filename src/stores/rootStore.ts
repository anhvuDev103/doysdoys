import { create } from 'zustand';

import { createWalletSlice, WalletSlice } from './walletSlice';

type RootStore = WalletSlice;

const useRootStore = create<RootStore>()((...args) => ({
  ...createWalletSlice(...args),
}));

export default useRootStore;
