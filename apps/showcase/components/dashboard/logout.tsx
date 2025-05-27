'use client';

import { logout } from '@/app/(auth)/actions';
import { useRouter } from 'next/navigation';

const LogoutButton = ({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const router = useRouter();
    async function handleSignOut() {
        await logout();
        router.refresh();
        router.push('/login');
    }
    return (
        <button type="button" className={className} onClick={handleSignOut}>
            {children}
        </button>
    );
};

export default LogoutButton;
