const YearsOfExperience = ({
    startDate,
    endDate
}: {
    startDate: string;
    endDate?: string | null;
}) => {
    // get years of experience
    const getYearsOfExperience = () => {
        const date = new Date(startDate);
        const currentDate = new Date(endDate || Date.now());
        const diffInMs = currentDate.getTime() - date.getTime();

        // Calculate total months
        const totalMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        const yearPart = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
        const monthPart = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

        if (yearPart && monthPart) return `${yearPart} ${monthPart}`;
        if (yearPart) return yearPart;
        if (monthPart) return monthPart;
        return null;
    };

    return <span className="text-primary-500 text-sm font-medium">({getYearsOfExperience()})</span>;
};

export default YearsOfExperience;

// get the total years of experience
export const getTotalYearsOfExperience = () => {
    const startDate = new Date('2020-05-01');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    const days = currentDate.getDate() - startDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--; // subtract a year if current month/day is before start month/day
        months += 12;
    }

    const plusSign = months > 0 || days > 0 ? '+' : '';
    return `${years}${plusSign} yr${years !== 1 ? 's' : ''}`;
};

