import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="mx-auto flex size-full h-screen max-w-[50rem] flex-col items-center justify-center overflow-hidden">
            <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
                <h1 className="bg-linear-to-r block from-pink-500 to-yellow-500 bg-clip-text text-7xl font-bold text-transparent sm:text-9xl dark:text-white">
                    404
                </h1>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">
                    Oops, something went wrong.
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                    Sorry about that! Please visit our home page to get where you need to go.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                    <Link className="btn btn-primary" href="/">
                        <svg
                            className="size-4 shrink-0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>{' '}
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

