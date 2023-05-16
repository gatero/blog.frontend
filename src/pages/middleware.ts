import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('aaa - request: ', request);
}

export const config = {};
