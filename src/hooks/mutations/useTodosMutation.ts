import { deleteTodo, patchTodo, postTodo } from '@/api';
import { Todo } from '@prisma/client';
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
    onMutate: async (id: number) => {
      // Cancel any ongoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: [queryKeys.todos],
      });

      const snapshot = queryClient.getQueryData([queryKeys.todos]);

      queryClient.setQueryData([queryKeys.todos], (previousTodos: Todo[]) =>
        previousTodos?.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      );

      return () => {
        queryClient.setQueryData([queryKeys.todos], snapshot);
      };
    },
    onError: (error, variables, rollback) => {
      (rollback as Function)?.();
    },
    onSettled: () => {
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
