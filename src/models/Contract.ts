import { NetworkId } from '@utils/types';
import { Interface } from 'ethers';

export type ContractType = {
  address: string;
  _abi?: string; //stringify ABI from local storage
  abi: string;
  name: string;
  _id?: string;
  networkId: NetworkId;
};

class Contract {
  address: string;
  _abi: string; //stringify ABI
  abi: Interface;
  name: string;
  id: string;
  networkId: NetworkId;

  constructor(contract: ContractType) {
    this._abi = contract.abi;
    this.address = contract.address;
    this.abi = new Interface(contract._abi || contract.abi); //always be string
    this.name = contract.name;
    this.id = `${contract.name}:${contract.networkId}:${contract.address}`;
    this.networkId = contract.networkId;
  }
}

export default Contract;
