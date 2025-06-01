import HeroBackground from '@/components/hero-background';
import { getTitle } from '@repo/shared/utils';
import Link from 'next/link';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';
import { FaBloggerB } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import { SiAfterpay } from 'react-icons/si';
import { TbFileCv } from 'react-icons/tb';

export const metadata = {
    title: getTitle('Features')
};

// Card data structure
const cardData = [
    {
        title: 'Resume',
        description:
            'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        icon: TbFileCv,
        iconColor: 'text-primary-500',
        bgColor: 'bg-primary-100',
        darkBgColor: 'dark:bg-primary-900',
        link: '#'
    },
    {
        title: 'Portfolio',
        description:
            'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        icon: AiOutlineFundProjectionScreen,
        iconColor: 'text-purple-500',
        bgColor: 'bg-purple-100',
        darkBgColor: 'dark:bg-purple-900',
        link: '#'
    },
    {
        title: 'Pricing',
        description:
            'Get a clear view of your business with our pricing plan. We have a plan for every business, no matter how big or small.',
        icon: SiAfterpay,
        bgColor: 'bg-indigo-100',
        iconColor: 'text-indigo-500',
        darkBgColor: 'dark:bg-indigo-900',
        link: '#'
    },
    {
        title: 'Payment',
        description:
            'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
        icon: MdPayments,
        bgColor: 'bg-green-100',
        iconColor: 'text-green-500',
        darkBgColor: 'dark:bg-green-900',
        link: '/checkout'
    },
    {
        title: 'Blog',
        description:
            'Get the most out of your business with our blog. We have a blog for every business, no matter how big or small.',
        icon: FaBloggerB,
        bgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-500',
        darkBgColor: 'dark:bg-yellow-900',
        link: '/blog'
    },
    {
        title: 'Operations',
        description:
            "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
        icon: CiSettings,
        bgColor: 'bg-fuchsia-100',
        iconColor: 'text-fuchsia-500',
        darkBgColor: 'dark:bg-fuchsia-900',
        link: '#'
    }
];

export default function Features() {
    return (
        <>
            <HeroBackground />
            <section className="feature-page relative z-[1] mx-auto flex max-w-7xl flex-col gap-4 p-6 md:min-h-screen lg:p-8">
                <div className="flex flex-1 items-center">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                        {cardData.map((card, index) => (
                            <Link key={index} href={card.link} className="card card-body">
                                <div className="mb-4 flex items-center gap-4">
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full ${card.iconColor} ${card.bgColor} lg:h-12 lg:w-12 ${card.darkBgColor}`}>
                                        <card.icon size="24" />
                                    </div>
                                    <h3 className="text-xl font-bold dark:text-white">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {card.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
