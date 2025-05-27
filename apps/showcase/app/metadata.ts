export const description = `5+ yrs of hands-on experience in PHP, Laravel, WordPress, Vue.js, React, and AWS. Skilled in building and optimizing web apps from architecture to deployment. Passionate about learning new tools and delivering scalable, high-quality solutions in team environments`;

export const authorName = 'KAMRUZZAMAN';

export const profileImage = '/kzaman.png';

export const user = {
    name: authorName,
    designation: 'Software Engineer',
    github: 'https://github.com/kzamanbd',
    linkedin: 'https://www.linkedin.com/in/kzamanbd/',
    codeforces: 'https://codeforces.com/profile/kzamanbd',
    facebook: 'https://www.facebook.com/kzaman.me',
    leetcode: 'https://leetcode.com/u/kzamanbd',
    medium: 'https://medium.com/@kzamanbd',
    youtube: 'https://www.youtube.com/@draftscripts',
    twitter: '',
    resume: '/resume',
    description: description,
    profile: profileImage,
    phone: '+8801716724245',
    email: 'kzamanbn@gmail.com',
    address: 'Dhaka, Bangladesh'
};

export const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' }
];

const metadata = {
    user,
    author: authorName,
    description,
    profile: profileImage,
    title: 'DraftScripts - Features',
    headerTitle: 'DraftScripts',
    headerTitleShort: 'DraftScripts',
    stickyNav: true,
    theme: 'system'
};

export default metadata;
