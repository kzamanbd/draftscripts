import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { user } from '@repo/shared/metadata';
import { ThemeSwitch } from '@repo/shared';
import { Github } from '@repo/shared/icons';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export { Badge } from '@/components/ui/badge';

/* ------------------------------------ Brand ---------------------------------- */

export function BrandMark({ className = 'size-8' }: { className?: string }) {
    return (
        <span
            className={`group relative inline-flex items-center justify-center overflow-hidden rounded-[28%] bg-linear-to-br from-emerald-400 via-emerald-600 to-teal-500 text-white shadow-sm ring-1 ring-inset ring-white/20 ${className}`}>
            {/* top sheen */}
            <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/30 to-transparent"
            />
            {/* soft inner glow */}
            <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1/3 left-1/2 size-2/3 -translate-x-1/2 rounded-full bg-white/20 blur-md"
            />
            {/* › DS _  — terminal-prompt monogram, brand identity */}
            <svg
                viewBox="0 0 32 32"
                className="relative size-[84%] drop-shadow-sm"
                aria-hidden="true">
                <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9">
                    <path d="M6 11.5 9 16 6 20.5" />
                    <path d="M22.5 20.5H26" />
                </g>
                <text
                    x="16"
                    y="16.4"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
                    fontSize="12.5"
                    fontWeight="800"
                    letterSpacing="-0.8"
                    fill="currentColor">
                    DS
                </text>
            </svg>
        </span>
    );
}

export function BrandWordmark({ className = '' }: { className?: string }) {
    return (
        <span className={`font-bold tracking-tight ${className}`}>
            Draft
            <span className="bg-linear-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Scripts
            </span>
        </span>
    );
}

/* ----------------------------------- Buttons --------------------------------- */

export type BtnVariant = 'primary' | 'outline' | 'ghost' | 'secondary';

// Map landing variants → shadcn button variants.
const VARIANT_MAP: Record<BtnVariant, 'default' | 'outline' | 'ghost' | 'secondary'> = {
    primary: 'default',
    outline: 'outline',
    ghost: 'ghost',
    secondary: 'secondary'
};

// Roomier padding than the shadcn defaults, for marketing CTAs.
const SIZE_PAD = {
    sm: 'px-3',
    md: 'h-9 px-4',
    lg: 'h-11 px-8 text-base'
} as const;

export function Btn({
    href,
    children,
    variant = 'primary',
    size = 'md',
    external,
    className = ''
}: {
    href: string;
    children: React.ReactNode;
    variant?: BtnVariant;
    size?: 'sm' | 'md' | 'lg';
    external?: boolean;
    className?: string;
}) {
    const cls = cn(
        buttonVariants({
            variant: VARIANT_MAP[variant],
            size: size === 'sm' ? 'sm' : 'default'
        }),
        'gap-2',
        SIZE_PAD[size],
        className
    );

    if (external) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={cls}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={cls}>
            {children}
        </Link>
    );
}

/* ----------------------------------- Header ---------------------------------- */

export const NAV = [
    { label: 'Features', href: '/#features' },
    { label: 'Work', href: '/#work' },
    { label: 'FAQ', href: '/#faq' }
];

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <BrandMark />
                    <BrandWordmark className="text-lg" />
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {NAV.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <Btn
                        href={user.github}
                        external
                        variant="ghost"
                        size="sm"
                        className="hidden sm:inline-flex">
                        <Github className="size-4" />
                        GitHub
                    </Btn>
                    <Btn href="/blog" size="sm">
                        Explore
                        <ArrowRight className="size-4" />
                    </Btn>
                </div>
            </div>
        </header>
    );
}

/* ----------------------------------- Footer ---------------------------------- */

const LEGAL = [
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' }
];

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/60 bg-muted/20">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <Link href="/" className="flex items-center gap-2">
                        <BrandMark className="size-7" />
                        <BrandWordmark />
                    </Link>
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                        {NAV.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground">
                                {item.label}
                            </Link>
                        ))}
                        {LEGAL.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-foreground">
                                {item.label}
                            </Link>
                        ))}
                        <a
                            href={user.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground">
                            GitHub
                        </a>
                    </nav>
                </div>
                <p className="mt-8 text-center text-xs text-muted-foreground">
                    © {year} DraftScripts — Modern web studio. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

/* --------------------------------- Helpers ----------------------------------- */

export function SectionHeading({
    eyebrow,
    title,
    subtitle
}: {
    eyebrow: string;
    title: string;
    subtitle: string;
}) {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-primary">{eyebrow}</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">{subtitle}</p>
        </div>
    );
}
