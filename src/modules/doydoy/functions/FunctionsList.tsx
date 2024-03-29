import { Item, List } from '@components/List';
import { Checkbox, styled, Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { FunctionFragment } from 'ethers/lib/utils';
import { FC, useState } from 'react';
import { useShallow } from 'zustand/react/shallow';

import NoFunctionItem from './NoFunctionItem';

interface Props {}

const FunctionItem = styled(Item)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  padding: '12px 20px',

  '&.inView': {
    backgroundColor: theme.palette.common.purple,
    backgroundImage: `radial-gradient(white 1px, transparent 0)`,
    backgroundSize: '18px 18px',
    backgroundPosition: '-19px -19px',

    '& .Function-name': {
      backgroundColor: theme.palette.common.purple,
    },
  },
}));

const FunctionsList: FC<Props> = () => {
  const [interactedFns, setInteractedFns] = useState<FunctionFragment[]>([]);

  const { selectedContract, fnInView, setFnInView } = useRootStore(
    useShallow((store) => ({
      selectedContract: store.selectedContract,
      fnInView: store.fnInView,
      setFnInView: store.setFnInView,
    })),
  );

  const functions = selectedContract
    ? Object.values(selectedContract?.abi.functions)
    : [];

  const onSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const interactedFn = functions.find((fn) => fn.name === name);

    if (interactedFn) {
      if (checked) {
        setInteractedFns((prev) => [...prev, interactedFn]);
      } else {
        setInteractedFns((prev) =>
          prev.filter((p) => interactedFn.name !== p.name),
        );
      }
    }
  };

  const handleSelectToView = (SelectedFunctionName: string) => () => {
    const functionSelected = functions.find(
      (func) => func.name === SelectedFunctionName,
    );

    setFnInView(functionSelected);
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
      {functions.map((fn) => {
        const inViewClassName =
          fnInView && fnInView.name === fn.name ? 'inView' : '';
        const isInteracted = !!interactedFns.find(
          (_fn) => _fn.name === fn.name,
        );

        return (
          <FunctionItem
            key={fn.name}
            className={inViewClassName}
            onClick={handleSelectToView(fn.name)}
          >
            <Checkbox
              checked={isInteracted}
              name={fn.name}
              onChange={onSelect}
            />
            <Typography variant='title1' className='Function-name'>
              {fn.name}
            </Typography>
          </FunctionItem>
        );
      })}
    </List>
  );
};

export default FunctionsList;
