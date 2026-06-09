import { LegalPage, type LegalSection } from '@/components/landing/legal-page';
import { getTitle } from '@repo/shared/utils';

export const metadata = {
    title: getTitle('Terms & Conditions')
};

const SECTIONS: LegalSection[] = [
    {
        heading: '1. Acceptance of terms',
        paragraphs: [
            'By accessing or using the DraftScripts website, products, or open-source projects, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the site or the materials provided here.'
        ]
    },
    {
        heading: '2. Use of the website',
        bullets: [
            'You may browse the site and use the showcase for personal and commercial evaluation.',
            'You agree not to misuse the site, attempt to disrupt it, or access it through automated abuse.',
            'You are responsible for any activity that occurs through your use of the site.'
        ]
    },
    {
        heading: '3. Open-source licensing',
        paragraphs: [
            'Code published as open source is provided under the license stated in its repository (typically MIT). Your use of that code is governed by the applicable license. Where no license is stated, all rights are reserved.'
        ]
    },
    {
        heading: '4. Intellectual property',
        paragraphs: [
            'The DraftScripts name, brand, and original site content are the property of DraftScripts unless otherwise noted. You may not reproduce branding or proprietary content without permission.'
        ]
    },
    {
        heading: '5. Client engagements',
        bullets: [
            'Project and retainer work is governed by a separate written agreement.',
            'Deliverables, timelines, and payment terms are defined per engagement.',
            'Source ownership transfers as specified in that agreement, typically on final payment.'
        ]
    },
    {
        heading: '6. Disclaimer of warranties',
        paragraphs: [
            'The website and any open-source materials are provided "as is" and "as available", without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.'
        ]
    },
    {
        heading: '7. Limitation of liability',
        paragraphs: [
            'To the maximum extent permitted by law, DraftScripts shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or any materials provided here.'
        ]
    },
    {
        heading: '8. Third-party links',
        paragraphs: [
            'The site may link to third-party websites or services. We are not responsible for the content, policies, or practices of any third party.'
        ]
    },
    {
        heading: '9. Changes to these terms',
        paragraphs: [
            'We may revise these terms at any time. The "Last updated" date above reflects the latest version. Continued use of the site after changes means you accept the revised terms.'
        ]
    },
    {
        heading: '10. Governing law',
        paragraphs: [
            'These terms are governed by the laws of the jurisdiction in which DraftScripts operates, without regard to conflict-of-law principles.'
        ]
    }
];

export default function TermsPage() {
    return (
        <LegalPage
            title="Terms & Conditions"
            updated="June 9, 2026"
            intro="These Terms & Conditions govern your use of the DraftScripts website, open-source projects, and services. Please read them carefully before using the site."
            sections={SECTIONS}
        />
    );
}
