import { FunctionFragment } from 'ethers';
import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export interface CalculatorSlice {
  fnInView: FunctionFragment | undefined;
  setFnInView: (fn?: FunctionFragment) => void;
}

export const createCalculatorSlice: StateCreator<
  RootStore,
  [],
  [],
  CalculatorSlice
> = (set) => ({
  fnInView: undefined,
  setFnInView: (fn) =>
    set({
      fnInView: fn,
    }),
});
