import { Todo } from '@prisma/client';
import prisma from 'db';

import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';

export default async function TodosPage() {
  const fallbackTodos: Todo[] = [];
  const initialTodos = (await prisma.todo.findMany()) ?? fallbackTodos;

  return (
    <main className="flex flex-1 flex-col items-center gap-4">
      <TodoForm />
      <TodoList initialTodos={initialTodos} />
    </main>
  );
}
