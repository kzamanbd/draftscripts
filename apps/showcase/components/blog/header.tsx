import { ApplicationLogo, ThemeSwitch } from '@repo/shared';
import Link from 'next/link';
import MobileNav from './mobile-nav';
import SearchButton from './search-button';

export const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' }
];

const headerClass =
    'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10 sticky top-0 z-50';

const siteMetadata = {
    headerTitle: 'DraftScripts'
};

const Header = () => {
    return (
        <header className={headerClass}>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                    <div className="mr-3">
                        <ApplicationLogo />
                    </div>
                    {typeof siteMetadata.headerTitle === 'string' ? (
                        <div className="hidden h-6 text-2xl font-semibold sm:block">
                            {siteMetadata.headerTitle}
                        </div>
                    ) : (
                        siteMetadata.headerTitle
                    )}
                </div>
            </Link>
            <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
                <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
                    {headerNavLinks
                        .filter((link) => link.href !== '/')
                        .map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100">
                                {link.title}
                            </Link>
                        ))}
                </div>
                <SearchButton />
                <ThemeSwitch />
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
