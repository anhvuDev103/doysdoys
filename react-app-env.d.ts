/* eslint-disable @typescript-eslint/no-explicit-any */
type MetamaskEvents =
  | 'accountsChanged'
  | 'chainChanged'
  | 'chainChanged'
  | 'connect'
  | 'disconnect'
  | 'message';

interface Window {
  ethereum?: {
    isCoinbaseWallet: boolean;
    isMetaMask: boolean;
    autoRefreshOnNetworkChange: boolean;
    isBraveWallet: boolean;
    on: (event: MetamaskEvents, handler: (args: any) => void) => void;
    removeListener: (
      event: MetamaskEvents,
      handler: (args: any) => void,
    ) => void;
  };
}
