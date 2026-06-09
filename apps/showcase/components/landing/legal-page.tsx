import { SiteFooter, SiteHeader } from '@/components/landing/site-chrome';
import { user } from '@repo/shared/metadata';
import { Check } from 'lucide-react';

export type LegalSection = {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
};

export function LegalPage({
    title,
    updated,
    intro,
    sections
}: {
    title: string;
    updated: string;
    intro: string;
    sections: LegalSection[];
}) {
    return (
        <div className="min-h-svh bg-background text-foreground">
            <SiteHeader />
            <main>
                {/* Header band */}
                <section className="relative overflow-hidden border-b border-border/60">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-background to-background"
                    />
                    <div className="mx-auto max-w-3xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20">
                        <p className="text-sm font-semibold text-primary">Legal</p>
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Last updated · {updated}
                        </p>
                        <p className="mt-6 text-pretty text-muted-foreground">{intro}</p>
                    </div>
                </section>

                {/* Content */}
                <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
                    <div className="space-y-10">
                        {sections.map((s) => (
                            <section key={s.heading}>
                                <h2 className="text-xl font-bold tracking-tight">
                                    {s.heading}
                                </h2>
                                {s.paragraphs?.map((p, i) => (
                                    <p
                                        key={i}
                                        className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {p}
                                    </p>
                                ))}
                                {s.bullets && (
                                    <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                                        {s.bullets.map((b, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Contact card */}
                    <div className="mt-12 rounded-2xl border border-border bg-card p-6">
                        <h2 className="text-base font-semibold">Questions?</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Reach out and we&apos;ll get back to you.{' '}
                            <a
                                href={`mailto:${user.email}`}
                                className="font-medium text-primary hover:underline">
                                {user.email}
                            </a>
                        </p>
                    </div>
                </article>
            </main>
            <SiteFooter />
        </div>
    );
}
