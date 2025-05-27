import { useConfirm } from './hooks/useConfirm';

function App() {
    const dialog = useConfirm();
    const confirmDialog = async () => {
        try {
            const confirmed = await dialog(
                'Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
                { type: 'confirm', okText: 'Deactivate', cancelText: 'Cancel' }
            );
            if (confirmed) {
                console.log('User confirmed');
            }
        } catch {
            console.log('User cancelled');
        }
    };
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex gap-4">
                <button
                    className="shadow-xs mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={confirmDialog}>
                    Open Confirm Dialog
                </button>
                {/* Success */}
                <button
                    className="shadow-xs mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                        dialog(
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
                            { type: 'success', title: 'Payment successful' }
                        );
                    }}>
                    Open Success Dialog
                </button>
                {/* Error */}
                <button
                    className="shadow-xs mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                        dialog(
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
                            { type: 'error', title: 'Payment failed' }
                        );
                    }}>
                    Open Error Dialog
                </button>
                {/* Warning */}
                <button
                    className="shadow-xs mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                        dialog(
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius aliquam laudantium explicabo pariatur iste dolorem animi vitae error totam. At sapiente aliquam accusamus facere veritatis.',
                            { type: 'warning', title: 'Payment warning' }
                        );
                    }}>
                    Open Warning Dialog
                </button>
            </div>
        </div>
    );
}

export default App;
