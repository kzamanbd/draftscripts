import { getSession } from '@/services/auth/session';
import { ApplicationLogo, OtherLoginOption } from '@repo/shared';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { login } from '../actions';
import LoginForm from './form';

export const metadata = {
    title: 'Login'
};

const Login = async () => {
    const session = await getSession();
    if (session) {
        redirect('/dashboard');
    }
    return (
        <div className="flex min-h-screen items-center justify-center overflow-hidden p-6">
            <div className="login-card">
                <div className="rounded-md bg-white px-8 py-6 text-gray-600 shadow-md dark:bg-gray-700 dark:text-gray-200">
                    <Link href="/" className="my-4 flex items-center justify-center space-x-2">
                        <ApplicationLogo />
                        <p className="text-3xl font-semibold">
                            Draft<span className="text-primary">Scripts</span>
                        </p>
                    </Link>
                    <div className="my-3">
                        <p className="mb-2 hidden text-2xl font-semibold md:block">
                            Welcome to the adventure
                        </p>
                        <p className="text-xs">
                            Please sign-in to your account and start the adventure
                        </p>
                    </div>

                    <OtherLoginOption />
                    <LoginForm login={login} />
                    <p className="mt-4 text-sm">
                        Don’t have an account yet?
                        <Link href="/register" className="text-primary ml-2">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
