import type { Dispatch, SetStateAction } from 'react';
import type { Todo } from '@prisma/client';
import { Checkbox } from '../ui/checkbox';
import { Trash2Icon } from 'lucide-react';
import clsx from 'clsx';

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  const handleToggle = (id: string) => () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: string) => () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="w-3/4 flex flex-col gap-3">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <Checkbox
            id={todo.id}
            checked={todo.isDone}
            onCheckedChange={handleToggle(todo.id)}
          />
          <label
            htmlFor={todo.id}
            className={clsx('text-base font-medium leading-none', {
              'line-through text-gray-400': todo.isDone,
              'text-black': !todo.isDone,
            })}
          >
            {todo.title}
          </label>
          <Trash2Icon
            className="cursor-pointer w-5 h-5"
            onClick={deleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}
