import { Item, List } from '@components/List';
import { Checkbox, styled, Typography } from '@mui/material';
import useRootStore from '@stores/rootStore';
import { FC } from 'react';
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
  const {
    selectedContract,
    interactedFns,
    // setInteractedFns,
    fnInView,
    setFnInView,
  } = useRootStore(
    useShallow((store) => ({
      selectedContract: store.selectedContract,
      interactedFns: store.interactedFns,
      setInteractedFns: store.setInteractedFns,
      fnInView: store.fnInView,
      setFnInView: store.setFnInView,
    })),
  );

  const functions = selectedContract
    ? Object.values(selectedContract?.abi.functions)
    : [];

  const onInteract = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name: _name, checked: _a } = event.target;

    // const interactedFn = functions.find((fn) => fn.name === name);

    //TO DO
    // setInteractedFns()
  };

  const handleSelectToView = (SelectedFunctionName: string) => () => {
    const functionSelected = functions.find(
      (func) => func.name === SelectedFunctionName,
    );

    if (functionSelected) {
      setFnInView(functionSelected);
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
      {functions.map((fn) => {
        const inViewClassName =
          fnInView && fnInView.name === fn.name ? 'inView' : '';
        const isInteracted = !!interactedFns.find(
          (_fn) => _fn.info.name === fn.name,
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
              onChange={onInteract}
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
