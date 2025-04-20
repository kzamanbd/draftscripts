'use client';

import { signOut } from '@/app/(auth)/actions';
import { useRouter } from 'next/navigation';

const DashboardView = () => {
    const router = useRouter();
    async function handleSignOut() {
        await signOut();
        router.refresh();
        router.push('/');
    }
    return (
        <button
            type="submit"
            onClick={handleSignOut}
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Logout
        </button>
    );
};

export default DashboardView;

