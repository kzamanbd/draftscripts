import { userMeta } from '@repo/shared';
import { NextResponse } from 'next/server';

export async function GET() {
    // generate random token
    const token = Math.random().toString(36).substring(7);
    // response json with token
    return NextResponse.json({
        token: token,
        user: userMeta.user,
        message: 'Login successful'
    });
}
