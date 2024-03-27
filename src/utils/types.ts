import { Chain } from '@wagmi/chains';
import React from 'react';

export type Address = string | undefined;
export type NetworkId = number;
export type Network = {
  name: string;
  id: NetworkId;
};
export type NetworkInfo = Chain & {
  rpcUrlsArray: string[];
  blockExplorersArray: string[];

  //overrides
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
};

export type NetworkInfoMap = {
  [id: NetworkId]: NetworkInfo;
};

export type InputEvent = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
export type BlurEvent = React.FocusEvent<
  HTMLTextAreaElement | HTMLInputElement,
  Element
>;
