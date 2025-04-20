import CoverLetter from '@/components/resume/cover-letter';
import Resume from '@/components/resume/resume-view';

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
