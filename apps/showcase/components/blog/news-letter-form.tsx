'use client';

import React, { useRef, useState } from 'react';

export interface NewsletterFormProps {
    title?: string;
    apiUrl?: string;
}

const NewsletterForm = ({
    title = 'Subscribe to the newsletter',
    apiUrl = '/api/newsletter'
}: NewsletterFormProps) => {
    const inputEl = useRef<HTMLInputElement>(null);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputEl.current) {
            return;
        }

        try {
            const res = await fetch(apiUrl, {
                body: JSON.stringify({
                    email: inputEl.current.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            });

            await res.json();
            inputEl.current.value = '';
            setError(false);
            setSubscribed(true);
        } catch (err) {
            setError(true);
            setMessage('Your e-mail address is invalid or you are already subscribed!');
            setSubscribed(false);
            throw err;
        }
    };

    return (
        <div>
            <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
                {title}
            </div>
            <form className="flex flex-col sm:flex-row" onSubmit={subscribe}>
                <label htmlFor="email-input" className="mb-0">
                    <span className="sr-only">Email address</span>
                    <input
                        autoComplete="email"
                        className="form-control w-72"
                        id="email-input"
                        name="email"
                        placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
                        ref={inputEl}
                        required
                        type="email"
                        disabled={subscribed}
                    />
                </label>
                <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
                    <button
                        className={`btn btn-primary w-full ${
                            subscribed
                                ? 'cursor-default'
                                : 'hover:bg-primary-700 dark:hover:bg-primary-400'
                        } focus:ring-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black`}
                        type="submit"
                        disabled={subscribed}>
                        {subscribed ? 'Thank you!' : 'Sign up'}
                    </button>
                </div>
            </form>
            {error && (
                <div className="w-72 pt-2 text-sm text-red-500 sm:w-96 dark:text-red-400">
                    {message}
                </div>
            )}
        </div>
    );
};

export default NewsletterForm;
