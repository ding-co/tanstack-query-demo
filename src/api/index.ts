import { Todo } from '@prisma/client';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch(`/api/todos`);

  if (!response.ok) {
    throw new Error('Failed to get todos.');
  }

  return response.json();
};

export const postTodo = async (title: string): Promise<void> => {
  const response = await fetch(`/api/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to post todo.');
  }
};

export const patchTodo = async (id: number): Promise<void> => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to patch todo.');
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to delete todo.');
  }
};
