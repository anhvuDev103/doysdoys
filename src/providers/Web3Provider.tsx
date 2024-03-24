import { PRIORITIZED_CONNECTORS } from '@utils/wallet/connections';
import { Web3ReactProvider } from '@web3-react/core';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Web3Provider: FC<Props> = ({ children }) => {
  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map((connector) => [
        connector.connector,
        connector.hooks,
      ])}
    >
      {children}
    </Web3ReactProvider>
  );
};

export default Web3Provider;
