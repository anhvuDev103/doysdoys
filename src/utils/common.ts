import { generate } from 'random-words';

import { Address } from './types';

export const shortenAddress = (address: Address, placeholder?: string) => {
  if (!address) {
    return placeholder || 'Empty address';
  }

  return (
    address.substring(0, 6) + '...' + address.substring(address.length - 4)
  );
};

export const shortenString = (raw: string, maxlength: number = 16) => {
  if (raw.length < maxlength) {
    return raw;
  }

  return raw.substring(0, 6) + '...' + raw.substring(raw.length - 4);
};

export const generateName = () => {
  const words = generate({ exactly: 2 }) as string[];

  const name = words
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('');
  return name;
};

export const isSnakecaseAndUppercase = (str: string) =>
  /^[A-Z0-9_]*$/.test(str);
