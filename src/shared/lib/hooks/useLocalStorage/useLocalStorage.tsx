import { useState, useEffect } from 'react';

export const useLocalStorage = (localStorageKey: string, initialValue: any) => {
  const [storage, setStorage] = useState(() => {
    try {
      const storageData = localStorage.getItem(localStorageKey);

      return storageData ? JSON.parse(storageData) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, storage);
  }, [storage, localStorageKey]);

  return [storage, setStorage];
};
