import TodoForm from '@/components/todo/TodoForm';
import TodoList from '@/components/todo/TodoList';
import prisma from '../../../db';

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();

  return (
    <main className="mt-6 flex-1 flex flex-col items-center gap-6">
      <TodoForm />
      <TodoList todos={todos} />
    </main>
  );
}
