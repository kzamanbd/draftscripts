import CoverLetter from '@/components/resume/CoverLetter';
import Resume from '@/components/resume/Resume';

export const metadata = {
    title: 'Resume | Kamruzzaman',
    description: 'DraftScripts features for business teams like yours.'
};

export default function Home() {
    return (
        <>
            <Resume />
            <CoverLetter />
        </>
    );
}
