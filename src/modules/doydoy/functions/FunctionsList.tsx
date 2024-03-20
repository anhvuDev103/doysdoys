import { CheckBoxIcon, CheckedBoxIcon } from '@components/icons';
import { Item, List } from '@components/List';
import { Column } from '@components/primitives';
import { Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

const FunctionsList: FC<Props> = () => {
  return (
    <List>
      {Array(5)
        .fill(null)
        .map((i, k) => (
          <Item
            key={k}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 3,
            }}
          >
            <Checkbox />
            <Column>
              <Typography variant='title2Bold' component='div'>
                Function A
              </Typography>
              <Typography variant='body'>Input: 4 | Output: 5</Typography>
            </Column>
          </Item>
        ))}
    </List>
  );
};

export default FunctionsList;
