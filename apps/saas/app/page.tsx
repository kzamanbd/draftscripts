import { ApplicationLogo } from '@repo/shared';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Home',
    description: 'Pricing page for our application'
};

const Home = () => {
    return (
        <div>
            <main id="content">
                <div className="overflow-hidden">
                    {/* <!-- Header --> */}
                    <header className="z-50 flex w-full flex-wrap py-3 text-sm md:flex-nowrap md:justify-start md:py-0">
                        <nav className="mx-auto w-full max-w-[85rem] px-4 md:px-6 lg:px-8">
                            <div className="relative md:flex md:items-center md:justify-between">
                                <div className="flex items-center justify-between">
                                    <Link
                                        className="focus:outline-hidden flex flex-none items-center gap-2 focus:opacity-80"
                                        href="/pricing">
                                        <ApplicationLogo />
                                        <div className="hidden h-6 text-2xl font-semibold md:block">
                                            DraftScripts
                                        </div>
                                    </Link>

                                    <div className="md:hidden">
                                        <button
                                            type="button"
                                            className="hs-collapse-toggle focus:outline-hidden flex size-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-800 hover:bg-gray-100 focus:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            id="hs-navbar-page-demo-pricing-collapse"
                                            aria-expanded="false"
                                            aria-controls="hs-navbar-page-demo-pricing"
                                            aria-label="Toggle navigation"
                                            data-hs-collapse="#hs-navbar-page-demo-pricing">
                                            <svg
                                                className="hs-collapse-open:hidden size-4 shrink-0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <line x1="3" x2="21" y1="6" y2="6" />
                                                <line x1="3" x2="21" y1="12" y2="12" />
                                                <line x1="3" x2="21" y1="18" y2="18" />
                                            </svg>
                                            <svg
                                                className="hs-collapse-open:block hidden size-4 shrink-0"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <path d="M18 6 6 18" />
                                                <path d="m6 6 12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div
                                    id="hs-navbar-page-demo-pricing"
                                    className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
                                    aria-labelledby="hs-navbar-page-demo-pricing-collapse">
                                    <div className="max-h-[75vh] overflow-hidden overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 [&::-webkit-scrollbar]:w-2">
                                        <div className="mt-5 flex flex-col gap-x-0 divide-y divide-dashed divide-gray-200 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:divide-y-0 md:divide-solid md:ps-7 dark:divide-neutral-700">
                                            <a
                                                className="focus:outline-hidden py-3 font-medium text-gray-600 hover:text-gray-500 focus:text-gray-500 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                href="#"
                                                aria-current="page">
                                                Landing
                                            </a>

                                            <a
                                                className="focus:outline-hidden py-3 font-medium text-gray-600 hover:text-gray-500 focus:text-gray-500 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                href="#">
                                                Company
                                            </a>

                                            <div className="hs-dropdown py-3 [--adaptive:none] [--strategy:static] md:py-4 md:[--strategy:absolute] md:[--trigger:hover]">
                                                <button
                                                    id="hs-mega-menu-pdp"
                                                    type="button"
                                                    className="focus:outline-hidden flex w-full items-center font-medium text-gray-600 hover:text-gray-400 focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                    aria-haspopup="menu"
                                                    aria-expanded="false"
                                                    aria-label="Mega Menu">
                                                    Resources
                                                    <svg
                                                        className="ms-2 size-2.5 text-gray-500 dark:text-neutral-500"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"></path>
                                                    </svg>
                                                </button>

                                                <div
                                                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 start-0 top-full z-10 hidden w-full min-w-60 rounded-lg bg-white py-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:start-0 before:h-5 before:w-full md:p-4 md:shadow-2xl md:duration-[150ms] dark:divide-neutral-700 dark:bg-neutral-900"
                                                    role="menu"
                                                    aria-orientation="vertical"
                                                    aria-labelledby="hs-mega-menu-pdp">
                                                    <div className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                                                        <div className="mx-1 flex flex-col md:mx-0">
                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        Support Docs
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Explore advice and
                                                                        explanations for all of
                                                                        DraftScripts features.
                                                                    </p>
                                                                </div>
                                                            </a>

                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <rect
                                                                        width="7"
                                                                        height="7"
                                                                        x="14"
                                                                        y="3"
                                                                        rx="1"
                                                                    />
                                                                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        Integrations
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Discover the huge range of
                                                                        tools that Preline
                                                                        integrates with.
                                                                    </p>
                                                                </div>
                                                            </a>

                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="m7 11 2-2-2-2" />
                                                                    <path d="M11 13h4" />
                                                                    <rect
                                                                        width="18"
                                                                        height="18"
                                                                        x="3"
                                                                        y="3"
                                                                        rx="2"
                                                                        ry="2"
                                                                    />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        API Reference
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Build custom integrations
                                                                        with our first-class API.
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="mx-1 flex flex-col md:mx-0">
                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <circle
                                                                        cx="12"
                                                                        cy="12"
                                                                        r="10"
                                                                    />
                                                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                                                    <path d="M12 17h.01" />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        Help Center
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Learn how to install, set
                                                                        up, and use Preline.
                                                                    </p>
                                                                </div>
                                                            </a>

                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <circle cx="12" cy="12" r="4" />
                                                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        Developer Hub
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Learn how to integrate or
                                                                        build on top of Preline.
                                                                    </p>
                                                                </div>
                                                            </a>

                                                            <a
                                                                className="focus:outline-hidden group flex gap-x-5 rounded-lg p-4 text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                                                href="#">
                                                                <svg
                                                                    className="mt-1 size-5 shrink-0"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round">
                                                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                                                    <circle cx="9" cy="7" r="4" />
                                                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                                                </svg>
                                                                <div className="grow">
                                                                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                                        Community Forum
                                                                    </p>
                                                                    <p className="text-sm text-gray-500 group-hover:text-gray-800 group-focus:text-gray-800 dark:text-neutral-500 dark:group-hover:text-neutral-200 dark:group-focus:text-neutral-200">
                                                                        Learn, share, and connect
                                                                        with other Preline users.
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="mx-1 flex flex-col pt-4 md:mx-0 md:pt-0">
                                                            <span className="text-sm font-semibold uppercase text-gray-800 dark:text-neutral-200">
                                                                Customer stories
                                                            </span>

                                                            <a
                                                                className="focus:outline-hidden group mt-4 flex items-center gap-x-5"
                                                                href="#">
                                                                <Image
                                                                    height={128}
                                                                    width={128}
                                                                    className="size-32 rounded-lg"
                                                                    src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                                                                    alt="Avatar"
                                                                />
                                                                <div className="grow">
                                                                    <p className="text-gray-800 dark:text-neutral-200">
                                                                        Preline Projects has proved
                                                                        to be most efficient cloud
                                                                        based project tracking and
                                                                        bug tracking tool.
                                                                    </p>
                                                                    <p className="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                                                        Learn more
                                                                        <svg
                                                                            className="size-4 shrink-0 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width="24"
                                                                            height="24"
                                                                            viewBox="0 0 24 24"
                                                                            fill="none"
                                                                            stroke="currentColor"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round">
                                                                            <path d="m9 18 6-6-6-6" />
                                                                        </svg>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link
                                                className="focus:outline-hidden py-3 font-medium text-gray-600 hover:text-gray-500 focus:text-gray-500 md:py-6 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                href="/login">
                                                Login
                                            </Link>

                                            <div className="pt-3 md:pt-0">
                                                <a
                                                    className="focus:outline-hidden inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-violet-900 px-3 py-2.5 text-sm font-medium text-white hover:bg-violet-700 focus:bg-violet-700 disabled:pointer-events-none disabled:opacity-50"
                                                    href="#">
                                                    Request demo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                    {/*  */}

                    {/* <!-- Hero --> */}
                    <div className="relative">
                        {/*  */}
                        <div aria-hidden="true" className="-z-1 absolute -top-48 start-0 flex">
                            <div className="h-150 w-[1036px] bg-purple-200 opacity-30 blur-3xl dark:bg-purple-900 dark:opacity-20"></div>
                            <div className="h-75 w-[577px] translate-y-32 transform bg-gray-200 opacity-90 blur-3xl dark:bg-neutral-800/60"></div>
                        </div>
                        {/* <!-- End Gradients --> */}

                        <div className="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
                            {/* <!-- Title --> */}
                            <div className="mx-auto mb-10 max-w-2xl text-center">
                                <h2 className="bg-linear-to-r from-violet-600 to-fuchsia-700 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
                                    Simple, transparent pricing
                                </h2>
                                <p className="mt-2 text-gray-800 lg:text-lg dark:text-neutral-200">
                                    Whatever your status, our offers evolve according to your needs.
                                </p>
                            </div>
                            {/* <!-- End Title --> */}

                            {/* <!-- Switch --> */}
                            <div className="flex items-center justify-center gap-x-3">
                                <label
                                    htmlFor="pricing-switch"
                                    className="text-sm text-gray-800 dark:text-neutral-200">
                                    Monthly
                                </label>
                                <label
                                    htmlFor="pricing-switch"
                                    className="relative inline-block h-6 w-11 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="pricing-switch"
                                        className="peer sr-only"
                                    />
                                    <span className="absolute inset-0 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-purple-600 peer-disabled:pointer-events-none peer-disabled:opacity-50 dark:bg-neutral-700 dark:peer-checked:bg-purple-500"></span>
                                    <span className="shadow-xs absolute start-0.5 top-1/2 size-5 -translate-y-1/2 rounded-full bg-white transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
                                </label>
                                <label
                                    htmlFor="pricing-switch"
                                    className="text-sm text-gray-800 dark:text-neutral-200">
                                    Annually
                                </label>
                            </div>
                            {/* <!-- End Switch --> */}

                            {/* <!-- Grid --> */}
                            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-6 lg:grid-cols-4 lg:items-center lg:gap-3 xl:gap-6">
                                {/* <!-- Card --> */}
                                <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 text-center md:p-8 dark:border-neutral-800 dark:bg-neutral-900">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                        Free
                                    </h4>
                                    <span className="mt-7 text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl dark:text-neutral-200">
                                        Free
                                    </span>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                        Get started with basic features
                                    </p>

                                    <ul className="mt-7 space-y-2.5 text-sm">
                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                1 user
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Plan features
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Product support
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        className="focus:outline-hidden mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-violet-600 px-4 py-3 text-sm font-medium text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:border-violet-500 focus:text-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:border-violet-500 dark:text-violet-500 dark:hover:border-violet-400 dark:hover:text-violet-400 dark:focus:border-violet-400 dark:focus:text-violet-400"
                                        href="#">
                                        Get started
                                    </a>
                                </div>

                                {/* <!-- Card --> */}
                                <div className="flex flex-col rounded-2xl border-2 border-violet-900 bg-white p-4 text-center shadow-xl md:p-8 dark:border-violet-700 dark:bg-neutral-900">
                                    <p className="mb-3">
                                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-100 px-3 py-1.5 text-xs font-semibold uppercase text-violet-800 dark:bg-violet-900 dark:text-white">
                                            Most popular
                                        </span>
                                    </p>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </h4>
                                    <span className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl dark:text-neutral-200">
                                        $39
                                    </span>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                        All the basics for starting a new business
                                    </p>

                                    <ul className="mt-7 space-y-2.5 text-sm">
                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                2 users
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Plan features
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Product support
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        className="focus:outline-hidden mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-violet-600 px-4 py-3 text-sm font-medium text-white hover:bg-violet-700 focus:bg-violet-700 disabled:pointer-events-none disabled:opacity-50"
                                        href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
                                        Get started
                                    </a>
                                </div>
                                {/* <!-- End Card --> */}

                                {/* <!-- Card --> */}
                                <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 text-center md:p-8 dark:border-neutral-800 dark:bg-neutral-900">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                        Team
                                    </h4>
                                    <span className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl dark:text-neutral-200">
                                        $89
                                    </span>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                        Everything you need for a growing business
                                    </p>

                                    <ul className="mt-7 space-y-2.5 text-sm">
                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                5 users
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Plan features
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Product support
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        className="focus:outline-hidden mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-violet-600 px-4 py-3 text-sm font-medium text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:border-violet-500 focus:text-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:border-violet-500 dark:text-violet-500 dark:hover:border-violet-400 dark:hover:text-violet-400 dark:focus:border-violet-400 dark:focus:text-violet-400"
                                        href="#">
                                        Get started
                                    </a>
                                </div>
                                {/* <!-- End Card --> */}

                                {/* <!-- Card --> */}
                                <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-4 text-center md:p-8 dark:border-neutral-800 dark:bg-neutral-900">
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </h4>
                                    <span className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl xl:text-5xl dark:text-neutral-200">
                                        $149
                                    </span>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                                        Advanced features for scaling your business
                                    </p>

                                    <ul className="mt-7 space-y-2.5 text-sm">
                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                10 users
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Plan features
                                            </span>
                                        </li>

                                        <li className="flex gap-x-2">
                                            <svg
                                                className="mt-0.5 size-4 shrink-0 text-violet-900"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            <span className="text-gray-800 dark:text-neutral-400">
                                                Product support
                                            </span>
                                        </li>
                                    </ul>

                                    <a
                                        className="focus:outline-hidden mt-5 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-violet-600 px-4 py-3 text-sm font-medium text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:border-violet-500 focus:text-violet-500 disabled:pointer-events-none disabled:opacity-50 dark:border-violet-500 dark:text-violet-500 dark:hover:border-violet-400 dark:hover:text-violet-400 dark:focus:border-violet-400 dark:focus:text-violet-400"
                                        href="#">
                                        Get started
                                    </a>
                                </div>
                                {/* <!-- End Card --> */}
                            </div>
                            {/*  */}

                            {/* <!-- Title --> */}
                            <div className="mx-auto mb-6 mt-10 w-2/3 text-center sm:w-1/2 md:mt-14 lg:mt-24 lg:w-1/3">
                                <h2 className="text-gray-600 dark:text-neutral-400">
                                    Trusted by Open Source, enterprise, and more than 99,000 of you
                                </h2>
                            </div>
                            {/* <!-- End Title --> */}

                            {/* <!-- Clients --> */}
                            <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                                <svg
                                    className="mx-auto size-16 text-gray-500 sm:mx-0 md:size-20 lg:size-24 dark:text-neutral-500"
                                    enableBackground="new 0 0 2499 614"
                                    viewBox="0 0 2499 614"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <svg
                                    className="mx-auto size-16 text-gray-500 sm:mx-0 md:size-20 lg:size-24 dark:text-neutral-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
                                    width="2500"
                                    height="607">
                                    <path
                                        d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <svg
                                    className="mx-auto size-16 text-gray-500 sm:mx-0 md:size-20 lg:size-24 dark:text-neutral-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2500"
                                    height="2500"
                                    viewBox="0 0 192.756 192.756">
                                    <g fillRule="evenodd" clipRule="evenodd">
                                        <path
                                            fill="currentColor"
                                            className="fill-white dark:fill-neutral-900"
                                            d="M0 0h192.756v192.756H0V0z"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M26.795 87.807h14.783l5.172 9.058 5.997-9.058h13.749l-11.085 15.484 11.879 17.018H52.747l-5.997-10.467-7.073 10.467H26.179l11.816-17.018-11.2-15.484z"
                                        />
                                        <path
                                            d="M101.412 107.146h-24.97c.219 2.006.763 3.488 1.619 4.471 1.202 1.41 2.779 2.109 4.712 2.109a7.036 7.036 0 0 0 3.489-.918c.68-.387 1.4-1.066 2.173-2.049l12.275 1.129c-1.881 3.27-4.137 5.611-6.791 7.031-2.653 1.41-6.457 2.121-11.419 2.121-4.305 0-7.689-.605-10.166-1.818-2.466-1.211-4.513-3.145-6.132-5.787-1.62-2.645-2.435-5.746-2.435-9.32 0-5.076 1.63-9.193 4.879-12.328 3.26-3.145 7.752-4.723 13.488-4.723 4.649 0 8.327.711 11.012 2.121 2.695 1.4 4.753 3.448 6.153 6.112 1.41 2.675 2.111 6.153 2.111 10.437v1.412h.002zm-12.663-5.966c-.25-2.414-.898-4.137-1.943-5.172-1.055-1.044-2.434-1.566-4.148-1.566-1.984 0-3.562.794-4.753 2.361-.752.982-1.233 2.434-1.431 4.377h12.275zM99.312 87.807h12.975l6.311 20.591 6.519-20.591h12.578l-13.81 32.502h-11.043l-13.53-32.502zM135.021 104.146c0-4.951 1.672-9.047 5.016-12.254 3.354-3.218 7.867-4.827 13.561-4.827 6.51 0 11.43 1.891 14.752 5.663 2.674 3.04 4.012 6.792 4.012 11.241 0 4.994-1.66 9.09-4.973 12.287-3.312 3.186-7.898 4.785-13.76 4.785-5.225 0-9.445-1.326-12.674-3.98-3.959-3.282-5.934-7.586-5.934-12.915zm12.485-.031c0 2.904.586 5.047 1.766 6.426 1.172 1.389 2.645 2.09 4.42 2.09 1.797 0 3.27-.689 4.42-2.059 1.16-1.369 1.734-3.553 1.734-6.582 0-2.811-.586-4.91-1.746-6.289-1.158-1.369-2.6-2.059-4.314-2.059-1.818 0-3.322.699-4.502 2.09-1.182 1.401-1.778 3.532-1.778 6.383zM184.99 57.755c2.717 0 4.932 2.215 4.932 4.931s-2.215 4.931-4.932 4.931c-2.715 0-4.93-2.215-4.93-4.931s2.215-4.931 4.93-4.931z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M150.203 109.527c16.982-10.41 25.166-25.221 25.748-32.324.674-8.224-5.473-18.187-27.666-18.353-26.6.278-60.919 12.209-89.721 27.793H69.21c24.344-11.771 51.807-20.527 77.159-21.219 22.186-.605 23.475 11.5 23.283 15.339-.275 5.48-5.754 18.081-19.449 28.764zM48.762 92.414c-.934.578-1.86 1.159-2.777 1.744l.768 1.345 2.009-3.089zm-13.617 9.08C19.125 113.037 7.169 125.074 2.834 135c5.936-8.084 16.68-17.801 30.391-27.371l3.113-4.484-1.193-1.651z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M159.783 102.467c3.523-3.102 6.449-6.33 8.801-9.467-.078-.091-.154-.182-.234-.272a15.087 15.087 0 0 0-2.041-1.925c-1.613 3.067-3.852 6.455-6.803 9.891.129.546.221 1.138.277 1.773z"
                                            fill="currentColor"
                                            className="fill-white dark:fill-neutral-900"
                                        />
                                    </g>
                                </svg>

                                <svg
                                    className="mx-auto size-16 text-gray-500 sm:mx-0 md:size-20 lg:size-24 dark:text-neutral-500"
                                    viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2500"
                                    height="610">
                                    <path
                                        d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            {/* <!-- End Clients --> */}
                        </div>

                        <div className="-z-1 w-85 h-85 absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-dashed border-violet-200 dark:border-violet-900/60"></div>
                        <div className="-z-1 absolute start-1/2 top-1/2 h-[575px] w-[575px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-dashed border-violet-200 opacity-80 dark:border-violet-900/60"></div>
                        <div className="-z-1 absolute start-1/2 top-1/2 h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-dashed border-violet-200 opacity-60 dark:border-violet-900/60"></div>
                        <div className="-z-1 absolute start-1/2 top-1/2 h-[1080px] w-[1080px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-dashed border-violet-200 opacity-40 dark:border-violet-900/60"></div>
                    </div>
                    {/* <!-- End Hero --> */}
                </div>

                {/* <!-- Testimonials --> */}
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div aria-hidden="true" className="-z-1 absolute start-0 flex">
                            <div className="h-75 w-[1036px] bg-purple-200 opacity-20 blur-3xl dark:bg-purple-900 dark:opacity-20"></div>
                        </div>

                        <div className="lg:grid lg:grid-cols-6 lg:items-center lg:gap-8">
                            <div className="hidden lg:col-span-2 lg:block">
                                <Image
                                    height={275}
                                    width={410}
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                                    alt="Avatar"
                                />
                            </div>

                            <div className="lg:col-span-4">
                                <blockquote>
                                    <svg
                                        className="mb-4 h-auto w-24"
                                        viewBox="-0.3 0 320.3999999999999 99.9"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2500"
                                        height="779">
                                        <path
                                            d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z"
                                            fill="#ff5a5f"
                                        />
                                    </svg>

                                    <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
                                        To say that switching to Preline has been life-changing is
                                        an understatement. My business has tripled and I got my life
                                        back.
                                    </p>

                                    <footer className="mt-6">
                                        <div className="flex items-center">
                                            <div className="shrink-0 lg:hidden">
                                                <Image
                                                    height={48}
                                                    width={48}
                                                    className="size-12 rounded-full"
                                                    src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                                    alt="Avatar"
                                                />
                                            </div>
                                            <div className="ms-4 lg:ms-0">
                                                <p className="font-medium text-gray-800 dark:text-neutral-200">
                                                    Nicole Grazioso
                                                </p>
                                                <p className="text-sm text-gray-600 dark:text-neutral-400">
                                                    Head of Finance
                                                </p>
                                            </div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                    <div className="grid gap-10 md:grid-cols-5">
                        <div className="md:col-span-2">
                            <div className="max-w-xs">
                                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                                    Frequently
                                    <br />
                                    asked questions
                                </h2>
                                <p className="mt-1 hidden text-gray-600 md:block dark:text-neutral-400">
                                    Answers to the most frequently asked questions.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                                <div
                                    className="hs-accordion active pb-3"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-one">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="true"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                        Can I cancel at anytime?
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            Yes, you can cancel anytime no questions are asked while
                                            you cancel but we would highly appreciate if you will
                                            give us some feedback.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-two">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="false"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                                        My team has credits. How do we use them?
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            Once your team signs up for a subscription plan. This is
                                            where we sit down, grab a cup of coffee and dial in the
                                            details.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-three">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="false"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                                        How does DraftScripts pricing work?
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            Our subscriptions are tiered. Understanding the task at
                                            hand and ironing out the wrinkles is key.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-four">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="false"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                                        How secure is Preline?
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            Protecting the data you trust to Preline is our first
                                            priority. This part is really crucial in keeping the
                                            project in line to completion.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-five">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="false"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                                        How do I get access to a theme I purchased?
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            If you lose the link for a theme you purchased, don{"'"}
                                            t panic! We{"'"}ve got you covered. You can login to
                                            your account, tap your avatar in the upper right corner,
                                            and tap Purchases. If you didn{"'"}t create a login or
                                            can{"'"}t remember the information, you can use our
                                            handy Redownload page, just remember to use the same
                                            email you originally made your purchases with.
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="hs-accordion pb-3 pt-6"
                                    id="hs-basic-with-title-and-arrow-stretched-heading-six">
                                    <button
                                        className="hs-accordion-toggle focus:outline-hidden group inline-flex w-full items-center justify-between gap-x-3 rounded-lg pb-3 text-start font-semibold text-gray-800 transition hover:text-gray-500 focus:text-gray-500 md:text-lg dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                                        aria-expanded="false"
                                        aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                        Upgrade License Type
                                        <svg
                                            className="hs-accordion-active:hidden block size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                        <svg
                                            className="hs-accordion-active:block hidden size-5 shrink-0 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <div
                                        id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                        role="region"
                                        aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                        <p className="text-gray-600 dark:text-neutral-400">
                                            There may be times when you need to upgrade your license
                                            from the original type you purchased and we have a
                                            solution that ensures you can apply your original
                                            purchase cost to the new license purchase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mx-auto mt-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
                    <div className="col-span-full hidden lg:col-span-1 lg:block">
                        <a
                            className="focus:outline-hidden flex-none text-xl font-semibold text-black focus:opacity-80 dark:text-white"
                            href="#"
                            aria-label="Brand">
                            Brand
                        </a>
                        <p className="mt-3 text-xs text-gray-600 sm:text-sm dark:text-neutral-400">
                            © 2025 Preline Labs.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
                            Product
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Pricing
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Changelog
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Docs
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Download
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
                            Company
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    About us
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Blog
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Careers
                                </a>{' '}
                                <span className="inline text-violet-600 dark:text-violet-500">
                                    — We{"'"}re hiring
                                </span>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Customers
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Newsroom
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Sitemap
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
                            Resources
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Community
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Help & Support
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    eBook
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    What{"'"}s New
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Status
                                </a>
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
                            Developers
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Api
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Status
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    GitHub
                                </a>{' '}
                                <span className="inline text-violet-600 dark:text-violet-500">
                                    — New
                                </span>
                            </p>
                        </div>

                        <h4 className="mt-7 text-xs font-semibold uppercase text-gray-900 dark:text-neutral-100">
                            Industries
                        </h4>

                        <div className="mt-3 grid space-y-3 text-sm">
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Financial Services
                                </a>
                            </p>
                            <p>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Education
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5 border-t border-gray-200 pt-5 dark:border-neutral-700">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="hs-dropdown relative inline-flex [--placement:top-left]">
                                <button
                                    id="hs-footer-language-dropdown"
                                    type="button"
                                    className="hs-dropdown-toggle shadow-2xs focus:outline-hidden inline-flex items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 focus:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Dropdown">
                                    <svg
                                        className="size-3 shrink-0 rounded-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="flag-icon-css-us1"
                                        viewBox="0 0 512 512">
                                        <g fillRule="evenodd">
                                            <g strokeWidth="1pt">
                                                <path
                                                    fill="#bd3d44"
                                                    d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                    transform="scale(3.9385)"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                    transform="scale(3.9385)"
                                                />
                                            </g>
                                            <path
                                                fill="#192f5d"
                                                d="M0 0h98.8v70H0z"
                                                transform="scale(3.9385)"
                                            />
                                            <path
                                                fill="#fff"
                                                d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                transform="scale(3.9385)"
                                            />
                                        </g>
                                    </svg>
                                    English (US)
                                    <svg
                                        className="hs-dropdown-open:rotate-180 size-4 shrink-0 text-gray-500 dark:text-neutral-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>

                                <div
                                    className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 hidden w-40 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] dark:divide-neutral-700 dark:border dark:border-neutral-700 dark:bg-neutral-800"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-footer-language-dropdown">
                                    <a
                                        className="focus:outline-hidden flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                        href="#">
                                        <svg
                                            className="size-3.5 shrink-0 rounded-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="flag-icon-css-us"
                                            viewBox="0 0 512 512">
                                            <g fillRule="evenodd">
                                                <g strokeWidth="1pt">
                                                    <path
                                                        fill="#bd3d44"
                                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                        transform="scale(3.9385)"
                                                    />
                                                </g>
                                                <path
                                                    fill="#192f5d"
                                                    d="M0 0h98.8v70H0z"
                                                    transform="scale(3.9385)"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                    transform="scale(3.9385)"
                                                />
                                            </g>
                                        </svg>
                                        English (US)
                                    </a>
                                    <a
                                        className="focus:outline-hidden flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                        href="#">
                                        <svg
                                            className="size-3 shrink-0 rounded-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="flag-icon-css-de"
                                            viewBox="0 0 512 512">
                                            <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                            <path d="M0 0h512v170.7H0z" />
                                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                        </svg>
                                        Deutsch
                                    </a>
                                    <a
                                        className="focus:outline-hidden flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                        href="#">
                                        <svg
                                            className="size-3 shrink-0 rounded-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="flag-icon-css-dk"
                                            viewBox="0 0 512 512">
                                            <path fill="#c8102e" d="M0 0h512.1v512H0z" />
                                            <path fill="#fff" d="M144 0h73.1v512H144z" />
                                            <path fill="#fff" d="M0 219.4h512.1v73.2H0z" />
                                        </svg>
                                        Dansk
                                    </a>
                                    <a
                                        className="focus:outline-hidden flex items-center gap-x-2 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                        href="#">
                                        <svg
                                            className="size-3 shrink-0 rounded-full"
                                            xmlns="http://www.w3.org/2000/svg"
                                            id="flag-icon-css-it"
                                            viewBox="0 0 512 512">
                                            <g fillRule="evenodd" strokeWidth="1pt">
                                                <path fill="#fff" d="M0 0h512v512H0z" />
                                                <path fill="#009246" d="M0 0h170.7v512H0z" />
                                                <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                                            </g>
                                        </svg>
                                        Italiano
                                    </a>
                                </div>
                            </div>

                            <div className="space-x-4 text-sm">
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Terms
                                </a>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Privacy
                                </a>
                                <a
                                    className="focus:outline-hidden inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    Status
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="mt-3 sm:hidden">
                                <a
                                    className="focus:outline-hidden flex-none text-xl font-semibold text-black focus:opacity-80 dark:text-white"
                                    href="#"
                                    aria-label="Brand">
                                    Brand
                                </a>
                                <p className="mt-1 text-xs text-gray-600 sm:text-sm dark:text-neutral-400">
                                    © 2025 Preline Labs.
                                </p>
                            </div>

                            {/* <!-- Social Brands --> */}
                            <div className="space-x-4">
                                <a
                                    className="focus:outline-hidden inline-block text-gray-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    <svg
                                        className="size-4 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </a>
                                <a
                                    className="focus:outline-hidden inline-block text-gray-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    <svg
                                        className="size-4 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                                <a
                                    className="focus:outline-hidden inline-block text-gray-500 hover:text-gray-800 focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                    href="#">
                                    <svg
                                        className="size-4 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                                    </svg>
                                </a>
                            </div>
                            {/* <!-- End Social Brands --> */}
                        </div>
                        {/*  */}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;

