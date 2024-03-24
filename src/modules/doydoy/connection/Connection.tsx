import { PowerIcon } from '@components/icons';
import { Panel } from '@components/Panel';
import { Column, Row } from '@components/primitives';
import { Avatar, Button, styled, Typography } from '@mui/material';
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
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
    backgroundColor: theme.palette.common.green,
    borderRadius: 50,
    border: '1px solid',
    borderColor: theme.palette.common.black,
    boxShadow: `${theme.palette.common.white} 0 0 0 1px`,

    position: 'absolute',
    right: 0,
    bottom: 0,
  },
}));

const Connection = () => {
  const activation = async () => {
    try {
      await tryActivateConnector(
        getConnection(ConnectionType.INJECTED).connector,
      );
    } catch (error) {
      //FIX ME
    }
  };

  const deactivation = async () => {
    try {
      await tryDeactivateConnector(
        getConnection(ConnectionType.INJECTED).connector,
      );
    } catch (error) {
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
            alt='network'
            src='https://s3.coinmarketcap.com/static/img/portraits/62d51d9af192d82df8ff3a83.png'
          />
          <Column sx={{ gap: 1 }}>
            <Typography variant='title2' color='text.secondary'>
              Account
            </Typography>
            <Typography variant='title1'>0x7FF6...E074</Typography>
          </Column>
        </Row>
        <Button variant='red' size='squared' onClick={deactivation}>
          <PowerIcon fontSize='small' />
        </Button>
      </Row>
      <Button onClick={activation}>Connect</Button>
    </Panel>
  );
};

export default Connection;
