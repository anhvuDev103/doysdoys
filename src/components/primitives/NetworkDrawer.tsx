import { BasicInput } from '@components/Input';
import { Item, List } from '@components/List';
import useDebounce from '@hooks/useDebounce';
import {
  Box,
  Button,
  Drawer,
  DrawerProps,
  ListSubheader,
  Switch,
  Typography,
} from '@mui/material';
import { NetworkInfo } from '@utils/types';
import { CHAINS } from '@utils/wallet/chains';
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
}

type Search = {
  term: string;
  includeTestnet: boolean;
};

const NetworkDrawer: FC<Props> = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<Search>({
    term: '',
    includeTestnet: false,
  });

  const debouncedSearch = useDebounce<string>(search.term);

  const networks = useMemo<NetworkInfo[]>(() => {
    const debouncedSearchLowerCased = debouncedSearch.toLowerCase();

    return Object.values(CHAINS).filter((chain) => {
      const matchNameOrId =
        chain.name.toLowerCase().includes(debouncedSearchLowerCased) ||
        String(chain.id).includes(debouncedSearchLowerCased);

      if (search.includeTestnet) {
        return matchNameOrId;
      }
      return matchNameOrId && chain.testnet;
    });
  }, [debouncedSearch, search.includeTestnet]);
  console.log('>> Check | networks:', networks);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setSearch((prev) => ({ ...prev, term: value }));
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
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
        <Switch />
      </Box>
      <Box
        p={5}
        sx={{
          display: 'flex',
          minHeight: 0,
        }}
      >
        <List>
          {networks.map((network) => (
            <Item key={network.id} onClick={toggleDrawer(false)}>
              <Row>
                <Typography>{network.name}</Typography>
                <Typography>{network.id}</Typography>
              </Row>
            </Item>
          ))}
        </List>
      </Box>
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
