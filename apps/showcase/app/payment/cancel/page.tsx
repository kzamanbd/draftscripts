export const metadata = {
    title: 'Payment Cancel'
};

function PaymentCancel() {
    return (
        <section className="bg-white py-8 antialiased md:py-16 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl px-4 2xl:px-0">
                <h2 className="mb-2 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                    Payment Cancelled
                </h2>
                <p className="mb-6 text-gray-500 md:mb-8 dark:text-gray-400">
                    Your payment has been cancelled. Please try again.
                </p>
            </div>
        </section>
    );
}

export default PaymentCancel;
