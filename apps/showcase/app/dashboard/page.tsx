import DashboardView from './Dashboard';

export const metadata = {
    title: 'Dashboard'
};

const Dashboard = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="mt-4 text-lg">Welcome to your dashboard!</p>
            <DashboardView />
        </div>
    );
};

export default Dashboard;

