import { CONTRACTS_KEY } from '@constants/localStorage';
import Contract from '@models/Contract';
import { getLocalStorage, setLocalStorage } from '@utils/localStorage';
import { StateCreator } from 'zustand';

export interface ContractsSlice {
  contracts: Contract[];
  addContract: (contract: Contract) => void;
  removeContract: (id: string) => void;
  clearContracts: () => void;
}

export const createContractsSlice: StateCreator<ContractsSlice> = (
  set,
  get,
) => ({
  contracts: getLocalStorage(CONTRACTS_KEY) || [],
  addContract: (contract: Contract) => {
    set((state) => ({ contracts: [contract, ...state.contracts] }));
    setLocalStorage(CONTRACTS_KEY, get().contracts);
  },
  removeContract: (id: string) => {
    set((state) => ({
      contracts: state.contracts.filter((contract) => contract.id !== id),
    }));
    setLocalStorage(CONTRACTS_KEY, get().contracts);
  },
  clearContracts: () => {
    set({
      contracts: [],
    });
  },
});
