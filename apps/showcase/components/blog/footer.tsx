import siteMeta, { authorName, user } from '@/app/metadata';
import Link from 'next/link';
import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaMailBulk,
    FaMedium,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa';

const SocialIcon = ({ kind, href, size = 24 }: { kind: string; href: string; size?: number }) => {
    const icons = {
        mail: <FaMailBulk size={size} />,
        github: <FaGithub size={size} />,
        facebook: <FaFacebook size={size} />,
        youtube: <FaYoutube size={size} />,
        linkedin: <FaLinkedin size={size} />,
        twitter: <FaTwitter size={size} />,
        x: <FaTwitter size={size} />,
        medium: <FaMedium size={size} />
    };
    const icon = icons[kind as keyof typeof icons];
    if (!icon) {
        return null;
    }
    if (
        !href ||
        (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
    ) {
        return null;
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition hover:text-gray-600">
            <div className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200">
                {icon}
            </div>
        </a>
    );
};

export default function Footer() {
    return (
        <footer>
            <div className="mt-16 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <SocialIcon kind="mail" href={`mailto:${user.email}`} />
                    <SocialIcon kind="github" href={user.github} />
                    <SocialIcon kind="facebook" href={user.facebook} />
                    <SocialIcon kind="youtube" href={user.youtube} />
                    <SocialIcon kind="linkedin" href={user.linkedIn} />
                    <SocialIcon kind="twitter" href={user.twitter} />
                    <SocialIcon kind="x" href={user.twitter} />
                    <SocialIcon kind="medium" href={user.medium} />
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div>{authorName}</div>
                    <div>{` • `}</div>
                    <div>{`© ${new Date().getFullYear()}`}</div>
                    <div>{` • `}</div>
                    <Link href="/">{siteMeta.title}</Link>
                </div>
                <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
                    <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
                        Tailwind Nextjs Theme
                    </Link>
                </div>
            </div>
        </footer>
    );
}

