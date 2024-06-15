import { deleteTodo, patchTodo, postTodo } from '@/api';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { queryKeys } from '@/react-query/query-keys';

export const usePostTodoMutation = (
  mutationOptions?: UseMutationOptions<void, Error, string>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
    ...mutationOptions,
  });
};

export const usePatchTodoMutation = (
  mutationOptions?: UseMutationOptions<void, Error, number>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
    ...mutationOptions,
  });
};

export const useDeleteTodoMutation = (
  mutationOptions?: UseMutationOptions<void, Error, number>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.todos],
      });
    },
    ...mutationOptions,
  });
};
