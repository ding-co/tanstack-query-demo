import { QueryClient } from '@tanstack/react-query';

const makeQueryClient = () => {
  // conservative options
  return new QueryClient();
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
};

export default getQueryClient;
