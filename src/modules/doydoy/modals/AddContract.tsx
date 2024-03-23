import BasicInput from '@components/Input/BasicInput';
import BasicModal from '@components/Modal/BasicModal';
import { Column } from '@components/primitives';
import { Button, PaperProps } from '@mui/material';

const AddContract = (props: PaperProps) => {
  return (
    <BasicModal label='Add Contract' {...props}>
      <BasicModal.Body>
        <Column
          sx={{
            gap: 4,
          }}
        >
          <BasicInput label='Contract Address' />
          <BasicInput multiline label='Contract ABI' rows={5} />
          <BasicInput label='Name' />
        </Column>
      </BasicModal.Body>
      <BasicModal.Action>
        <Button variant='yellow' fullWidth>
          Add Contract
        </Button>
      </BasicModal.Action>
    </BasicModal>
  );
};

export default AddContract;
