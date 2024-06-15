'use client';

import { deleteTodo, getTodos, patchTodo, postTodo } from '@/api';
import { Todo } from '@prisma/client';
import { useEffect, useState } from 'react';

import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);

    const todos = await getTodos();
    setTodos(todos);

    setIsLoading(false);
  };

  const addTodo = async (title: string) => {
    await postTodo(title);
    fetchTodos();
  };

  const handleToggleTodo = (id: number) => async () => {
    await patchTodo(id);
    fetchTodos();
  };

  const onDeleteTodo = (id: number) => async () => {
    await deleteTodo(id);
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
      />
    </main>
  );
}
