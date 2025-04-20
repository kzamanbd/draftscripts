'use server';

import { getUser } from '@/services/auth/queries';
import { setSession } from '@/services/auth/session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const login = async (formData: any) => {
    const userData = {
        id: 1,
        email: formData.username,
        name: 'Kamruzzaman',
        username: formData.username,
        password: formData.password
    };
    await setSession(userData);

    redirect('/dashboard');
};

export async function signOut() {
    const user = (await getUser()) as any;
    if (!user) {
        return redirect('/login');
    }
    // Clear the session cookie
    (await cookies()).delete('session');
}
