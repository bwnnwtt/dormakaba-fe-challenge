import { NextResponse } from 'next/server';
import doors from '@/app/mock/doors';

export async function GET(request: Request) {
  return NextResponse.json(doors);
}
