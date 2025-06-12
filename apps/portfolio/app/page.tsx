import { user } from '@repo/shared/metadata';
import Link from 'next/link';
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { SiCodeforces, SiLeetcode } from 'react-icons/si';

// Software engineer skill sets
const skills = [
    'PHP',
    'Laravel',
    'WordPress',
    'React',
    'Vue.js',
    'TypeScript',
    'Express.js',
    'AWS'
];

const Home = () => {
    return (
        <div className="flex min-h-[100svh] flex-col bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden pb-16 pt-20 md:pt-32">
                <div className="pointer-events-none absolute inset-0">
                    <div className="animate-pulse-slow absolute -right-20 -top-40 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-800/20" />
                    <div className="animate-pulse-slow animation-delay-2000 absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl dark:bg-blue-800/20" />
                    <div className="animate-pulse-slow animation-delay-1000 absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-pink-100/30 blur-3xl dark:bg-pink-800/20" />
                    <div className="animate-pulse-slow animation-delay-3000 absolute left-1/3 top-20 h-72 w-72 rounded-full bg-indigo-100/30 blur-3xl dark:bg-indigo-800/20" />
                </div>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
                        {/* Text Content */}
                        <div className="z-10 w-full lg:w-2/3">
                            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 text-sm font-medium shadow-sm transition-all hover:shadow-md dark:border-blue-800/30 dark:bg-gray-800 dark:from-blue-900/20 dark:to-indigo-900/20">
                                <span className="mr-2 flex h-3 w-3 items-center justify-center">
                                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                                    Available for work
                                </span>
                            </div>

                            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                <span className="block">Hi, I&apos;m</span>
                                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
                                    Kamruzzaman
                                </span>
                            </h1>

                            <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                I build accessible, responsive, and performant web applications with
                                modern technologies. Focused on creating exceptional user
                                experiences through clean code.
                            </p>

                            {/* Skills Pills */}
                            <div className="mb-10 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Social Links */}
                            <div className="mb-8 flex gap-4">
                                <a
                                    href={user.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href={user.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                                    <FaLinkedin size={24} />
                                </a>
                                <a
                                    href={user.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                                    <SiLeetcode size={24} />
                                </a>
                                <a
                                    href={user.codeforces}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                                    <SiCodeforces size={24} />
                                </a>
                                <a
                                    href={user.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500">
                                    <FaFacebook size={24} />
                                </a>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="#projects"
                                    className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                                    View Projects <FaArrowRight />
                                </Link>

                                <Link
                                    href="/resume"
                                    className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-2 text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                                    Resume <HiDownload />
                                </Link>
                            </div>
                        </div>

                        {/* Visual Element - Code Block Display */}
                        <div className="relative z-10 w-full max-w-md lg:w-1/3">
                            <div className="animate-pulse-slow absolute inset-0 rounded-lg bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-xl dark:from-blue-800 dark:to-purple-800 dark:opacity-30"></div>
                            <div className="animate-pulse-slow animation-delay-1000 absolute inset-0 rounded-lg bg-gradient-to-tr from-pink-100 to-indigo-200 opacity-10 blur-xl dark:from-pink-800 dark:to-indigo-800 dark:opacity-20"></div>

                            {/* Code Block Card */}
                            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                                {/* Fake Code Editor UI */}
                                <div className="mb-3 flex items-center gap-1.5">
                                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                                    <span className="ml-auto flex h-5 items-center rounded bg-gray-100 px-2 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                                        index.tsx
                                    </span>
                                </div>

                                {/* Syntax-highlighted Code */}
                                <div className="font-mono text-sm">
                                    <div className="text-gray-500 dark:text-gray-400">
                                        <span className="text-purple-600 dark:text-purple-400">
                                            const
                                        </span>{' '}
                                        <span className="text-blue-600 dark:text-blue-400">
                                            developer
                                        </span>{' '}
                                        = () =&gt; {'{'}
                                    </div>
                                    <div className="pl-4 text-gray-500 dark:text-gray-400">
                                        <span className="text-purple-600 dark:text-purple-400">
                                            const
                                        </span>{' '}
                                        <span className="text-blue-600 dark:text-blue-400">
                                            skills
                                        </span>{' '}
                                        = [
                                    </div>
                                    <div className="pl-8 text-gray-500 dark:text-gray-400">
                                        <span className="text-green-600 dark:text-green-400">
                                            &apos;PHP&apos;
                                        </span>
                                        ,
                                        <span className="text-green-600 dark:text-green-400">
                                            {' '}
                                            &apos;Laravel&apos;
                                        </span>
                                        ,
                                    </div>
                                    <div className="pl-8 text-gray-500 dark:text-gray-400">
                                        <span className="text-green-600 dark:text-green-400">
                                            &apos;React&apos;
                                        </span>
                                        ,
                                        <span className="text-green-600 dark:text-green-400">
                                            {' '}
                                            &apos;TypeScript&apos;
                                        </span>
                                        ,
                                    </div>
                                    <div className="pl-8 text-gray-500 dark:text-gray-400">
                                        <span className="text-green-600 dark:text-green-400">
                                            &apos;Express.js&apos;
                                        </span>
                                        ,
                                        <span className="text-green-600 dark:text-green-400">
                                            {' '}
                                            &apos;AWS&apos;
                                        </span>
                                        ,
                                    </div>
                                    <div className="pl-4 text-gray-500 dark:text-gray-400">];</div>
                                    <div className="pl-4 text-gray-500 dark:text-gray-400">
                                        <span className="text-purple-600 dark:text-purple-400">
                                            {' '}
                                            return
                                        </span>{' '}
                                        <span className="text-blue-600 dark:text-blue-400">
                                            createImpact
                                        </span>
                                        (skills);
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">{'}'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

