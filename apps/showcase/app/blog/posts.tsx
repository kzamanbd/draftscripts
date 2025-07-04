import NewsletterForm from '@/components/blog/news-letter-form';
import Tag from '@/components/blog/tag-view';
import { description } from '@repo/shared/metadata';
import { formatDate } from '@repo/shared/utils';
import Link from 'next/link';

const MAX_DISPLAY = 5;

export default function Posts({ posts }: any) {
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl dark:text-gray-100">
                        Latest
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((post: any) => {
                        const { slug, date, title, summary, tags } = post;
                        return (
                            <li key={slug} className="py-12">
                                <article>
                                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                        <dl>
                                            <dt className="sr-only">Published on</dt>
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={date}>
                                                    {formatDate(date, 'en-US')}
                                                </time>
                                            </dd>
                                        </dl>
                                        <div className="space-y-5 xl:col-span-3">
                                            <div className="space-y-6">
                                                <div>
                                                    <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                        <Link
                                                            href={`/blog/${slug}`}
                                                            className="text-gray-900 dark:text-gray-100">
                                                            {title}
                                                        </Link>
                                                    </h2>
                                                    <div className="flex flex-wrap">
                                                        {tags.map((tag: any) => (
                                                            <Tag key={tag} text={tag} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                    {summary}
                                                </div>
                                            </div>
                                            <div className="text-base font-medium leading-6">
                                                <Link
                                                    href={`/blog/${slug}`}
                                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                    aria-label={`Read more: "${title}"`}>
                                                    Read more &rarr;
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/blog"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="All posts">
                        All Posts &rarr;
                    </Link>
                </div>
            )}
            <div className="flex items-center justify-center pt-4">
                <NewsletterForm />
            </div>
        </>
    );
}
