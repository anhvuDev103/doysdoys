import { BasicInput } from '@components/Input';
import { BasicSelectProps } from '@components/Input/BasicSelect';
import useDebounce from '@hooks/useDebounce';
import { Select, styled, Typography } from '@mui/material';
import { shortenString } from '@utils/common';
import { NetworkInfo } from '@utils/types';
import { CHAINS } from '@utils/wallet/chains';
import React, { FC, useMemo, useRef, useState } from 'react';

import { Column } from '.';
import Row from './Row';

type Props = {
  handleSelect: (network: NetworkInfo) => void;
} & BasicSelectProps;

const NetworkItem = styled(Row)(({ theme }) => ({
  padding: '12px',
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.common.black,
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NetworkSelect: FC<Props> = ({ handleSelect, ...props }) => {
  const searchInputRef = useRef<HTMLInputElement>();
  const [selectKey, setSelectKey] = useState(0);

  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce<string>(search);

  const networks = useMemo<NetworkInfo[]>(() => {
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

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <Column>
      <Row>
        <Typography mb={1}>Network</Typography>
        {/* {errorText && (
          <Typography variant='body' color='common.red'>
            {errorText}
          </Typography>
        )} */}
      </Row>
      <Select
        key={selectKey}
        name='network'
        onOpen={onOpenSelect}
        MenuProps={{
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
          MenuListProps: {
            subheader: (
              <Column
                sx={{
                  overflowY: 'hidden',
                }}
              >
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
                  containerProps={{
                    sx: {
                      p: 3,
                      borderBottom: '1px solid',
                      borderBottomColor: 'common.black',
                    },
                  }}
                />
                <Column
                  sx={{
                    overflowY: 'auto',
                  }}
                >
                  {networks.map((network) => (
                    <NetworkItem
                      key={network.id}
                      onClick={() => {
                        handleSelect(network);
                        setSelectKey((prevKey) => prevKey + 1);
                      }}
                    >
                      <Typography>{shortenString(network.name)}</Typography>{' '}
                      <Typography>{network.id}</Typography>
                    </NetworkItem>
                  ))}
                </Column>
              </Column>
            ),
            sx: {
              display: 'flex',
            },
          },
          PaperProps: {
            sx: {
              '&.MuiMenu-paper': {
                overflowY: 'hidden',
                display: 'flex',
              },
            },
          },
        }}
        containerProps={{
          sx: {
            flex: 1,
          },
        }}
        {...props}
      />
    </Column>
  );
};

export default NetworkSelect;
