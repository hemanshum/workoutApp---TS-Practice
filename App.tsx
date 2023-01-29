import React from 'react';
import Navigation from './src/navigation';
import useCachedResources from './src/hooks/useCachedResources';

const App = () => {
  const isLoaded = useCachedResources();
  console.log({isLoaded});
  return <Navigation />;
};

export default App;
