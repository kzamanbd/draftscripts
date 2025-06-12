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

// workspace
const currentJobTitle: string = 'Software Engineer (Full Stack)';
const currentWorkplace: string = 'weDevs';
const currentWorkplaceURL: string = 'https://wedevs.com';
const careerExperience: number = new Date().getFullYear() - 2021;

// education
const education: string = 'Bachelor of Science in Computer Science and Engineering';
const educationURL: string = 'https://www.seu.edu.bd/';

// json-ld
const jsonLdAlternateName: string = 'kzamanbd';
const jsonLdKnowsAbout: string[] = [
    'Web Development',
    'PHP',
    'Laravel',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'Git',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS'
];
const jsonLdDescription: string = `${authorName} is a passionate and experienced Full-Stack Software Engineer with over ${careerExperience} years of expertise in building scalable, high-performance web applications. He specializes in modern JavaScript frameworks, Laravel, RESTful APIs, and DevOps tools like Docker. Currently working at ${currentWorkplace}, he is committed to delivering clean, maintainable code and crafting seamless user experiences across platforms.`;

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
    siteKeywords,
    currentJobTitle,
    currentWorkplace,
    currentWorkplaceURL,
    careerExperience,
    education,
    educationURL,
    jsonLdDescription,
    jsonLdAlternateName,
    jsonLdKnowsAbout,
    siteAuthorEmail: user.email,
    siteThumbnail: '/thumbnail.png'
};

export default userMeta;
