'use client';

import {
    FiBarChart2,
    FiCircle,
    FiCloud,
    FiHexagon,
    FiPieChart,
    FiStar,
    FiTriangle
} from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const HeroBackground = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
        localStorage.setItem('darkMode', !isDarkMode ? 'true' : 'false');
    };

    useEffect(() => {
        // check local storage for dark mode preference
        const saved = localStorage.getItem('darkMode');
        const darkMode = saved || window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(darkMode === 'true');
        // apply dark mode class to document element
        document.documentElement.classList.toggle('dark');
    }, [isDarkMode]);

    return (
        <>
            <FiBarChart2
                size={30}
                className="absolute left-10 top-60 hidden text-teal-500 sm:inline-block md:left-24"
            />
            {isDarkMode ? (
                <CiDark
                    size={30}
                    onClick={toggleDarkMode}
                    className="animate-bell absolute right-2/3 top-28 hidden text-red-500 sm:inline-block"
                />
            ) : (
                <MdOutlineLightMode
                    size={30}
                    onClick={toggleDarkMode}
                    className="animate-bell absolute right-2/3 top-28 hidden text-red-500 sm:inline-block"
                />
            )}

            <FiPieChart
                size={30}
                className="animate-move absolute bottom-10 right-20 hidden text-fuchsia-500 sm:inline-block md:right-48"
            />
            <FiStar
                size={30}
                className="absolute right-10 top-36 hidden text-yellow-500 sm:inline-block md:right-24"
            />
            <FiTriangle
                size={30}
                className="animate-move-rotate absolute right-1/4 top-1/3 hidden text-green-500 sm:inline-block"
            />
            <FiCloud
                size={30}
                className="absolute bottom-48 left-2/3 hidden animate-pulse text-blue-500 sm:inline-block"
            />
            <FiCircle
                size={30}
                className="absolute bottom-20 left-16 hidden animate-bounce text-amber-500 sm:inline-block md:left-40"
            />
            <FiHexagon
                size={30}
                className="absolute left-1/4 top-96 hidden animate-spin text-purple-500 sm:inline-block"
            />
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
