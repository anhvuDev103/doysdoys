import { BasicInput } from '@components/Input';
import { Item, List } from '@components/List';
import useDebounce from '@hooks/useDebounce';
import {
  Box,
  Button,
  Drawer,
  DrawerProps,
  ListSubheader,
  styled,
  Switch,
  Typography,
} from '@mui/material';
import { NetworkId, NetworkInfo } from '@utils/types';
import { CHAINS, getNetwork } from '@utils/wallet/chains';
import {
  cloneElement,
  FC,
  Fragment,
  isValidElement,
  ReactElement,
  useMemo,
  useState,
} from 'react';

import { Row } from '.';
import Column from './Column';

interface Props extends DrawerProps {
  children?: ReactElement;
  network: NetworkInfo | undefined;
  setNetwork: (newNetwork: NetworkInfo) => void;
}

type Search = {
  term: string;
  includeTestnet: boolean;
};

const NetworkItem = styled(Item)(({ theme }) => {
  return {
    '&.selected': {
      backgroundColor: theme.palette.common.purple,
      backgroundImage: `radial-gradient(white 1px, transparent 0)`,
      backgroundSize: '20px 20px',
      backgroundPosition: '-19px -19px',

      '& .Network-name, .Network-id': {
        backgroundColor: theme.palette.common.purple,
      },
    },
  };
});

const NetworkDrawer: FC<Props> = ({
  children,
  network,
  setNetwork,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<Search>({
    term: '',
    includeTestnet: false,
  });

  const debouncedSearch = useDebounce<string>(search.term);

  const networks = useMemo<NetworkInfo[]>(() => {
    const debouncedSearchLowerCased = debouncedSearch.toLowerCase();

    return Object.values(CHAINS).filter((chain) => {
      const isTestnet =
        chain?.testnet ||
        chain.name.toLowerCase().includes('testnet') ||
        chain.network.toLowerCase().includes('testnet');

      const matchNameOrId =
        chain.name.toLowerCase().includes(debouncedSearchLowerCased) ||
        String(chain.id).includes(debouncedSearchLowerCased);

      if (search.includeTestnet) {
        return matchNameOrId;
      }

      return matchNameOrId && !isTestnet;
    });
  }, [debouncedSearch, search.includeTestnet]);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setSearch((prev) => ({ ...prev, term: value }));
  };

  const handleToggleIncludeTestnet = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { checked } = event.target;

    setSearch((prev) => ({
      ...prev,
      includeTestnet: checked,
    }));
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSelect = (newNetworkId: NetworkId) => () => {
    const newNetworkInfo = getNetwork(newNetworkId);
    if (newNetworkInfo) {
      setNetwork(newNetworkInfo);
      setOpen(false);
    } else {
      //FIX ME
    }
  };

  const DrawerList = (
    <Column sx={{ width: 320, overflowY: 'hidden' }} role='presentation'>
      <ListSubheader
        sx={{
          padding: 0,
        }}
      >
        <BasicInput
          size='small'
          autoFocus
          placeholder='Search'
          fullWidth
          value={search.term}
          onChange={handleSearchTermChange}
          onKeyDown={(e) => {
            if (e.key !== 'Escape') {
              e.stopPropagation();
            }
          }}
          containerProps={{
            sx: {
              p: 5,
              borderBottom: '1px solid',
              borderBottomColor: 'common.black',
            },
          }}
        />
      </ListSubheader>
      <Box px={5} pt={5}>
        Testnet
        <Switch
          checked={search.includeTestnet}
          onChange={handleToggleIncludeTestnet}
        />
      </Box>
      <Column
        p={5}
        sx={{
          minHeight: 0,
        }}
      >
        <List>
          {networks.map((_network) => {
            const selectedClassName =
              network && network.id === _network.id ? 'selected' : 'unselected';
            return (
              <NetworkItem
                key={_network.id}
                onClick={handleSelect(_network.id)}
                className={selectedClassName}
              >
                <Row>
                  <Typography className='Network-name'>
                    {_network.name}
                  </Typography>
                  <Typography className='Network-id'>{_network.id}</Typography>
                </Row>
              </NetworkItem>
            );
          })}
        </List>
      </Column>
    </Column>
  );

  return (
    <Fragment>
      {children &&
        isValidElement(children) &&
        cloneElement(children as ReactElement, {
          onClick: toggleDrawer(true),
        })}
      {!children && <Button onClick={toggleDrawer(true)}>Open drawer</Button>}
      <Drawer
        anchor={'right'}
        open={open}
        onClose={toggleDrawer(false)}
        SlideProps={{
          style: {
            padding: 0,
          },
        }}
        {...props}
      >
        {DrawerList}
      </Drawer>
    </Fragment>
  );
};

export default NetworkDrawer;
