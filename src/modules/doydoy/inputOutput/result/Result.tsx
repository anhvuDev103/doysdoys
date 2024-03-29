import { Box } from '@mui/material';

const Result = () => {
  // const { account, provider } = useWeb3React<Web3Provider>();

  // const { data: balance, isLoading } = useSWR(
  //   [
  //     keyFactory('Balance', [account]),
  //     '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
  //     'decimals',
  //   ],
  //   {
  //     fetcher: contractFetcher(provider, TokenAbi),
  //   },
  // );

  return (
    <Box
      sx={{
        padding: 6,
      }}
    >
      Network
    </Box>
  );
};

export default Result;
