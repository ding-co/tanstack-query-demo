'use client';

import { postTodo } from '@/api';
import { type FormEvent, useRef } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function TodoForm() {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoRef.current) {
      return;
    }

    await postTodo(todoRef.current.value.trim());

    todoRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-3/4 items-center gap-2">
      <Input
        ref={todoRef}
        type="text"
        placeholder="Add Your Todo."
        autoFocus
        required
      />
      <Button type="submit">추가</Button>
    </form>
  );
}
