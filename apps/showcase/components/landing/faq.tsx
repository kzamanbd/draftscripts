'use client';

import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
    {
        q: 'What is DraftScripts?',
        a: 'DraftScripts is a modern web studio. We design, build, and ship production-grade Next.js & React applications, reusable component libraries, and open-source developer tools.'
    },
    {
        q: 'Is the code open source?',
        a: 'Our scripts, starters, and component libraries are MIT-licensed and free to use in any project. Client work ships with full source handover — you own everything.'
    },
    {
        q: 'What stack do you build on?',
        a: 'Next.js, React 19, TypeScript, and Tailwind CSS on the frontend; Laravel and Node.js on the backend. Type-safe end to end, monorepo-ready, and deployable anywhere.'
    },
    {
        q: 'Can you work with my existing codebase?',
        a: 'Yes. We extend, refactor, and modernize existing apps — from design-system migrations to performance work — without a rewrite when one is not needed.'
    },
    {
        q: 'How do we start a project?',
        a: 'Send a short brief. We scope the work, agree on a plan, and start drafting. Most engagements begin within a week.'
    }
];

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="mt-10 w-full divide-y divide-border border-b border-border">
            {FAQS.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={i}>
                        <button
                            type="button"
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            className="flex w-full items-center justify-between gap-4 py-4 text-left">
                            <span className="text-base font-medium text-foreground">
                                {item.q}
                            </span>
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                {isOpen ? (
                                    <Minus className="size-4" />
                                ) : (
                                    <Plus className="size-4" />
                                )}
                            </span>
                        </button>
                        <div
                            className={`grid transition-all duration-300 ease-out ${
                                isOpen
                                    ? 'grid-rows-[1fr] pb-4 opacity-100'
                                    : 'grid-rows-[0fr] opacity-0'
                            }`}>
                            <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                                {item.a}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
