import { NextResponse } from 'next/server';
import prisma from '../../../../../db';

export async function PATCH(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!todo) {
    return NextResponse.json({ message: 'Todo Not Found.' }, { status: 404 });
  }

  await prisma.todo.update({
    where: {
      id: parseInt(id),
    },
    data: {
      isDone: !todo.isDone,
    },
  });

  return NextResponse.json({ message: 'Updated Todo.' }, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  await prisma.todo.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({ message: 'Deleted Todo.' }, { status: 200 });
}
