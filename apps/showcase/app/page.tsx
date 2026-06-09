import Faq from '@/components/landing/faq';
import {
    Badge,
    Btn,
    SectionHeading,
    SiteFooter,
    SiteHeader
} from '@/components/landing/site-chrome';
import { user } from '@repo/shared/metadata';
import { getTitle } from '@repo/shared/utils';
import {
    ArrowRight,
    Boxes,
    Check,
    Code2,
    Gauge,
    Globe,
    Layers,
    Palette,
    PenTool,
    Quote,
    Rocket,
    ShieldCheck,
    Sparkles,
    Star,
    Terminal,
    Zap
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata = {
    title: getTitle('DraftScripts — Modern Web Studio')
};

export default function Landing() {
    return (
        <div className="min-h-svh bg-background text-foreground">
            <SiteHeader />
            <main>
                <Hero />
                <Logos />
                <Features />
                <HowItWorks />
                <Stats />
                <Testimonials />
                <Pricing />
                <FaqSection />
                <CtaBanner />
            </main>
            <SiteFooter />
        </div>
    );
}

/* ------------------------------------ Hero ----------------------------------- */

function Hero() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-linear-to-br from-primary/20 to-teal-400/20 blur-xl"></div>
            <div className="absolute top-40 right-20 h-24 w-24 rounded-full bg-linear-to-br from-primary/20 to-teal-400/20 blur-xl"></div>
            <div className="absolute bottom-40 left-20 h-20 w-20 rounded-full bg-linear-to-br from-primary/20 to-teal-400/20 blur-xl"></div>
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                }}></div>
            {/* Ambient field */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-background to-background"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-primary/25 opacity-50 blur-[120px] dark:opacity-25"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -top-20 right-1/4 -z-10 size-[26rem] translate-x-1/2 rounded-full bg-teal-400/20 opacity-50 blur-[120px] dark:opacity-20"
            />

            <div className="mx-auto max-w-7xl px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8 lg:pt-28">
                <Badge variant="secondary" className="mb-6 rounded-full px-3 py-1">
                    <Sparkles className="size-3.5 text-primary" />
                    Modern web studio · Open-source friendly
                </Badge>

                <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                    Modern web experiences,{' '}
                    <span className="bg-linear-to-r from-primary to-teal-400 bg-clip-text text-transparent">
                        engineered to ship
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
                    DraftScripts builds polished Next.js &amp; React applications, reusable
                    component libraries, and open-source developer tools — from the first
                    commit to a production deploy.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Btn href="/blog" size="lg" className="w-full sm:w-auto">
                        Explore the showcase
                        <ArrowRight className="size-4" />
                    </Btn>
                    <Btn
                        href="#features"
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto">
                        See what we build
                    </Btn>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                    Type-safe, accessible, and deployable anywhere. No vendor lock-in.
                </p>

                <SocialProof />
                <AppMockup />
            </div>
        </section>
    );
}

/* -------------------------------- Social proof ------------------------------- */

const PROOF_AVATARS = [
    { initials: 'AD', tint: 'bg-primary/15 text-primary' },
    { initials: 'KH', tint: 'bg-teal-500/15 text-teal-600 dark:text-teal-300' },
    { initials: 'MS', tint: 'bg-sky-500/15 text-sky-600 dark:text-sky-300' },
    { initials: 'JS', tint: 'bg-amber-500/15 text-amber-600 dark:text-amber-300' },
    { initials: 'TP', tint: 'bg-rose-500/15 text-rose-600 dark:text-rose-300' }
];

function SocialProof() {
    return (
        <div className="mt-12 flex flex-col items-center gap-2.5">
            <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                    {PROOF_AVATARS.map((a) => (
                        <span
                            key={a.initials}
                            className={`flex size-9 items-center justify-center rounded-full border-2 border-background text-xs font-semibold ${a.tint}`}>
                            {a.initials}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                    ))}
                </div>
            </div>
            <p className="text-xs text-muted-foreground">
                Trusted by startups and teams shipping real products
            </p>
        </div>
    );
}

