import { hashSync } from 'bcrypt';
import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '../../../../../prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    const hashedPassword = hashSync(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: 'User creation failed' },
      { status: 500 }
    );
  }
}
