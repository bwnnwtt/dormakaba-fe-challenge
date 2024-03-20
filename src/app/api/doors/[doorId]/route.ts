import { NextResponse } from 'next/server';
import { Door } from '@/types/door';
import doors from '@/app/mock/doors';

export async function GET(
  request: Request,
  { params }: { params: { doorId: string } }
) {
  const doorId = Number(params.doorId);

  return NextResponse.json(doors.find((e: Door) => e.id === doorId));
}
