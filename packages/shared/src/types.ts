export interface User {
    name: string;
    designation: string;
    github: string;
    linkedin: string;
    codeforces: string;
    facebook: string;
    leetcode: string;
    medium: string;
    youtube: string;
    twitter: string;
    resume: string;
    description: string;
    profile: string;
    phone: string;
    email: string;
    address: string;
}

export interface UserMeta {
    user: User;
    siteName: string;
    authorName: string;
    description: string;
    profileImage: string;
    title: string;
    headerTitle: string;
    headerTitleShort: string;
    stickyNav: boolean;
    theme: string;
    siteURL: string;
    sitemapURL?: string;
    siteKeywords: string[];
}