/** Stylized product preview — evokes the DraftScripts showcase without a screenshot. */
function AppMockup() {
    const bars = [42, 68, 55, 80, 62, 90, 74];
    const nav = ['Resume', 'Portfolio', 'Blog', 'Checkout', 'Payment', 'SaaS'];

    return (
        <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
                <div className="overflow-hidden rounded-xl border border-border">
                    {/* window bar */}
                    <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
                        <span className="size-3 rounded-full bg-red-400" />
                        <span className="size-3 rounded-full bg-amber-400" />
                        <span className="size-3 rounded-full bg-green-400" />
                        <span className="ml-3 hidden text-xs text-muted-foreground sm:block">
                            draftscripts.com/showcase
                        </span>
                    </div>

                    <div className="flex">
                        {/* sidebar */}
                        <div className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border bg-muted/20 p-3 sm:flex">
                            <div className="mb-2 h-7 rounded-md bg-primary/15" />
                            {nav.map((item, i) => (
                                <div
                                    key={item}
                                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                                        i === 0
                                            ? 'bg-primary/10 font-medium text-primary'
                                            : 'text-muted-foreground'
                                    }`}>
                                    <span
                                        className={`size-2 rounded-full ${
                                            i === 0
                                                ? 'bg-primary'
                                                : 'bg-muted-foreground/40'
                                        }`}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* main */}
                        <div className="flex-1 space-y-4 p-4 text-left">
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: 'Projects', value: '20+' },
                                    { label: 'Components', value: '60' },
                                    { label: 'Deploys', value: '430' }
                                ].map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-lg border border-border bg-background p-3">
                                        <p className="text-[10px] text-muted-foreground">
                                            {s.label}
                                        </p>
                                        <p className="mt-1 text-lg font-bold">{s.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-lg border border-border bg-background p-4">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-xs font-medium">
                                        Build output · last 7 deploys
                                    </p>
                                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900/40 dark:text-green-300">
                                        +8.2%
                                    </span>
                                </div>
                                <div className="flex h-28 items-end gap-2">
                                    {bars.map((h, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-1 flex-col justify-end">
                                            <div
                                                className="rounded-t bg-linear-to-t from-primary/50 to-primary"
                                                style={{ height: `${h}%` }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------ Logos ---------------------------------- */

function Logos() {
    return (
        <section className="border-y border-border/60 bg-muted/30 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    Built on a stack teams trust
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold text-muted-foreground/70">
                    {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Laravel', 'Node.js'].map(
                        (name) => (
                            <span key={name}>{name}</span>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------- Features --------------------------------- */

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
    {
        icon: Layers,
        title: 'Web applications',
        body: 'Production-grade Next.js & React apps — SSR, routing, auth, and clean, maintainable architecture.'
    },
    {
        icon: Palette,
        title: 'Design systems',
        body: 'Reusable, themeable component libraries with dark mode and accessibility baked in from day one.'
    },
    {
        icon: Terminal,
        title: 'Open-source scripts',
        body: 'Battle-tested utilities, starters, and tooling — MIT-licensed and ready to drop into any project.'
    },
    {
        icon: Gauge,
        title: 'Fast by default',
        body: 'Edge-ready rendering, optimized assets, and Core Web Vitals tuned for real-world performance.'
    },
    {
        icon: ShieldCheck,
        title: 'Type-safe end to end',
        body: 'Strict TypeScript across the stack catches bugs before they ship and keeps refactors safe.'
    },
    {
        icon: Globe,
        title: 'Deploy anywhere',
        body: 'Ship to Vercel, AWS, or your own server. Monorepo-ready and free of vendor lock-in.'
    }
];

function Features() {
    return (
        <section id="features" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="What we build"
                    title="Everything to take an idea to production"
                    subtitle="From a single component to a full product — DraftScripts covers the whole build without a patchwork of tools."
                />

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map((f) => (
                        <div
                            key={f.title}
                            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                <f.icon className="size-5" />
                            </span>
                            <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------- How it works ------------------------------- */

const STEPS: { icon: LucideIcon; title: string; body: string }[] = [
    {
        icon: PenTool,
        title: 'Draft',
        body: 'We scope the idea, map the architecture, and prototype the core flows — fast feedback before a line of production code.'
    },
    {
        icon: Code2,
        title: 'Build',
        body: 'Implementation on a modern, type-safe stack with a reusable design system, tests, and clean module boundaries.'
    },
    {
        icon: Rocket,
        title: 'Ship',
        body: 'Deploy to your platform of choice, hand over the full source, and iterate with measured, data-driven releases.'
    }
];

function HowItWorks() {
    return (
        <section className="border-t border-border/60 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="How it works"
                    title="From draft to deploy in three steps"
                    subtitle="A simple, transparent process that turns an idea into a shipped product."
                />
                <div className="relative mt-14 grid gap-8 md:grid-cols-3">
                    <div
                        aria-hidden
                        className="absolute top-7 right-[16%] left-[16%] hidden border-t border-dashed border-border md:block"
                    />
                    {STEPS.map((step, i) => (
                        <div key={step.title} className="relative text-center">
                            <span className="relative z-10 mx-auto flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-sm">
                                <step.icon className="size-6" />
                                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                    {i + 1}
                                </span>
                            </span>
                            <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
                            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
                                {step.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------- Stats ----------------------------------- */

function Stats() {
    const stats = [
        { value: '5+', label: 'Years building' },
        { value: '20+', label: 'Projects shipped' },
        { value: '100%', label: 'TypeScript-first' },
        { value: '0', label: 'Vendor lock-in' }
    ];

    const highlights = [
        { icon: Boxes, label: 'Monorepo-ready architecture' },
        { icon: Globe, label: 'Dark mode, RTL & i18n aware' },
        { icon: Zap, label: 'Ships pre-built — fast to deploy' }
    ];

    return (
        <section className="border-y border-border/60 bg-muted/30 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-4xl font-extrabold tracking-tight text-primary">
                                {s.value}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
                    {highlights.map((h) => (
                        <span
                            key={h.label}
                            className="inline-flex items-center gap-2 text-muted-foreground">
                            <h.icon className="size-4 text-primary" />
                            {h.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------- Testimonials ------------------------------- */

const TESTIMONIALS = [
    {
        quote: 'DraftScripts turned a rough brief into a polished product in weeks. The code was clean enough that our team picked it up without a handoff doc.',
        name: 'Amelia Dawson',
        role: 'Product Lead · SaaS startup',
        initials: 'AD',
        tint: 'bg-primary/15 text-primary'
    },
    {
        quote: 'The component library they built became the backbone of every app we ship. Themeable, accessible, and a joy to extend.',
        name: 'Karim Hassan',
        role: 'Engineering Manager',
        initials: 'KH',
        tint: 'bg-teal-500/15 text-teal-600 dark:text-teal-300'
    },
    {
        quote: 'Fast, type-safe, and zero lock-in. We deployed to our own infra and own every line of the source.',
        name: 'Marta Silva',
        role: 'Freelance developer',
        initials: 'MS',
        tint: 'bg-sky-500/15 text-sky-600 dark:text-sky-300'
    }
];

function Testimonials() {
    return (
        <section className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Loved by teams"
                    title="Built for the people who ship"
                    subtitle="Startups, agencies, and developers trust DraftScripts to build and maintain real products."
                />
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <figure
                            key={t.name}
                            className="flex flex-col rounded-2xl border border-border bg-card p-6">
                            <Quote className="size-7 text-primary/30" />
                            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                                {t.quote}
                            </blockquote>
                            <figcaption className="mt-5 flex items-center gap-3">
                                <span
                                    className={`flex size-10 items-center justify-center rounded-full text-sm font-semibold ${t.tint}`}>
                                    {t.initials}
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold">
                                        {t.name}
                                    </span>
                                    <span className="block text-xs text-muted-foreground">
                                        {t.role}
                                    </span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------- Pricing ---------------------------------- */

const PLANS = [
    {
        name: 'Open Source',
        price: 'Free',
        note: 'forever',
        blurb: 'Scripts, starters, and components — MIT-licensed for any project.',
        features: [
            'Component libraries & utilities',
            'Production-ready starters',
            'Full source on GitHub',
            'Community support'
        ],
        cta: 'Browse GitHub',
        href: user.github,
        external: true,
        popular: false
    },
    {
        name: 'Project',
        price: 'Custom',
        note: 'per build',
        blurb: 'A scoped design + build, delivered with full source handover.',
        features: [
            'Design & development',
            'Type-safe, tested codebase',
            'Full source ownership',
            '30 days of post-launch support',
            'Deploy to your platform'
        ],
        cta: 'Start a project',
        href: `mailto:${user.email}`,
        external: true,
        popular: true
    },
    {
        name: 'Retainer',
        price: 'Monthly',
        note: 'ongoing',
        blurb: 'Dedicated, ongoing development for evolving products.',
        features: [
            'Reserved dev capacity',
            'Priority fixes & features',
            'Roadmap & architecture input',
            'Async updates'
        ],
        cta: 'Get in touch',
        href: `mailto:${user.email}`,
        external: true,
        popular: false
    }
];

function Pricing() {
    return (
        <section id="work" className="py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Work together"
                    title="Use the open source. Or build with us."
                    subtitle="Grab the free tools, or bring us in for a focused build or ongoing development."
                />

                <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
                    {PLANS.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col rounded-2xl border bg-card p-7 ${
                                plan.popular
                                    ? 'border-primary shadow-xl shadow-primary/10 lg:-mt-3 lg:mb-3'
                                    : 'border-border'
                            }`}>
                            {plan.popular && (
                                <Badge
                                    variant="default"
                                    className="absolute -top-3 left-7 rounded-full">
                                    <Star className="size-3" /> Most popular
                                </Badge>
                            )}
                            <h3 className="text-lg font-semibold">{plan.name}</h3>
                            <p className="mt-1 text-sm text-muted-foreground">{plan.blurb}</p>
                            <div className="mt-5 flex items-baseline gap-1.5">
                                <span className="text-4xl font-extrabold tracking-tight">
                                    {plan.price}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    {plan.note}
                                </span>
                            </div>

                            <ul className="mt-6 space-y-3 text-sm">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2.5">
                                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Btn
                                href={plan.href}
                                external={plan.external}
                                variant={plan.popular ? 'primary' : 'outline'}
                                className="mt-7 w-full">
                                {plan.cta}
                            </Btn>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------ FAQ ------------------------------------ */

function FaqSection() {
    return (
        <section id="faq" className="border-t border-border/60 py-20 lg:py-28">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    eyebrow="FAQ"
                    title="Questions, answered"
                    subtitle="Everything you need to know before working with DraftScripts."
                />
                <Faq />
            </div>
        </section>
    );
}

/* ---------------------------------- CTA band --------------------------------- */

function CtaBanner() {
    return (
        <section className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground">
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)]"
                />
                <h2 className="relative text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                    Have something to build? Let&apos;s draft it.
                </h2>
                <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
                    Tell us about your idea and we&apos;ll turn it into a shipped,
                    maintainable product.
                </p>
                <div className="relative mt-8">
                    <Btn
                        href={`mailto:${user.email}`}
                        external
                        variant="secondary"
                        size="lg">
                        Start a conversation
                        <ArrowRight className="size-4" />
                    </Btn>
                </div>
            </div>
        </section>
    );
}
