import type { User, UserMeta } from './types';

const description = `5+ yrs of hands-on experience in PHP, Laravel, WordPress, Vue.js, React, and AWS. Skilled in building and optimizing web apps from architecture to deployment. Passionate about learning new tools and delivering scalable, high-quality solutions in team environments`;

const authorName = 'KAMRUZZAMAN';

const profileImage = '/kzaman.png';

export const siteKeywords: UserMeta['siteKeywords'] = [
    'Kamruzzaman',
    'kzaman',
    'kzamanbd',
    'Full Stack Developer',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
    'PHP',
    'Laravel',
    'Vue.js',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MySQL',
    'Next.js',
    'Nuxt.js',
    'Tailwind CSS'
];

const user: User = {
    name: authorName,
    designation: 'Software Engineer',
    github: 'https://github.com/kzamanbd',
    linkedin: 'https://www.linkedin.com/in/kzamanbd/',
    codeforces: 'https://codeforces.com/profile/kzamanbd',
    facebook: 'https://www.facebook.com/kzaman.me',
    leetcode: 'https://leetcode.com/u/kzamanbd',
    medium: 'https://medium.com/@kzamanbd',
    youtube: 'https://www.youtube.com/@draftscripts',
    twitter: 'https://x.com/_kzamanbd',
    resume: '/resume',
    description: description,
    profile: profileImage,
    phone: '+8801716724245',
    email: 'kzamanbn@gmail.com',
    address: 'Dhaka, Bangladesh'
};

const userMeta: UserMeta = {
    user,
    authorName,
    siteName: authorName,
    description,
    profileImage,
    title: 'DraftScripts - Features',
    headerTitle: 'DraftScripts',
    headerTitleShort: 'DraftScripts',
    stickyNav: true,
    theme: 'system',
    siteURL: 'https://kzaman.me',
    siteKeywords
};

export default userMeta;
