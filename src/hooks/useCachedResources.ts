import {useEffect, useState} from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    function loadResourceAndDataAsync() {
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 3000);
    }
    loadResourceAndDataAsync();
  }, []);

  return isLoadingComplete;
}
