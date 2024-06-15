import { getTodos } from '@/api';
import { Todo } from '@prisma/client';
import { QueryOptions, useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/react-query/query-keys';

export const useTodosQuery = (queryOptions?: QueryOptions<Todo[]>) => {
  return useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
    ...queryOptions,
  });
};
