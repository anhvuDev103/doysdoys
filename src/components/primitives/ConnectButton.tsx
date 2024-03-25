import { Button, ButtonProps } from '@mui/material';
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
} from '@utils/wallet/connections';
import { useWeb3React } from '@web3-react/core';
import { FC, useState } from 'react';

interface Props extends ButtonProps {}

const ConnectButton: FC<Props> = ({ ...props }) => {
  const [isActivating, setIsActivating] = useState(false);
  const { isActive } = useWeb3React();

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

  const buttonLabel = () => {
    if (isActive) return 'Connected';
    if (isActive) return 'Connecting...';
    return 'Connect Wallet';
  };

  return (
    <Button
      variant='yellow'
      onClick={activate}
      disabled={isActivating || isActive}
      {...props}
      sx={{
        ...props.sx,
      }}
    >
      {buttonLabel()}
    </Button>
  );
};

export default ConnectButton;
