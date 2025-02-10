import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // get the body of the request
    const body = await request.json();

    // check if the user exists

    // response json with token
    return NextResponse.json(body);
}

