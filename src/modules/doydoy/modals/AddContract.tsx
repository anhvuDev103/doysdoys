import BasicInput from '@components/Input/BasicInput';
import BasicModal from '@components/Modal/BasicModal';
import { Column } from '@components/primitives';
import Contract, { ContractType } from '@models/Contract';
import { Button, PaperProps } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { generateName } from '@utils/common';
import { BlurEvent, InputEvent } from '@utils/types';
import { isAddress } from 'ethers';
import { FC, useState } from 'react';

type AddContractError = {
  [key in keyof ContractType]: string | null;
};

interface Props extends PaperProps {
  dismiss?: () => void;
}

const AddContract: FC<Props> = ({ ...props }) => {
  const [addContractForm, setAddContractForm] = useState<ContractType>({
    address: '',
    abi: '',
    name: generateName(),
  });
  const [addContractError, setAddContractError] = useState<AddContractError>({
    address: null,
    abi: null,
    name: null,
  });

  const addContract = useRootStore((store) => store.addContract);

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
    };

    const isValidForm = Object.values(error).filter(Boolean).length === 0;

    if (!isValidForm) {
      setAddContractError(error);
      return;
    }

    //Add Contract
    addContract(new Contract(addContractForm));
    props.dismiss!();
  };

  function getBaseInputError(value?: string) {
    if (!value) return 'Empty input!';
    return null;
  }

  function getAddressError(value?: string) {
    const baseError = getBaseInputError(value);
    if (baseError) return baseError;
    if (!isAddress(value)) return 'Invalid address';
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

  const isValidForm =
    Object.values(addContractError).filter(Boolean).length === 0;

  return (
    <BasicModal label='Add Contract' {...props}>
      <BasicModal.Body>
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
          <BasicInput name='name' label='Name' {...getInputProps('name')} />
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
