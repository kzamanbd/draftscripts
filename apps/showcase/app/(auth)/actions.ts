'use server';

import { setSession } from '@/services/auth/session';

export const login = async (formData: any) => {
    const userData = {
        id: 1,
        email: formData.username,
        name: 'Kamruzzaman',
        username: formData.username,
        password: formData.password
    };
    setSession(userData);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(userData);
        }, 1000);
    });
};

