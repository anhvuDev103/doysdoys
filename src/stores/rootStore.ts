import { create } from 'zustand';

import { ContractsSlice, createContractsSlice } from './contractsSlice';
import { createWalletSlice, WalletSlice } from './walletSlice';

export type RootStore = WalletSlice & ContractsSlice;

const useRootStore = create<RootStore>()((...args) => ({
  ...createWalletSlice(...args),
  ...createContractsSlice(...args),
}));

export default useRootStore;
