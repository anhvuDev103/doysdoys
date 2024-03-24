import React from 'react';

export type Address = string | undefined;

export type InputEvent = React.ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement
>;
export type BlurEvent = React.FocusEvent<
  HTMLTextAreaElement | HTMLInputElement,
  Element
>;
