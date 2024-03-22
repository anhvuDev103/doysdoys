import { ArchiveIcon } from '@components/icons';
import { Panel } from '@components/Panel';
import { Row } from '@components/primitives';
import { Button, Input } from '@mui/material';

import FunctionsList from './FunctionsList';

const Functions = () => {
  return (
    <Panel label='Functions' sx={{ paddingTop: 6 }}>
      <Row sx={{ gap: 2, mb: 4 }}>
        <Input size='small' placeholder='Search by name' />
        <Button size='squared' variant='green'>
          <ArchiveIcon />
        </Button>
      </Row>
      <FunctionsList />
    </Panel>
  );
};

export default Functions;
