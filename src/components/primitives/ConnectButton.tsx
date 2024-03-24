import { Button, ButtonProps } from '@mui/material';
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
} from '@utils/wallet/connections';
import { FC, useState } from 'react';

interface Props extends ButtonProps {}

const ConnectButton: FC<Props> = ({ ...props }) => {
  const [isActivating, setIsActivating] = useState(false);

  const activate = async () => {
    try {
      setIsActivating(true);
      await tryActivateConnector(
        getConnection(ConnectionType.INJECTED).connector,
      );
      setIsActivating(false);
    } catch (error) {
      console.error('>> Check | activate | error:', error);
      //FIX ME
    }
  };

  return (
    <Button
      variant='yellow'
      onClick={activate}
      disabled={isActivating}
      {...props}
      sx={{
        ...props.sx,
      }}
    >
      {isActivating ? 'Connecting...' : 'Connect Wallet'}
    </Button>
  );
};

export default ConnectButton;
