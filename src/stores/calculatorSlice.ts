import { FunctionFragment } from 'ethers/lib/utils';
import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export type FnWithParams = {
  info: FunctionFragment;
  params: any;
};

export interface CalculatorSlice {
  interactedFns: FnWithParams[] | [];
  setInteractedFns: (FnWithParam: FnWithParams) => void;
  fnInView: FunctionFragment | undefined;
  setFnInView: (fn: FunctionFragment) => void;
}

export const createCalculatorSlice: StateCreator<
  RootStore,
  [],
  [],
  CalculatorSlice
> = (set) => ({
  interactedFns: [],
  setInteractedFns: (_fnWithParam) =>
    set({
      // interactedFns: fnWithParam,
    }),
  fnInView: undefined,
  setFnInView: (fn) =>
    set({
      fnInView: fn,
    }),
});
