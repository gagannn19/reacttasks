import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(localStorage.getItem(key) ? localStorage.getItem(key) : initialValue);

  useEffect(()=>{
    localStorage.setItem(key, value);
  }, [value])

  return [value, setValue]
}
