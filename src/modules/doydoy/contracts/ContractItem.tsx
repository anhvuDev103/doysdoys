import { Item, ItemProps } from '@components/List';
import { Column, Row } from '@components/primitives';
import Contract from '@models/Contract';
import { Close as CloseIcon } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface Props extends ItemProps {
  contract: Contract;
  onRemove: (id: string) => void;
}

const StyledContractItem = styled(Item)(() => ({
  '&:hover': {
    '& .Clear-button': {
      opacity: 1,

      '&:hover': {
        opacity: 0.7,
      },
    },
  },
}));

const ContractItem: FC<Props> = ({ contract, onRemove, ...props }) => {
  return (
    <StyledContractItem {...props}>
      <Row>
        <Column sx={{ gap: 1 }}>
          <Typography variant='title2Bold' component='div'>
            {contract.name}
          </Typography>
          <Typography variant='body'>Fantom</Typography>
        </Column>
        <Button
          variant='red'
          size='squared'
          className='Clear-button'
          onClick={() => onRemove(contract.id)}
          sx={{
            opacity: 0,
            transition: '400ms',
          }}
        >
          <CloseIcon />
        </Button>
      </Row>
    </StyledContractItem>
  );
};

export default ContractItem;
