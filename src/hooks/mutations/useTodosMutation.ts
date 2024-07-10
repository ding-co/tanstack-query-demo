import { deleteTodo, patchTodo, postTodo } from '@/api';
import { Todo } from '@prisma/client';
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
