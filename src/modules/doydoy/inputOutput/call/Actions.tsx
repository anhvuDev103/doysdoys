import { DuplicateIcon, PlayIcon } from '@components/icons';
import { Column } from '@components/primitives';
import { Button } from '@mui/material';

const Actions = () => {
  return (
    <Column sx={{ gap: 3 }}>
      <Button size='squared' variant='green'>
        <PlayIcon />
      </Button>
      <Button size='squared'>
        <DuplicateIcon />
      </Button>
    </Column>
  );
};

export default Actions;
