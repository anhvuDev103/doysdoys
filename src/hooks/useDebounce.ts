import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number = 200) {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay, value]);

  return debounce;
}

export default useDebounce;
