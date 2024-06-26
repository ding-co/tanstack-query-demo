import { NextResponse } from 'next/server';

import prisma from '../../../../db';

export async function GET() {
  const todos = await prisma.todo.findMany();

  return NextResponse.json(todos, { status: 200 });
}

export async function POST(req: Request) {
  const { title } = await req.json();

  await prisma.todo.create({
    data: { title, isDone: false },
  });

  return NextResponse.json({ message: 'Created Todo.' }, { status: 200 });
}
