export const getLocalStorage = (key: string) => {
  const itemStorage = window.localStorage.getItem(key);

  return itemStorage ? JSON.parse(itemStorage) : null;
};

export const setLocalStorage = (key: string, value: unknown) =>
  window.localStorage.setItem(key, JSON.stringify(value));
