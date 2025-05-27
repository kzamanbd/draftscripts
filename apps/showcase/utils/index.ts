export const getTitle = (title: string) => {
    return `${title} - DraftScripts Showcase`;
};
export const getDescription = (description: string) => {
    return `${description} - Showcase`;
};

export const formatDate = (date: string, locale = 'en-US') => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const now = new Date(date).toLocaleDateString(locale, options);

    return now;
};

export const slug = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
};
