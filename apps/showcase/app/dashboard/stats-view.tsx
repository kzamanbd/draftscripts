export default function SassDashboard() {
    const users = [
        {
            name: 'Amanda Harvey',
            company: 'Notion Ltd.',
            address: '4222 River Rd, 31904',
            email: 'amanda@site.so',
            phone: '',
            avatar: 'AH'
        },
        {
            name: 'Rachel Doe',
            company: 'Prosperops',
            address: '2952 S Peoria Ave, 74114',
            email: 'rachel@site.so',
            phone: 'United States +297 000-00-00',
            avatar: 'RD'
        },
        {
            name: 'Costa Quinn',
            company: 'Notion Ltd.',
            address: '255 Dock Ln, 37825',
            email: 'costa@site.so',
            phone: 'Brasil +1 000-00-00',
            avatar: 'CQ'
        },
        {
            name: 'Anna Richard',
            company: 'Guideline',
            address: '4970 Park Ave W, 44273',
            email: 'anne@site.so',
            phone: 'United Kingdom +1 230-28-00',
            avatar: 'AR'
        },
        {
            name: 'Bob Dean',
            company: 'Guideline',
            address: '4222 River Rd, 31904',
            email: 'bob@site.so',
            phone: 'Italy +33 000-00-00',
            avatar: 'BD'
        },
        {
            name: 'Mark Colbert',
            company: 'Prosperops',
            address: '2952 S Peoria Ave, 74114',
            email: 'mark@site.so',
            phone: 'United States +420 000-00-00',
            avatar: 'MC'
        },
        {
            name: 'Finch Hoot',
            company: 'Slack',
            address: '1818 H St NW, 20433',
            email: 'finch@site.so',
            phone: '',
            avatar: 'FH'
        },
        {
            name: 'Ella Lauda',
            company: 'Github',
            address: '3 Grace Dr, 08857',
            email: 'ella@site.so',
            phone: 'United Kingdom +1 212-00-11',
            avatar: 'EL'
        },
        {
            name: 'Lewis Clarke',
            company: 'Github',
            address: '4531 W Saile Dr, 14020',
            email: 'lewis@site.so',
            phone: '',
            avatar: 'LC'
        },
        {
            name: 'Lori Hunter',
            company: 'Slack',
            address: '2126 N Eagle Rd #120, 83646',
            email: 'lori@site.so',
            phone: '',
            avatar: 'LH'
        },
        {
            name: 'David Harrison',
            company: 'Dropbox',
            address: '3817 Beryl Rd, 27607',
            email: 'david@site.so',
            phone: 'United States +492-00-11',
            avatar: 'DH'
        },
        {
            name: 'Chris Mathew',
            company: 'Prosperops',
            address: '4807 3rd Ave, 68845',
            email: 'chris@site.so',
            phone: 'Brasil +234-95-86',
            avatar: 'CM'
        }
    ];

    return (
        <>
            {/* Page Title */}
            <div className="mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            {/* Stats Grid */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {/* Users Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                                USERS
                            </p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">17,482</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium text-green-500">37.3%</span>
                                <span className="ml-1 text-sm text-gray-500">from 12,142</span>
                            </div>
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
                </div>

                {/* Click Rate Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                                AVG. CLICK RATE
                            </p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">52,639</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium text-green-500">14.5%</span>
                                <span className="ml-1 text-sm text-gray-500">from 48,503</span>
                            </div>
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
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Sessions Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                                SESSIONS
                            </p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">21,336</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium text-green-500">4.1%</span>
                                <span className="ml-1 text-sm text-gray-500">from 20,229</span>
                            </div>
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
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Session Duration Card */}
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-wide text-gray-600">
                                SESSION DURATION
                            </p>
                            <p className="mt-2 text-3xl font-bold text-gray-900">5m 10s</p>
                            <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium text-gray-500">0.0%</span>
                                <span className="ml-1 text-sm text-gray-500">from 5m 10s</span>
                            </div>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100">
                            <svg
                                className="h-4 w-4 text-orange-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Import Data Section */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <svg
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                            />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Import data</h3>
                        <p className="mt-1 text-gray-600">
                            See and talk to your users and leads immediately by importing your data
                            into the Preline platform.
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="mb-3 text-sm font-medium text-gray-900">IMPORT USERS FROM:</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center">
                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-red-100">
                                    <span className="text-sm font-semibold text-red-600">G</span>
                                </div>
                                <span className="font-medium text-gray-900">Gmail</span>
                            </div>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                Launch importer
                            </button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center">
                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-gray-100">
                                    <span className="text-sm font-semibold text-gray-600">N</span>
                                </div>
                                <span className="font-medium text-gray-900">Notion</span>
                            </div>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                Launch importer
                            </button>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                            <div className="flex items-center">
                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded bg-green-100">
                                    <span className="text-sm font-semibold text-green-600">C</span>
                                </div>
                                <span className="font-medium text-gray-900">CSV</span>
                            </div>
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                                Launch importer
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-600">
                    Or you can sync data to Preline to ensure your data is always up-to-date.
                </p>
            </div>

            {/* Monthly Expenses Section */}
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Monthly expenses</h3>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <button className="rounded border border-gray-300 px-3 py-1 text-sm hover:bg-gray-50">
                                    This week
                                </button>
                                <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                                    Last week
                                </button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-green-600">35%</span>
                                <div className="flex items-center space-x-1">
                                    <span className="text-sm text-green-600">25.3%</span>
                                    <span className="text-sm text-gray-500">New</span>
                                    <span className="text-sm text-red-500">Overdue</span>
                                </div>
                            </div>
                            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                                Import
                            </button>
                            <button className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                                New contact
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <tbody className="divide-y divide-gray-200 bg-white">
                            {users.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
                                                <span className="text-sm font-medium text-gray-600">
                                                    {user.avatar}
                                                </span>
                                            </div>
                                            <span className="font-medium text-gray-900">
                                                {user.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-900">
                                        {user.company}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                                        {user.address}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                                        {user.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                                        {user.phone}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

