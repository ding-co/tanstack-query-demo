'use client';

import { useState } from 'react';
import type { Todo } from '@prisma/client';
import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <main className="mt-6 flex-1 flex flex-col items-center gap-6">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}
