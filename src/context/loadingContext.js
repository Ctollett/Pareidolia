import { createContext } from 'react';

const LoadingContext = createContext({
  isLoading: true,
  setIsLoading: () => {}
});

export default LoadingContext;
