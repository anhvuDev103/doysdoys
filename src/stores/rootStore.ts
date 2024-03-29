import { create } from 'zustand';

import { CalculatorSlice, createCalculatorSlice } from './calculatorSlice';
import { ContractsSlice, createContractsSlice } from './contractsSlice';
import { createWalletSlice, WalletSlice } from './walletSlice';

export type RootStore = WalletSlice & ContractsSlice & CalculatorSlice;

const useRootStore = create<RootStore>()((...args) => ({
  ...createWalletSlice(...args),
  ...createContractsSlice(...args),
  ...createCalculatorSlice(...args),
}));

export default useRootStore;
