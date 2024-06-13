'use client';

import type { Todo } from '@prisma/client';
import { Checkbox } from '../ui/checkbox';
import { Trash2Icon } from 'lucide-react';
import clsx from 'clsx';

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
    <ul className="w-3/4 flex flex-col gap-3">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <Checkbox
            id={todo.id.toString()}
            checked={todo.isDone}
            onCheckedChange={handleToggle(todo.id)}
          />
          <label
            htmlFor={todo.id.toString()}
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
