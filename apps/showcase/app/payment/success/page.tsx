import Link from 'next/link';

export const metadata = {
    title: 'Payment Success'
};

function PaymentSuccess() {
    return (
        <section className="bg-white py-8 antialiased md:py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                    Thanks for your order!
                </h2>
                <p className="mb-6 text-gray-500 md:mb-8 dark:text-gray-400">
                    Your order{' '}
                    <a
                        href="#"
                        className="font-medium text-gray-900 hover:underline dark:text-white">
                        #7564804
                    </a>{' '}
                    will be processed within 24 hours during working days. We will notify you by
                    email once your order has been shipped.
                </p>
                <div className="mb-6 space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 sm:space-y-2 md:mb-8 dark:border-gray-700 dark:bg-gray-800">
                    <dl className="items-center justify-between gap-4 sm:flex">
                        <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
                            Date
                        </dt>
                        <dd className="font-medium text-gray-900 sm:text-end dark:text-white">
                            14 May 2024
                        </dd>
                    </dl>
                    <dl className="items-center justify-between gap-4 sm:flex">
                        <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
                            Payment Method
                        </dt>
                        <dd className="font-medium text-gray-900 sm:text-end dark:text-white">
                            JPMorgan monthly installments
                        </dd>
                    </dl>
                    <dl className="items-center justify-between gap-4 sm:flex">
                        <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
                            Name
                        </dt>
                        <dd className="font-medium text-gray-900 sm:text-end dark:text-white">
                            Flowbite Studios LLC
                        </dd>
                    </dl>
                    <dl className="items-center justify-between gap-4 sm:flex">
                        <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
                            Address
                        </dt>
                        <dd className="font-medium text-gray-900 sm:text-end dark:text-white">
                            34 Scott Street, San Francisco, California, USA
                        </dd>
                    </dl>
                    <dl className="items-center justify-between gap-4 sm:flex">
                        <dt className="mb-1 font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
                            Phone
                        </dt>
                        <dd className="font-medium text-gray-900 sm:text-end dark:text-white">
                            +(123) 456 7890
                        </dd>
                    </dl>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="#"
                        className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4">
                        Track your order
                    </a>
                    <Link
                        href="/"
                        className="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                        Return to shopping
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PaymentSuccess;
