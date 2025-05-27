'use client';

const BillingView = () => {
    const plans = [
        {
            name: 'Starter',
            price: '$19',
            period: 'per month',
            description: 'Perfect for small teams getting started',
            features: [
                'Up to 5 team members',
                '10GB storage',
                'Basic analytics',
                'Email support',
                'Standard integrations'
            ],
            current: false,
            popular: false
        },
        {
            name: 'Professional',
            price: '$49',
            period: 'per month',
            description: 'Ideal for growing businesses',
            features: [
                'Up to 25 team members',
                '100GB storage',
                'Advanced analytics',
                'Priority support',
                'All integrations',
                'Custom workflows'
            ],
            current: true,
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: 'per month',
            description: 'For large organizations with advanced needs',
            features: [
                'Unlimited team members',
                '1TB storage',
                'Enterprise analytics',
                '24/7 phone support',
                'Custom integrations',
                'Advanced security',
                'Dedicated account manager'
            ],
            current: false,
            popular: false
        }
    ];

    const invoices = [
        {
            id: 'INV-2024-001',
            date: 'May 1, 2024',
            amount: '$49.00',
            status: 'Paid',
            plan: 'Professional',
            downloadUrl: '#'
        },
        {
            id: 'INV-2024-002',
            date: 'April 1, 2024',
            amount: '$49.00',
            status: 'Paid',
            plan: 'Professional',
            downloadUrl: '#'
        },
        {
            id: 'INV-2024-003',
            date: 'March 1, 2024',
            amount: '$49.00',
            status: 'Paid',
            plan: 'Professional',
            downloadUrl: '#'
        },
        {
            id: 'INV-2024-004',
            date: 'February 1, 2024',
            amount: '$19.00',
            status: 'Paid',
            plan: 'Starter',
            downloadUrl: '#'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Current Plan Overview */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
                        <p className="mt-1 text-gray-600">
                            You are currently on the Professional plan
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                            $49
                            <span className="text-base font-normal text-gray-500">/month</span>
                        </p>
                        <p className="text-sm text-gray-500">Next billing: June 1, 2024</p>
                    </div>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                        Upgrade Plan
                    </button>
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Cancel Subscription
                    </button>
                    <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Update Payment Method
                    </button>
                </div>
            </div>

            {/* Usage Overview */}
            <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Team Members</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900">
                                12
                                <span className="text-base font-normal text-gray-500">/25</span>
                            </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                            <svg
                                className="h-4 w-4 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-blue-600"
                                style={{ width: '48%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Storage Used</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900">
                                67.5
                                <span className="text-base font-normal text-gray-500">
                                    GB/100GB
                                </span>
                            </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100">
                            <svg
                                className="h-4 w-4 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-green-600"
                                style={{ width: '67.5%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">API Calls</p>
                            <p className="mt-2 text-2xl font-bold text-gray-900">
                                8.2k
                                <span className="text-base font-normal text-gray-500">/10k</span>
                            </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100">
                            <svg
                                className="h-4 w-4 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="h-2 rounded-full bg-gray-200">
                            <div
                                className="h-2 rounded-full bg-purple-600"
                                style={{ width: '82%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Available Plans */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="mb-6 text-lg font-semibold text-gray-900">Available Plans</h2>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Starter Plan */}
                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
                            <p className="text-sm text-gray-600">
                                Perfect for small teams getting started
                            </p>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-gray-900">$19</span>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <ul className="mb-6 space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Up to 5 team members
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                10 GB storage
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Basic support
                            </li>
                        </ul>
                        <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Current Plan
                        </button>
                    </div>

                    {/* Professional Plan */}
                    <div className="relative rounded-lg border-2 border-blue-500 p-6">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                            <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                                Current Plan
                            </span>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Professional</h3>
                            <p className="text-sm text-gray-600">
                                Best for growing teams and businesses
                            </p>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-gray-900">$49</span>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <ul className="mb-6 space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Up to 25 team members
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                100 GB storage
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Priority support
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Advanced analytics
                            </li>
                        </ul>
                        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                            Manage Plan
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
                            <p className="text-sm text-gray-600">
                                Advanced features for large organizations
                            </p>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-gray-900">$99</span>
                            <span className="text-gray-600">/month</span>
                        </div>
                        <ul className="mb-6 space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Unlimited team members
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                1 TB storage
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                24/7 dedicated support
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 h-4 w-4 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Custom integrations
                            </li>
                        </ul>
                        <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Upgrade to Enterprise
                        </button>
                    </div>
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Payment Method</h2>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Update
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                        <svg
                            className="h-6 w-6 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/2028</p>
                    </div>
                </div>
            </div>

            {/* Billing History */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">Billing History</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Invoice
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Plan
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {invoices.map((invoice, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {invoice.id}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {invoice.date}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                        {invoice.plan}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                        {invoice.amount}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <span className="inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-blue-600 hover:text-blue-700">
                                        <button className="font-medium">Download</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BillingView;

