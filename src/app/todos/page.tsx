'use client';

import { deleteTodo, getTodos, patchTodo, postTodo } from '@/api';
import { Todo } from '@prisma/client';
import { useEffect, useState } from 'react';

import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchTodos = async () => {
    setIsLoading(true);

    try {
      const todos = await getTodos();
      setTodos(todos);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  const addTodo = async (title: string) => {
    try {
      await postTodo(title);
    } catch (error) {
      setError(error);
    }
    fetchTodos();
  };

  const handleToggleTodo = (id: number) => async () => {
    try {
      await patchTodo(id);
    } catch (error) {
      setError(error);
    }
    fetchTodos();
  };

  const onDeleteTodo = (id: number) => async () => {
    try {
      await deleteTodo(id);
    } catch (error) {
      setError(error);
    }
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="flex flex-1 flex-col items-center gap-4">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        onDeleteTodo={onDeleteTodo}
        isLoading={isLoading}
        error={error}
      />
    </main>
  );
}
