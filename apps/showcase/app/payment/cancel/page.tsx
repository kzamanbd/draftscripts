import React from 'react';

export const metadata = {
    name: 'PaymentCancel',
    title: 'Payment Cancel',
    description: 'Payment cancel page for Showcase'
};

function PaymentCancel() {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
                    Payment Cancelled
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
                    Your payment has been cancelled. Please try again.
                </p>
            </div>
        </section>
    );
}

export default PaymentCancel;

