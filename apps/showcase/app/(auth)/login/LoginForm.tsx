'use client';

import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const LoginForm = ({ login }: any) => {
    const [formData, setFormData] = useState({
        username: process.env.NODE_ENV === 'development' ? 'kzamanbn@gmail.com' : '',
        password: process.env.NODE_ENV === 'development' ? 'password' : '',
        remember: false
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const data = await login(formData);
            redirect('/dashboard');
            console.log('Login successful:', data);
        } catch (error: any) {
            setError(error.message);
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="mt-4" onSubmit={handleSubmit}>
            {error && <div className="text-center text-red-500">{error}</div>}
            <label className="block">
                <span className="form-label">Email</span>
                <input
                    type="email"
                    name="username"
                    className="form-control"
                    placeholder="Email Address"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                    autoFocus
                    required
                />
            </label>

            <label className="mt-3 block">
                <span className="form-label">Password</span>
                <div className="relative">
                    <input
                        id="hs-toggle-password-multi-toggle"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={formData.password}
                        name="password"
                        onChange={handleChange}
                        required
                        autoComplete="current-password"
                    />
                    <button
                        type="button"
                        data-hs-toggle-password='{
                                    "target": ["#hs-toggle-password-multi-toggle"]
                                  }'
                        className="focus:outline-hidden focus:text-primary-600 dark:focus:text-primary-500 absolute inset-y-0 end-0 z-20 flex cursor-pointer items-center rounded-e-md px-3 text-gray-400 dark:text-neutral-600">
                        <svg
                            className="size-3.5 shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path
                                className="hs-password-active:hidden"
                                d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                            <path
                                className="hs-password-active:hidden"
                                d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                            <path
                                className="hs-password-active:hidden"
                                d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                            <line
                                className="hs-password-active:hidden"
                                x1="2"
                                x2="22"
                                y1="2"
                                y2="22"></line>
                            <path
                                className="hs-password-active:block hidden"
                                d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                            <circle
                                className="hs-password-active:block hidden"
                                cx="12"
                                cy="12"
                                r="3"></circle>
                        </svg>
                    </button>
                </div>
            </label>

            <div className="mt-4 flex items-center justify-between">
                <label className="inline-flex items-center">
                    <input type="checkbox" name="remember" className="form-check-input" />
                    <span className="text-default mx-2 text-sm">Remember me</span>
                </label>

                <a
                    className="text-primary-600 block text-sm hover:underline"
                    href="/forgot-password">
                    Forgot your password?
                </a>
            </div>

            <div className="mt-6">
                <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                    <span className="mr-2">Login</span>
                    <LoadingSpinner isLoading={isLoading} />
                </button>
            </div>
        </form>
    );
};

export default LoginForm;

