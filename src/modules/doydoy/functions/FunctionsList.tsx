import { Item, List } from '@components/List';
import { Checkbox, styled, Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { FunctionFragment } from 'ethers';
import { FC, useState } from 'react';

import NoFunctionItem from './NoFunctionItem';

interface Props {}

const FunctionItem = styled(Item)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: '12px 20px',
}));

const FunctionsList: FC<Props> = () => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const selectedContract = useRootStore((store) => store.selectedContract);

  const functions = [] as FunctionFragment[];
  selectedContract?.abi.forEachFunction(
    (func) => func.constant && functions.push(func),
  );

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (checked) {
      setSelectedNames((prev) => [...prev, name]);
    } else {
      setSelectedNames((prev) => prev.filter((p) => p !== name));
    }
  };

  if (functions.length === 0) {
    return <NoFunctionItem />;
  }

  return (
    <List
      sx={{
        boxShadow: 1,
      }}
    >
      {functions.map((func) => (
        <FunctionItem key={func.name}>
          <Checkbox
            checked={selectedNames.includes(func.name)}
            name={func.name}
            onChange={onSelect}
          />
          <Typography variant='title1'>{func.name}</Typography>
        </FunctionItem>
      ))}
    </List>
  );
};

export default FunctionsList;
