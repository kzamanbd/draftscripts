import { cookies } from 'next/headers';
import { verifyToken } from './session';
import { user } from '@/app/metadata';

export async function getUser() {
    const sessionCookie = (await cookies()).get('session');
    if (!sessionCookie || !sessionCookie.value) {
        return null;
    }

    const sessionData = await verifyToken(sessionCookie.value);
    if (!sessionData || !sessionData.user || typeof sessionData.user.id !== 'number') {
        return null;
    }

    if (new Date(sessionData.expires) < new Date()) {
        return null;
    }

    // data from the session

    const userData = [
        {
            ...user,
            id: sessionData.user.id
        }
    ];
    return userData;
}
