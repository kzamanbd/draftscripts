import { signToken, verifyToken } from '@/services/auth/session';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get('session');
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    if (isProtectedRoute && !sessionCookie) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const res = NextResponse.next();

    if (sessionCookie && request.method === 'GET') {
        try {
            const parsed = await verifyToken(sessionCookie.value);
            const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);

            res.cookies.set({
                name: 'session',
                value: await signToken({
                    ...parsed,
                    expires: expiresInOneDay.toISOString()
                }),
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                expires: expiresInOneDay
            });
        } catch (error) {
            console.error('Error updating session:', error);
            res.cookies.delete('session');
            if (isProtectedRoute) {
                return NextResponse.redirect(new URL('/register', request.url));
            }
        }
    }

    return res;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
