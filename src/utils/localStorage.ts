export const getLocalStorage = <T>(key: string, defaultValue?: T): T => {
  const itemStorage = window.localStorage.getItem(key);

  return itemStorage ? JSON.parse(itemStorage) : defaultValue || null;
};

export const setLocalStorage = (key: string, value: unknown) =>
  window.localStorage.setItem(key, JSON.stringify(value));
