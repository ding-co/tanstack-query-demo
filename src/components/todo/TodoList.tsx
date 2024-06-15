'use client';

import type { Todo } from '@prisma/client';
import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';

import { Checkbox } from '../ui/checkbox';

interface Props {
  todos: Todo[];
}

export default function TodoList({ todos }: Props) {
  const handleToggle = (id: number) => async () => {
    await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const deleteTodo = (id: number) => async () => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
  };

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
            onCheckedChange={handleToggle(todo.id)}
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
              onClick={deleteTodo(todo.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
