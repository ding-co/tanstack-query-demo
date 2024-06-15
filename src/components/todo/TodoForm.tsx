'use client';

import { type FormEvent, useRef } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function TodoForm() {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoRef.current) {
      return;
    }

    await fetch(`/api/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: todoRef.current.value,
      }),
    });

    todoRef.current.value = '';
  };

  return (
    <form onSubmit={addTodo} className="flex w-3/4 items-center gap-2">
      <Input
        ref={todoRef}
        type="text"
        placeholder="Add Your Todo."
        autoFocus
        maxLength={15}
        required
      />
      <Button type="submit">추가</Button>
    </form>
  );
}
