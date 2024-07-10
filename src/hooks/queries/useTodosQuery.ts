import { getTodos } from '@/api';
import { Todo } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '@/react-query/query-keys';

export const useTodosQuery = ({
  initialData = [],
}: {
  initialData?: Todo[];
}) => {
  return useQuery({
    queryKey: [queryKeys.todos],
    queryFn: getTodos,
    initialData,
  });
};
