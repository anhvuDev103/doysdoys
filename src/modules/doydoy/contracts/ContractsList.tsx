import { Item, List } from '@components/List';
import { Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

const ContractsList: FC<Props> = () => {
  return (
    <List>
      {Array(5)
        .fill(null)
        .map((i, k) => (
          <Item key={k}>
            <Typography variant='title2Bold' component='div'>
              Contract A
            </Typography>
            <Typography variant='body'>Fantom</Typography>
          </Item>
        ))}
    </List>
  );
};

export default ContractsList;
