import type { Todo } from '@prisma/client';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import ClipLoader from 'react-spinners/ClipLoader';

import { Checkbox } from '../ui/checkbox';

interface Props {
  todos: Todo[];
  handleToggleTodo: (id: number) => () => Promise<void>;
  onDeleteTodo: (id: number) => () => Promise<void>;
  isLoading: boolean;
}

export default function TodoList({
  todos,
  handleToggleTodo,
  onDeleteTodo,
  isLoading,
}: Props) {
  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <ClipLoader loading={isLoading} color="#1b62da" size="50px" />
      </div>
    );
  }

  return (
    <ul className="flex w-3/4 flex-col gap-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center gap-2 rounded-2xl border border-solid border-kabul-700 bg-white bg-opacity-95 p-4 leading-5"
        >
          <Checkbox
            id={todo.id.toString()}
            checked={todo.isDone}
            onCheckedChange={handleToggleTodo(todo.id)}
          />
          <label
            htmlFor={todo.id.toString()}
            className={clsx('text-base font-medium leading-none', {
              'text-gray-400 line-through': todo.isDone,
              'text-black': !todo.isDone,
            })}
          >
            {todo.title}
          </label>
          <div>
            <Trash2Icon
              className="h-5 w-5 cursor-pointer"
              onClick={onDeleteTodo(todo.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
