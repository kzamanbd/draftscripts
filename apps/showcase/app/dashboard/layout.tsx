import Link from 'next/link';
import { ReactNode } from 'react';

interface DashboardRootLayoutProps {
    children: ReactNode;
}

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
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
            name: 'Alerts',
            href: '#',
            key: 'alerts',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
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
            href: '/billing',
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
        },
        {
            name: 'Search',
            href: '#',
            key: 'search',
            badge: 'New',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            )
        },
        {
            name: 'Empty Contents',
            href: '#',
            key: 'empty',
            icon: (
                <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
            )
        }
    ];

    const activeTab = 'dashboard'; // This can be dynamically set based on the current route or state
    const title = 'Dashboard'; // This can also be dynamically set based on the current page

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Horizontal Header */}
            <div className="border-b border-gray-200 bg-white shadow-sm">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            {/* Brand */}
                            <Link href="/dashboard" className="flex items-center space-x-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                                    <span className="text-sm font-bold text-white">P</span>
                                </div>
                                <span className="text-xl font-semibold text-gray-900">Preline</span>
                            </Link>

                            {/* Horizontal Navigation */}
                            <nav className="flex items-center space-x-6">
                                {navigationItems.map((item) => {
                                    const isActive = activeTab === item.key;
                                    const baseClasses =
                                        'flex items-center rounded-md px-3 py-2 text-sm font-medium';
                                    const activeClasses = 'bg-blue-50 text-blue-700';
                                    const inactiveClasses =
                                        'text-gray-600 hover:bg-gray-50 hover:text-gray-900';

                                    const iconClasses = isActive
                                        ? 'text-blue-500'
                                        : 'text-gray-400';

                                    return (
                                        <Link
                                            key={item.key}
                                            href={item.href}
                                            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
                                            <span className={iconClasses}>{item.icon}</span>
                                            {item.name}
                                            {item.badge && (
                                                <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* Header Actions */}
                        <div className="flex items-center space-x-4">
                            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                                Invite users
                            </button>
                            <div className="flex items-center space-x-3">
                                <button className="p-2 text-gray-400 hover:text-gray-500">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 17h5l-5 5-5-5h5v-6a3 3 0 00-3-3H6a3 3 0 00-3 3v6h5"
                                        />
                                    </svg>
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-500">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 17h5l-5 5-5-5h5v-6a3 3 0 00-3-3H6a3 3 0 00-3 3v6h5"
                                        />
                                    </svg>
                                </button>
                                <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="overflow-auto">
                {/* Page Title */}
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                </div>

                {/* Page Content */}
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
}

