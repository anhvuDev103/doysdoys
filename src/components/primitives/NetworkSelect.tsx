import { BasicInput, BasicSelect } from '@components/Input';
import { BasicSelectProps } from '@components/Input/BasicSelect';
import useDebounce from '@hooks/useDebounce';
import { ListSubheader, MenuItem, styled, Typography } from '@mui/material';
import { shortenString } from '@utils/common';
import { CHAINS } from '@utils/wallet/chains';
import React, { FC, useCallback, useMemo, useRef, useState } from 'react';

import Row from './Row';

const StyledListSubheader = styled(ListSubheader)(({ theme }) => ({
  paddingTop: '12px',
  paddingBottom: '12px',
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.common.black,
}));

const NetworkSelect: FC<BasicSelectProps> = (props) => {
  const searchInputRef = useRef<HTMLInputElement>();
  const [search, setSearch] = useState('');
  console.log('>> Check | search:', search);

  const debouncedSearch = useDebounce<string>(search);

  const networks = useMemo(() => {
    return Object.values(CHAINS).filter(
      (chain) =>
        chain.name.toLowerCase().includes(debouncedSearch) ||
        String(chain.id).includes(debouncedSearch),
    );
  }, [debouncedSearch]);

  const onOpenSelect = (_event: React.SyntheticEvent<Element, Event>) => {
    requestIdleCallback(() => {
      if (searchInputRef) {
        searchInputRef.current?.focus();
      }
    });
  };

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setSearch(value);
    },
    [],
  );

  return (
    <BasicSelect
      name='network'
      label='Network'
      align='right'
      onOpen={onOpenSelect}
      MenuProps={{
        MenuListProps: {
          subheader: (
            <StyledListSubheader>
              <BasicInput
                size='small'
                autoFocus
                placeholder='Search'
                fullWidth
                inputRef={searchInputRef}
                value={search}
                onChange={handleSearchChange}
                onKeyDown={(e) => {
                  if (e.key !== 'Escape') {
                    e.stopPropagation();
                  }
                }}
              />
            </StyledListSubheader>
          ),
        },
      }}
      containerProps={{
        sx: {
          flex: 1,
        },
      }}
      {...props}
    >
      {networks.map((chain) => (
        <MenuItem key={chain.id} value={chain.id}>
          <Row sx={{ flex: 1 }}>
            <Typography>{shortenString(chain.name)}</Typography>{' '}
            <Typography>{chain.id}</Typography>
          </Row>
        </MenuItem>
      ))}
    </BasicSelect>
  );
};

export default NetworkSelect;
