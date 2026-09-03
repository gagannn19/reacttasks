import { useState } from 'react';

export function useClipboard(/* args */) {

  const [copied, setCopied] = useState(false);

  function copy(text) {
    setCopied(false);
    navigator.clipboard.writeText(text).then(()=>{
      setCopied(true)

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    })
  }

  return { copied, copy };

}
