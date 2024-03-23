import { Item, List } from '@components/List';
import { Checkbox, styled, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

const FunctionItem = styled(Item)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: '12px 20px',
}));

const FunctionsList: FC<Props> = () => {
  return (
    <List
      sx={{
        boxShadow: 1,
      }}
    >
      {Array(5)
        .fill(null)
        .map((_, k) => (
          <FunctionItem key={k}>
            <Checkbox />
            <Typography variant='title1'>Function A</Typography>
          </FunctionItem>
        ))}
    </List>
  );
};

export default FunctionsList;
