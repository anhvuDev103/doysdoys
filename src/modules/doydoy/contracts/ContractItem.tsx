import { Item, ItemProps } from '@components/List';
import { Column, Row } from '@components/primitives';
import Contract from '@models/Contract';
import { Close as CloseIcon } from '@mui/icons-material';
import { Button, styled, Typography } from '@mui/material';
import { getNetworkName } from '@utils/wallet/chains';
import { FC } from 'react';

interface Props extends ItemProps {
  contract: Contract;
  onRemove: (id: string) => void;
}

const StyledContractItem = styled(Item)(({ theme }) => ({
  '&.selected': {
    backgroundColor: theme.palette.common.purple,
    backgroundImage: `radial-gradient(white 1px, transparent 0)`,
    backgroundSize: '20px 20px',
    backgroundPosition: '-19px -19px',

    '&:hover': {
      '& .Contract-selected-icon': {
        opacity: 0,
      },
    },

    '& .Contract-name, .Contract-network': {
      backgroundColor: theme.palette.common.purple,
    },

    '& .Contract-selected-icon': {
      opacity: 1,
    },
  },

  '& .Contract-selected-icon': {
    width: 36,
    pointerEvents: 'none',
    position: 'absolute',
    right: 20,
    opacity: 0,
    transition: '400ms',
  },

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
        <Column sx={{ gap: 1, alignItems: 'flex-start' }}>
          <Typography
            variant='title2Bold'
            component='div'
            className='Contract-name'
          >
            {contract.name}
          </Typography>
          <Typography variant='body' className='Contract-network'>
            {getNetworkName(contract.networkId)}
          </Typography>
        </Column>
        <img src='/images/eyes.svg' className='Contract-selected-icon' />
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
