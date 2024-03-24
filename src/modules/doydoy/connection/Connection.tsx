import { PowerIcon } from '@components/icons';
import { Panel } from '@components/Panel';
import { Column, ConnectButton, Row } from '@components/primitives';
import { Avatar, Button, styled, Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { shortenAddress } from '@utils/common';
import {
  ConnectionType,
  getConnection,
  tryDeactivateConnector,
} from '@utils/wallet/connections';

const Network = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  position: 'relative',
  overflow: 'visible',
  border: '1px solid',
  borderColor: theme.palette.common.black,

  '&::after': {
    content: '""',
    width: 20,
    height: 20,
    backgroundColor: theme.palette.common.gray,
    borderRadius: 50,
    border: '1px solid',
    borderColor: theme.palette.common.black,
    boxShadow: `${theme.palette.common.white} 0 0 0 1px`,

    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  '&.actived': {
    '&::after': {
      backgroundColor: theme.palette.common.green,
    },
  },
}));

const Connection = () => {
  const account = useRootStore((store) => store.account);

  const deactivate = async () => {
    try {
      await tryDeactivateConnector(
        getConnection(ConnectionType.INJECTED).connector,
      );
    } catch (error) {
      console.error('>> Check | deactivate | error:', error);
      //FIX ME
    }
  };

  return (
    <Panel label='Network'>
      <Row>
        <Row
          sx={{
            gap: 4,
          }}
        >
          <Network
            className={account && 'actived'}
            alt='network'
            src='https://s3.coinmarketcap.com/static/img/portraits/62d51d9af192d82df8ff3a83.png'
          />
          <Column sx={{ gap: 1 }}>
            <Typography variant='title2' color='text.secondary'>
              Account
            </Typography>
            <Typography variant='title1'>
              {shortenAddress(account, 'No account')}
            </Typography>
          </Column>
        </Row>
        {account && (
          <Button variant='red' size='squared' onClick={deactivate}>
            <PowerIcon fontSize='small' />
          </Button>
        )}
      </Row>
      {!account && (
        <ConnectButton
          fullWidth
          sx={{
            mt: 6,
          }}
        />
      )}
    </Panel>
  );
};

export default Connection;
