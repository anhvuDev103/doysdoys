import { Interface, InterfaceAbi } from 'ethers';

export type ContractType = {
  address: string;
  abi: string;
  name: string;
};

class Contract {
  address: string;
  abi: Interface | InterfaceAbi;
  name: string;
  id: string;

  constructor(contract: ContractType) {
    this.address = contract.address;
    this.abi = new Interface(contract.abi);
    this.name = contract.name;
    this.id = `${contract.name}:${contract.address}`;
  }
}

export default Contract;
