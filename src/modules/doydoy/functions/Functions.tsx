import { Panel } from '@components/Panel';
import { Row } from '@components/primitives';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Button, Input } from '@mui/material';

import FunctionsList from './FunctionsList';

const Functions = () => {
  return (
    <Panel label='Functions' align='center'>
      <Row sx={{ gap: 2, mb: 4 }}>
        <Input placeholder='Search by name' />
        <Button>
          <FilterListIcon />
        </Button>
      </Row>
      <FunctionsList />
    </Panel>
  );
};

export default Functions;
