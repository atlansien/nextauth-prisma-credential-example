import { NextResponse } from 'next/server';
import { auth } from '../auth';

export default auth((req) => {
  if (req.nextUrl.pathname === '/user') {
    if (!req.auth) {
      const url = new URL('/auth/signin', req.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
});
