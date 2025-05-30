// @ts-ignore
import { useConfirm } from '@draftscripts/react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const [count, setCount] = useState(0);
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
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button className="btn" onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
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
        </>
    );
}

export default App;
