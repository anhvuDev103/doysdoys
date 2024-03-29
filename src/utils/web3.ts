import { Web3Provider } from '@ethersproject/providers';
import { ContractInterface, ethers } from 'ethers';

type Arguments = [
  key: string,
  address: string,
  method: string,
  ...params: unknown[],
];

export const contractFetcher =
  (library: Web3Provider | undefined, abi: ContractInterface) =>
  (args: Arguments) => {
    if (!library) return;

    const [key, address, method, ...params] = args;

    try {
      const contract = new ethers.Contract(address, abi, library);
      return contract[method](...params);
    } catch (error) {
      console.error(key, error);
    }
  };

export const keyFactory = (prefix: string, dependencies: unknown[]) => {
  return `${prefix}:${dependencies.join(':')}`;
};
