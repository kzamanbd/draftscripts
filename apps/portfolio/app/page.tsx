import { Codeforces, Facebook, Github, LeetCode, Linkedin } from '@repo/shared/icons';
import { user } from '@repo/shared/metadata';
import { ArrowRight, Cpu, Database, Layout, Terminal } from 'lucide-react';
import Link from 'next/link';

const skills = [
    { name: 'PHP & Laravel', icon: Terminal, color: 'from-indigo-500 to-purple-500' },
    { name: 'React & Vue', icon: Layout, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', icon: Cpu, color: 'from-amber-500 to-orange-500' },
    { name: 'AWS & DevOps', icon: Database, color: 'from-emerald-500 to-teal-500' }
];

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 font-sans selection:bg-indigo-500/30 dark:bg-gray-950">
            {/* Premium Animated Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Dynamic Glowing Orbs */}
                <div className="animate-pulse-slow absolute -left-[10%] -top-[20%] h-[70vh] w-[70vw] rounded-full bg-indigo-500/10 mix-blend-multiply blur-[120px] dark:bg-indigo-500/20 dark:mix-blend-screen" />
                <div className="animate-pulse-slow absolute -right-[10%] top-[20%] h-[60vh] w-[60vw] rounded-full bg-cyan-500/10 mix-blend-multiply blur-[120px] [animation-delay:2s] dark:bg-cyan-500/10 dark:mix-blend-screen" />
                <div className="animate-pulse-slow absolute -bottom-[20%] left-[20%] h-[50vh] w-[50vw] rounded-full bg-purple-500/10 mix-blend-multiply blur-[100px] [animation-delay:4s] dark:bg-purple-500/10 dark:mix-blend-screen" />

                {/* Grid overlay with fade mask */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
            </div>

            {/* Hero Section */}
            <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col items-center text-center">
                        {/* Status Badge */}
                        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-50/50 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-emerald-500/40 hover:bg-emerald-50 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:hover:bg-emerald-500/20">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-300">
                                Open to exciting opportunities
                            </span>
                        </div>

                        {/* Main Typography */}
                        <div className="relative mb-8 max-w-4xl space-y-4">
                            <h1
                                className="animate-fade-in-up text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-white"
                                style={{ animationDelay: '100ms' }}>
                                <span className="mb-3 block text-2xl font-semibold text-slate-500 sm:text-3xl lg:text-4xl dark:text-slate-400">
                                    Hello, I&apos;m
                                </span>
                                <span className="relative inline-block pb-2 pr-2">
                                    <span className="animate-gradient absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] bg-clip-text text-transparent opacity-60 blur-lg dark:opacity-80"></span>
                                    <span className="animate-gradient relative bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-[length:200%_auto] bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400">
                                        MD Kamruzzaman
                                    </span>
                                </span>
                            </h1>

                            <h2
                                className="animate-fade-in-up mx-auto max-w-2xl text-xl font-medium text-slate-600 sm:text-2xl md:text-3xl dark:text-slate-300"
                                style={{ animationDelay: '200ms' }}>
                                Crafting scalable and high-performance solutions as a{' '}
                                <span className="border-b-2 border-indigo-500 font-bold text-slate-900 dark:text-white">
                                    Full Stack Engineer
                                </span>
                                .
                            </h2>
                        </div>

                        {/* Short Description */}
                        <p
                            className="animate-fade-in-up mb-12 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
                            style={{ animationDelay: '300ms' }}>
                            Bridging product vision with rigorous engineering. I specialize in
                            building robust backend architectures and highly polished user
                            interfaces that scale seamlessly.
                        </p>

                        {/* Top Core Competencies (Replacing generic skill grid with rich cards) */}
                        <div
                            className="animate-fade-in-up mb-14 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
                            style={{ animationDelay: '400ms' }}>
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/40 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-[0_8px_30px_rgb(255,255,255,0.01)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.05)]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/5" />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div
                                            className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} p-2.5 text-white shadow-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110`}>
                                            <skill.icon className="h-full w-full" strokeWidth={2} />
                                        </div>
                                        <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className="animate-fade-in-up mb-16 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
                            style={{ animationDelay: '500ms' }}>
                            <Link
                                href="/resume"
                                className="group relative overflow-hidden rounded-full bg-slate-900 px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/25 dark:bg-white dark:text-slate-900 dark:hover:shadow-indigo-400/25">
                                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                <span className="relative z-10 flex items-center gap-2">
                                    View Resume{' '}
                                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Link>

                            <Link
                                href={user.github}
                                target="_blank"
                                className="group flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white">
                                <Github className="h-5 w-5" />
                                <span>GitHub Profile</span>
                            </Link>
                        </div>

                        {/* Social Links & Quick Stats */}
                        <div
                            className="animate-fade-in-up w-full max-w-4xl border-t border-slate-200/50 pt-8 dark:border-slate-800/50"
                            style={{ animationDelay: '600ms' }}>
                            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                                <div className="flex gap-4">
                                    {[
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
                                            className="text-slate-400 transition-colors duration-300 hover:text-indigo-500 dark:hover:text-indigo-400"
                                            aria-label={label}>
                                            <Icon className="h-6 w-6" />
                                        </a>
                                    ))}
                                </div>

                                <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                            4+
                                        </span>
                                        <span>Years Experience</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                            15+
                                        </span>
                                        <span>Enterprise Projects</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                                            1000+
                                        </span>
                                        <span>Problems Solved</span>
                                    </div>
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
