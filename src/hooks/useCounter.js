import { useState } from 'react'

export function useCounter(initialValue, step = 1) {

  const [count, setCount] = useState(initialValue);
  
  function increament() {
    setCount(prev => prev + step);
  }
  function decreament() {
    setCount(prev => prev - step);

  }
  function reset() {
    setCount(initialValue);
  }

  return [count, increament, decreament, reset];

}
