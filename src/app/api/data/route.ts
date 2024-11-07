import { NextResponse, type NextRequest } from 'next/server';
import { auth } from '../../../../auth';
import { prisma } from '../../../../prisma';

export async function GET(_req: NextRequest) {
  try {
    const session = await auth();
    console.log('session', session);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await prisma.data.findMany();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
