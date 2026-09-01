import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    // It means:“Browser, I’m giving you a function. Whenever a resize happens in the future, call this function.”

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[])

  return {width, height}
}
