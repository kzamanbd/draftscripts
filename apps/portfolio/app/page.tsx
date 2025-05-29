import { ApplicationLogo } from '@repo/shared';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Home',
    description: 'Pricing page for our application'
};

const Home = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Welcome to the Portfolio App</h1>
            <p className="mt-4">This is the home page of the portfolio application.</p>
            <div className="mt-6">
                <Link href="/about" className="text-blue-500 hover:underline">
                    Go to About Page
                </Link>
            </div>
            <div className="mt-6">
                <ApplicationLogo />
            </div>
            <div className="mt-6">
                <Image
                    src="/images/portfolio-image.jpg"
                    alt="Portfolio Image"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default Home;

