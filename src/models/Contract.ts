import { NetworkId } from '@utils/types';
import { Interface, InterfaceAbi } from 'ethers';

export type ContractType = {
  address: string;
  abi: string;
  name: string;
  networkId: NetworkId;
};

class Contract {
  address: string;
  abi: Interface | InterfaceAbi;
  name: string;
  id: string;
  networkId: NetworkId;

  constructor(contract: ContractType) {
    this.address = contract.address;
    this.abi = new Interface(contract.abi);
    this.name = contract.name;
    this.id = `${contract.name}:${contract.networkId}:${contract.address}`;
    this.networkId = contract.networkId;
  }
}

export default Contract;
