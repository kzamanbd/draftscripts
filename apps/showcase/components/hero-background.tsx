'use client';

import { ThemeSwitch } from '@repo/shared';
import { BarChart2, Circle, Cloud, Hexagon, PieChart, Star, Triangle } from 'lucide-react';

const HeroBackground = () => {
    return (
        <>
            <div className="absolute left-10 top-60 hidden text-teal-500 sm:inline-block md:left-24">
                <BarChart2 size={30} />
            </div>

            <div className="animate-bell absolute right-2/3 top-28 z-50 hidden sm:inline-block">
                <ThemeSwitch />
            </div>

            <div className="animate-move absolute bottom-10 right-20 hidden text-fuchsia-500 sm:inline-block md:right-48">
                <PieChart size={30} />
            </div>

            <div className="absolute right-10 top-36 hidden text-yellow-500 sm:inline-block md:right-24">
                <Star size={30} />
            </div>

            <div className="animate-move-rotate absolute right-1/4 top-1/3 hidden text-green-500 sm:inline-block">
                <Triangle size={30} />
            </div>

            <div className="absolute bottom-48 left-2/3 hidden animate-pulse text-blue-500 sm:inline-block">
                <Cloud size={30} />
            </div>

            <div className="absolute bottom-20 left-16 hidden animate-bounce text-amber-500 sm:inline-block md:left-40">
                <Circle size={30} />
            </div>

            <div className="absolute left-1/4 top-96 hidden animate-spin text-purple-500 sm:inline-block">
                <Hexagon size={30} />
            </div>

            <ul className="hero-circles">
                <li className="bg-primary-300"></li>
                <li className="bg-purple-300"></li>
                <li className="bg-indigo-300"></li>
                <li className="bg-emerald-300"></li>
                <li className="bg-teal-300"></li>
                <li className="bg-pink-300"></li>
                <li className="bg-blue-300"></li>
                <li className="bg-orange-300"></li>
                <li className="bg-yellow-300"></li>
                <li className="bg-gray-200 dark:bg-gray-700"></li>
            </ul>
        </>
    );
};

export default HeroBackground;
