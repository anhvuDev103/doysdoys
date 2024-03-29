import { BasicInput } from '@components/Input';
import BasicModal from '@components/Modal/BasicModal';
import { Column, Row } from '@components/primitives';
import NetworkDrawer from '@components/primitives/NetworkDrawer';
import { LAST_CONNECTED_NETWORK_ID_KEY } from '@constants/localStorage';
import Contract, { ContractType } from '@models/Contract';
import { Button, PaperProps, Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { generateName } from '@utils/common';
import { getLocalStorage } from '@utils/localStorage';
import { BlurEvent, InputEvent, NetworkId, NetworkInfo } from '@utils/types';
import { getNetwork } from '@utils/wallet/chains';
import { isAddress } from 'ethers/lib/utils';
import { FC, useEffect, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

type AddContractError = {
  [key in keyof ContractType]: string | null;
};

interface Props extends PaperProps {
  dismiss?: () => void;
}

const AddContract: FC<Props> = ({ ...props }) => {
  const [network, addContract, setSelectedContract] = useRootStore(
    useShallow((store) => [
      store.network,
      store.addContract,
      store.setSelectedContract,
    ]),
  );

  const [addContractForm, setAddContractForm] = useState<ContractType>({
    address: '',
    abi: '',
    name: generateName(),
    networkId: 0,
  });
  const [addContractError, setAddContractError] = useState<AddContractError>({
    address: null,
    abi: null,
    name: null,
    networkId: null,
  });

  useEffect(() => {
    //use current networkId by default value
    if (network) {
      setAddContractForm((prev) => ({ ...prev, networkId: network.id }));
    }
  }, [network]);

  const handleChangeInput = (event: InputEvent) => {
    const { name, value } = event.target;

    setAddContractForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlurInput = (event: BlurEvent) => {
    const { name, value } = event.target;

    const error: AddContractError = {
      address: getAddressError(value),
      abi: getAbiError(value),
      name: getBaseInputError(value),
      networkId: null,
    };

    setAddContractError((prev) => ({
      ...prev,
      [name]: error[name as keyof AddContractError],
    }));
  };

  const handleAddContract = () => {
    const error: AddContractError = {
      address: getAddressError(addContractForm['address']),
      abi: getAbiError(addContractForm['abi'] as string),
      name: getBaseInputError(addContractForm['name']),
      networkId: null,
    };

    const isValidForm = Object.values(error).filter(Boolean).length === 0;

    if (!isValidForm) {
      setAddContractError(error);
      return;
    }

    //Add Contract
    const contract = new Contract(addContractForm);
    addContract(contract);
    setSelectedContract(contract);
    props.dismiss!();
  };

  function getBaseInputError(value?: string) {
    if (!value) return 'Empty input!';
    return null;
  }

  function getAddressError(value?: string) {
    const baseError = getBaseInputError(value);
    if (baseError) return baseError;
    if (!isAddress(value!)) return 'Invalid address';
    return null;
  }

  function getAbiError(value?: string) {
    const baseError = getBaseInputError(value);
    if (baseError) return baseError;

    try {
      const parsed = JSON.parse(value!);

      if (!Array.isArray(parsed)) return 'Invalid ABI';
      return null;
    } catch (error) {
      return 'Invalid ABI';
    }
  }

  const getInputProps = (name: keyof ContractType) => ({
    onChange: handleChangeInput,
    onBlur: handleBlurInput,
    errorText: addContractError[name],
    value: addContractForm[name],
  });

  const handleChangeNetwork = (newNetwork: NetworkInfo) => {
    setAddContractForm((prev) => ({
      ...prev,
      networkId: newNetwork.id,
    }));
  };

  let selectedNetwork = getNetwork(addContractForm.networkId);
  if (!selectedNetwork) {
    const lastConnectedNetworkId = getLocalStorage<NetworkId>(
      LAST_CONNECTED_NETWORK_ID_KEY,
    );

    selectedNetwork = getNetwork(lastConnectedNetworkId);
  }

  const isValidForm =
    Object.values(addContractError).filter(Boolean).length === 0;

  return (
    <BasicModal label='Add Contract' {...props}>
      <BasicModal.Body>
        <NetworkDrawer
          network={selectedNetwork}
          setNetwork={handleChangeNetwork}
        >
          <Button
            variant='green'
            size='small'
            sx={{
              borderRadius: 50,
            }}
          >
            <Typography variant='title2Bold' color='common.white'>
              {selectedNetwork?.name}
            </Typography>
          </Button>
        </NetworkDrawer>
        <Column
          sx={{
            gap: 4,
          }}
        >
          <BasicInput
            name='address'
            label='Contract Address'
            autoFocus
            {...getInputProps('address')}
          />
          <BasicInput
            name='abi'
            multiline
            label='Contract ABI'
            rows={5}
            {...getInputProps('abi')}
          />
          <Row
            sx={{
              gap: 6,
            }}
          >
            <BasicInput
              name='name'
              label='Name'
              containerProps={{
                sx: {
                  flex: 1,
                },
              }}
              {...getInputProps('name')}
            />
          </Row>
        </Column>
      </BasicModal.Body>
      <BasicModal.Action>
        <Button
          variant='yellow'
          fullWidth
          disabled={!isValidForm}
          onClick={handleAddContract}
        >
          Add Contract
        </Button>
      </BasicModal.Action>
    </BasicModal>
  );
};

export default AddContract;
