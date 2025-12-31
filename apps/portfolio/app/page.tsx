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
        <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-gray-950 dark:via-blue-950/20 dark:to-indigo-950/30">
            {/* Modern Background Elements */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Primary gradient orbs */}
                <div className="animate-pulse-slow absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-3xl" />
                <div className="animate-pulse-slow absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-400/15 via-cyan-400/15 to-blue-400/15 blur-3xl [animation-delay:2s]" />
                <div className="animate-pulse-slow absolute bottom-1/4 right-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-violet-400/20 via-purple-400/20 to-fuchsia-400/20 blur-3xl [animation-delay:4s]" />

                {/* Geometric patterns */}
                <div className="absolute right-20 top-20 h-32 w-32 rotate-45 animate-bounce rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 [animation-duration:6s]" />
                <div className="absolute bottom-40 left-20 h-24 w-24 rotate-12 animate-bounce rounded-xl bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 [animation-delay:1s] [animation-duration:8s]" />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        {/* Status Badge */}
                        <div className="mb-8 inline-flex items-center rounded-full border border-emerald-200/60 bg-emerald-50/80 px-6 py-3 text-sm font-medium shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-emerald-800/30 dark:bg-emerald-900/20">
                            <div className="mr-3 flex h-3 w-3 items-center justify-center">
                                <div className="absolute h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75"></div>
                                <div className="relative h-2 w-2 rounded-full bg-emerald-500"></div>
                            </div>
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                                ✨ Available for exciting projects
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-8 space-y-4">
                            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
                                <span className="mb-2 block text-3xl font-medium text-gray-600 md:text-4xl lg:text-5xl dark:text-gray-400">
                                    Hi, I&apos;m
                                </span>
                                <span className="animate-gradient block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_200%] bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                                    Kamruzzaman
                                </span>
                            </h1>

                            <div className="relative">
                                <h2 className="text-2xl font-semibold text-gray-700 md:text-3xl lg:text-4xl dark:text-gray-300">
                                    Full Stack Developer
                                </h2>
                                <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl dark:text-gray-300">
                            I craft digital experiences that blend{' '}
                            <span className="font-semibold text-blue-600 dark:text-blue-400">
                                beautiful design
                            </span>
                            ,{' '}
                            <span className="font-semibold text-purple-600 dark:text-purple-400">
                                robust functionality
                            </span>
                            , and{' '}
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                exceptional performance
                            </span>
                            .
                            <br />
                            Transforming ideas into scalable web solutions with modern technologies.
                        </p>

                        {/* Skills Grid */}
                        <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill}
                                    className="group relative rounded-xl border border-gray-200/50 bg-white/70 px-4 py-3 text-center text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800/70"
                                    style={{ animationDelay: `${index * 100}ms` }}>
                                    <span className="relative z-10">{skill}</span>
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 group-hover:opacity-100"></div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="mb-12 flex justify-center gap-6">
                            {[
                                { href: user.github, icon: Github, label: 'GitHub' },
                                { href: user.linkedin, icon: Linkedin, label: 'LinkedIn' },
                                { href: user.leetcode, icon: LeetCode, label: 'LeetCode' },
                                { href: user.codeforces, icon: Codeforces, label: 'Codeforces' },
                                { href: user.facebook, icon: Facebook, label: 'Facebook' }
                            ].map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/50 bg-white/70 text-gray-600 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-lg dark:border-gray-700/50 dark:bg-gray-800/50 dark:text-gray-400 dark:hover:border-blue-600/50 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                                    aria-label={label}>
                                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                            <Link
                                href="#projects"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <span className="relative z-10">View My Work</span>
                                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </Link>

                            <Link
                                href="/resume"
                                className="group inline-flex items-center gap-3 rounded-full border border-gray-300/50 bg-white/70 px-8 py-4 font-semibold text-gray-700 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-white hover:shadow-xl dark:border-gray-600/50 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700/70">
                                <span>Download Resume</span>
                                <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                            </Link>
                        </div>

                        {/* Scroll Indicator */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                            <div className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
                                <span className="text-sm">Scroll to explore</span>
                                <div className="h-6 w-4 rounded-full border-2 border-current">
                                    <div className="mx-auto mt-1 h-1 w-1 animate-pulse rounded-full bg-current"></div>
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
