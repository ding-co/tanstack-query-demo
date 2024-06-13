import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useRef,
} from 'react';
import type { Todo } from '@prisma/client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export default function TodoForm({ todos, setTodos }: Props) {
  const todoRef = useRef<HTMLInputElement | null>(null);

  const addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoRef.current) {
      return;
    }

    const newTodo = {
      id: (todos.length + 1).toString(),
      title: todoRef.current.value,
      isDone: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTodos([...todos, newTodo]);

    todoRef.current.value = '';
  };

  return (
    <form
      onSubmit={addTodo}
      className="w-3/4 flex justify-center items-end gap-2"
    >
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
