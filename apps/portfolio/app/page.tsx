import { Codeforces, Facebook, Github, LeetCode, Linkedin } from '@repo/shared/icons';

import { user } from '@repo/shared/metadata';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

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
        <div className="relative min-h-screen overflow-hidden bg-slate-50 selection:bg-blue-500/30 selection:text-blue-600 dark:bg-gray-950">
            {/* Dynamic Background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="animate-blob absolute left-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-400/20 mix-blend-multiply blur-[100px] dark:bg-blue-600/20 dark:mix-blend-screen" />
                <div className="animate-blob animation-delay-2000 absolute right-1/4 top-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-400/20 mix-blend-multiply blur-[100px] dark:bg-purple-600/20 dark:mix-blend-screen" />
                <div className="animate-blob animation-delay-4000 absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-400/20 mix-blend-multiply blur-[100px] dark:bg-indigo-600/20 dark:mix-blend-screen" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-32 pt-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col items-center text-center">
                        {/* Premium Status Badge */}
                        <div className="animate-fade-in-up group mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/50 px-4 py-1.5 text-sm font-medium text-blue-800 shadow-sm backdrop-blur-md transition-all hover:border-blue-200 hover:bg-white/80 dark:border-blue-900/30 dark:bg-blue-950/30 dark:text-blue-300 dark:hover:bg-blue-900/50">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300">
                                Available for new projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="animate-fade-in-up mb-8 max-w-4xl [animation-delay:200ms]">
                            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl lg:text-8xl dark:text-white">
                                <span className="mb-4 block text-2xl font-semibold tracking-normal text-gray-500 md:text-3xl dark:text-gray-400">
                                    Hello, I'm
                                </span>
                                <span className="bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
                                    Kamruzzaman
                                </span>
                            </h1>
                            <div className="mt-4 flex flex-col items-center justify-center gap-2 md:flex-row">
                                <span className="text-3xl font-medium text-gray-400 md:text-5xl dark:text-gray-600">
                                    Building
                                </span>
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-bold text-transparent md:text-5xl dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                                    Digital Experiences
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="animate-fade-in-up mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 [animation-delay:400ms] md:text-xl dark:text-gray-300">
                            A{' '}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                Full Stack Developer
                            </span>{' '}
                            specialized in blending
                            <span className="mx-1.5 inline-block rounded-md bg-blue-100 px-2 py-0.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                                technical excellence
                            </span>
                            with
                            <span className="mx-1.5 inline-block rounded-md bg-purple-100 px-2 py-0.5 text-sm font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                                visual aesthetics
                            </span>
                            .
                        </p>

                        {/* Skills Scroller */}
                        <div className="animate-fade-in-up mb-12 w-full max-w-4xl [animation-delay:600ms]">
                            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white/30 p-8 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/30">
                                <div className="flex flex-wrap justify-center gap-3">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={skill}
                                            className="group relative overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800 dark:text-gray-300"
                                            style={{ animationDelay: `${index * 50}ms` }}>
                                            <div className="group-hover:animate-shine absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transition-transform duration-1000" />
                                            <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Social & CTA */}
                        <div className="animate-fade-in-up flex flex-col items-center gap-8 [animation-delay:800ms]">
                            {/* Social Icons */}
                            <div className="flex gap-4">
                                {[
                                    { href: user.github, icon: Github, label: 'GitHub' },
                                    { href: user.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                    { href: user.leetcode, icon: LeetCode, label: 'LeetCode' },
                                    {
                                        href: user.codeforces,
                                        icon: Codeforces,
                                        label: 'Codeforces'
                                    },
                                    { href: user.facebook, icon: Facebook, label: 'Facebook' }
                                ].map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm transition-all hover:-translate-y-1 hover:text-gray-900 hover:shadow-md dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
                                        aria-label={label}>
                                        <Icon className="h-5 w-5" />
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 rounded-md bg-gray-900 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link
                                    href="#projects"
                                    className="group relative overflow-hidden rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
                                    <div className="group-hover:animate-shine absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000" />
                                    <span className="flex items-center gap-2">
                                        View My Work
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>

                                <Link
                                    href="/resume"
                                    className="group rounded-full border border-gray-200 bg-white/50 px-8 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-gray-300 hover:bg-white hover:shadow-md dark:border-gray-700 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">
                                    <span className="flex items-center gap-2">
                                        Download Resume
                                        <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="animate-fade-in-up mt-20 [animation-delay:1000ms]">
                            <div className="mouse-scroll-indicator flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-300 p-1 dark:border-gray-600">
                                <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-600 dark:bg-gray-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
