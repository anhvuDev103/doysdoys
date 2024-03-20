import { Panel } from '@components/Panel';
import { Column, Row } from '@components/primitives';
import { Avatar, Button, Typography } from '@mui/material';

const Connection = () => {
  return (
    <Panel label='Network' action={<Button size='small'>Disconnect</Button>}>
      <Row
        sx={{
          gap: 4,
        }}
      >
        <Avatar
          alt='network'
          src='https://s3.coinmarketcap.com/static/img/portraits/62d51d9af192d82df8ff3a83.png'
          sx={{
            width: 64,
            height: 64,
          }}
        />
        <Column sx={{ gap: 1 }}>
          <Typography variant='body' color='text.secondary'>
            Account
          </Typography>
          <Typography variant='title1Bold'>0x7FF6...E074</Typography>
        </Column>
      </Row>
    </Panel>
  );
};

export default Connection;
