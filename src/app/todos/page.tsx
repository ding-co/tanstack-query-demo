import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';
import prisma from '../../../db';

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="flex flex-col items-center gap-4">
      <TodoForm />
      <TodoList todos={todos} />
    </main>
  );
}
