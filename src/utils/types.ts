import React from 'react';

export type Address = string | undefined;
export type NetworkId = number;
export type Network = {
  name: string;
  id: NetworkId;
};

export type InputEvent = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
export type BlurEvent = React.FocusEvent<
  HTMLTextAreaElement | HTMLInputElement,
  Element
>;
