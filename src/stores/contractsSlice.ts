import { CONTRACTS_KEY } from '@constants/localStorage';
import Contract, { ContractType } from '@models/Contract';
import { getLocalStorage, setLocalStorage } from '@utils/localStorage';
import { StateCreator } from 'zustand';

import { RootStore } from './rootStore';

export interface ContractsSlice {
  contracts: Contract[];
  addContract: (contract: Contract) => void;
  removeContract: (id: string) => void;
  clearContracts: () => void;

  selectedContract: Contract | null;
  setSelectedContract: (contract: Contract) => void;
}

export const createContractsSlice: StateCreator<
  RootStore,
  [],
  [],
  ContractsSlice
> = (set, get) => {
  const contractsStorage = getLocalStorage<ContractType[]>(CONTRACTS_KEY, []);

  const contractInstances = contractsStorage.map(
    (contract) => new Contract(contract),
  );

  return {
    contracts: contractInstances || [],
    addContract: (contract: Contract) => {
      set((state) => ({ contracts: [contract, ...state.contracts] }));
      setLocalStorage<Contract[]>(CONTRACTS_KEY, get().contracts);
    },
    removeContract: (id: string) => {
      set((state) => ({
        contracts: state.contracts.filter((contract) => contract.id !== id),
      }));
    },
    clearContracts: () => {
      set({
        contracts: [],
      });
    },

    selectedContract: null,
    setSelectedContract: (contract: Contract) => {
      set({
        selectedContract: contract,
      });
    },
  };
};
