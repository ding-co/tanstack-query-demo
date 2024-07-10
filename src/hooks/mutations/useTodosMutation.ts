import { deleteTodo, patchTodo, postTodo } from '@/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { queryKeys } from '@/react-query/query-keys';

export const usePostTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
  });
};

export const usePatchTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
  });
};
