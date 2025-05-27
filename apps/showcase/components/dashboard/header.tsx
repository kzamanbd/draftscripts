import ThemeSwitch from '@/components/theme-switch';
import Link from 'next/link';
import LogoutButton from './logout';

const DashboardHeader = () => {
    const navigationItems = [
        {
            name: 'Dashboard',
            href: '/dashboard',
            key: 'dashboard',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2V5z"
                    />
                </svg>
            )
        },
        {
            name: 'Integrations',
            href: '#',
            key: 'integrations',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                </svg>
            )
        },
        {
            name: 'Billing',
            href: '/dashboard/billing',
            key: 'billing',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                </svg>
            )
        }
    ];

    const activeTab = 'dashboard'; // This can be dynamically set based on the current route or state
    return (
        <header className="shadow-xs border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Left side: Brand + Navigation */}
                    <div className="flex items-center space-x-4 sm:space-x-8">
                        {/* Brand */}
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <div className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded-lg">
                                <span className="text-sm font-bold text-white">P</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900 sm:text-xl">
                                DraftScripts
                            </span>
                        </Link>

                        {/* Desktop Navigation - Hidden on mobile */}
                        <nav className="hidden items-center gap-4 lg:flex">
                            {navigationItems.map((item) => {
                                const isActive = activeTab === item.key;
                                const baseClasses =
                                    'flex items-center rounded-md px-3 py-2 text-sm font-medium';
                                const activeClasses = 'bg-primary-50 text-primary-700';
                                const inactiveClasses =
                                    'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

                                const iconClasses = isActive ? 'text-primary-500' : 'text-gray-400';

                                return (
                                    <Link
                                        key={item.key}
                                        href={item.href}
                                        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                                        <span className={iconClasses}>{item.icon}</span>
                                        <span className="hidden xl:inline">{item.name}</span>
                                    </Link>
                                );
                            })}

                            {/* Desktop Search Button */}
                            <button
                                type="button"
                                data-hs-overlay="#global-search"
                                className="hidden items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 md:flex">
                                <span className="text-gray-400">
                                    <svg
                                        className="mr-2 h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </span>
                                <span className="hidden lg:inline">Search</span>
                                <span className="bg-primary-100 text-primary-800 ml-2 hidden rounded px-2 py-0.5 text-xs font-medium lg:inline">
                                    New
                                </span>
                            </button>
                        </nav>
                    </div>

                    {/* Right side: Actions + User Menu */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Mobile Search Button */}
                        <button
                            type="button"
                            data-hs-overlay="#global-search"
                            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 md:hidden">
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Invite Button - Hidden on small screens */}
                        <button className="bg-primary-600 hover:bg-primary-700 hidden rounded-md px-4 py-2 text-sm font-medium text-white sm:flex">
                            <span className="hidden md:inline">Invite users</span>
                            <span className="md:hidden">Invite</span>
                        </button>

                        {/* Theme Switch - Always visible */}
                        <div className="hidden sm:block">
                            <ThemeSwitch />
                        </div>

                        {/* Notification and Help buttons - Hidden on mobile */}
                        <div className="hidden items-center gap-3 sm:flex">
                            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                <svg
                                    className="h-5 w-5 shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                    <path d="M12 17h.01"></path>
                                </svg>
                            </button>
                            <button className="relative rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                <svg
                                    className="h-5 w-5 shrink-0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                                </svg>
                                <span className="tw-bell-icon count">
                                    <span className="tw-icon-badge"></span>
                                    <span className="tw-badge-dot">5</span>
                                </span>
                            </button>
                        </div>

                        {/* User Avatar - Always visible */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right]">
                            <button type="button" className="hs-dropdown-toggle flex items-center">
                                <div className="user-avatar bg-primary flex h-8 w-8 items-center justify-center rounded-full text-white">
                                    P
                                </div>
                            </button>

                            <ul className="hs-dropdown-menu dropdown-menu user-profile-dropdown">
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link mb-2">
                                        <div className="shrink-0">
                                            <div className="user-avatar bg-primary flex items-center justify-center rounded-full text-white">
                                                P
                                            </div>
                                        </div>
                                        <div className="px-1">
                                            <p className="font-medium leading-5 text-gray-900 dark:text-gray-300">
                                                Kamruzzaman
                                            </p>
                                            <p className="text-xs leading-5 text-gray-500 dark:text-gray-300">
                                                Software Engineer
                                            </p>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-group-divider"></li>
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link">
                                        <svg
                                            className="mr-2 h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                            />
                                        </svg>
                                        <span>Billing</span>
                                    </a>
                                </li>
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link">
                                        <svg
                                            className="mr-2 h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link">
                                        <svg
                                            className="mr-2 h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        <span>My Account</span>
                                    </a>
                                </li>
                                <li className="user-group-divider"></li>
                                <li className="user-menu-item">
                                    <div className="user-menu-link justify-between">
                                        <span>Dark Mode</span>
                                        <label className="relative mb-0 h-6 w-12">
                                            <input
                                                type="checkbox"
                                                className="theme-switcher peer absolute z-10 h-full w-full cursor-pointer opacity-0"
                                                id="custom_switch_checkbox4"
                                            />
                                            <span className="dark:before:bg-white-dark peer-checked:bg-primary dark:bg-dark block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:before:left-7 dark:peer-checked:before:bg-white"></span>
                                        </label>
                                    </div>
                                </li>
                                <li className="user-group-divider"></li>
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link justify-between">
                                        Customization
                                        <span className="border-primary-200 bg-primary-100 text-primary dark:bg-primary/20 rounded border px-1.5 py-0.5 text-xs font-medium">
                                            New
                                        </span>
                                    </a>
                                </li>
                                <li className="user-menu-item">
                                    <a href="#" className="user-menu-link">
                                        My Subscription
                                    </a>
                                </li>
                                <li className="user-menu-item">
                                    <LogoutButton className="user-menu-link">Sign out</LogoutButton>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Menu Button - Only visible on small screens */}
                        <button
                            type="button"
                            className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 lg:hidden"
                            data-hs-overlay="#mobile-menu">
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div id="mobile-menu" className="hs-overlay hidden [--auto-close:lg] lg:hidden">
                <div className="hs-overlay-open:translate-x-0 fixed left-0 top-0 z-[60] h-full w-full max-w-xs -translate-x-full transform border-r border-gray-200 bg-white transition-all duration-300">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 p-4">
                        <Link href="/dashboard" className="flex items-center space-x-2">
                            <div className="bg-primary-600 flex h-8 w-8 items-center justify-center rounded-lg">
                                <span className="text-sm font-bold text-white">P</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-900">
                                DraftScripts
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100"
                            data-hs-overlay="#mobile-menu">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Navigation */}
                    <nav className="space-y-1 p-4">
                        {navigationItems.map((item) => {
                            const isActive = activeTab === item.key;
                            const baseClasses =
                                'flex items-center w-full rounded-md px-3 py-2 text-sm font-medium';
                            const activeClasses = 'bg-primary-50 text-primary-700';
                            const inactiveClasses =
                                'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

                            const iconClasses = isActive ? 'text-primary-500' : 'text-gray-400';

                            return (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                                    <span className={iconClasses}>{item.icon}</span>
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Mobile Theme Switch */}
                        <div className="mt-4 border-t border-gray-200 pt-4">
                            <div className="flex items-center justify-between px-3 py-2">
                                <span className="text-sm font-medium text-gray-600">Theme</span>
                                <ThemeSwitch />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;

