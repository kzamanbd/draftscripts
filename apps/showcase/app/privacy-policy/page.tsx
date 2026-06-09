import { LegalPage, type LegalSection } from '@/components/landing/legal-page';
import { getTitle } from '@repo/shared/utils';

export const metadata = {
    title: getTitle('Privacy Policy')
};

const SECTIONS: LegalSection[] = [
    {
        heading: '1. Information we collect',
        paragraphs: [
            'We keep data collection to a minimum. We only gather what we need to operate this site, respond to enquiries, and improve our products.'
        ],
        bullets: [
            'Contact details you submit voluntarily, such as your name and email address.',
            'Message content when you reach out to us by email or a contact form.',
            'Anonymous usage and device analytics (pages viewed, approximate region, browser).'
        ]
    },
    {
        heading: '2. How we use your information',
        bullets: [
            'To respond to your questions and provide the services you request.',
            'To operate, maintain, and improve the website and our open-source projects.',
            'To send important updates about work we are doing together (never spam).'
        ]
    },
    {
        heading: '3. Cookies & analytics',
        paragraphs: [
            'We use privacy-respecting analytics to understand aggregate traffic. These cookies do not identify you personally. You can block cookies in your browser settings without losing access to the site.'
        ]
    },
    {
        heading: '4. Data sharing',
        paragraphs: [
            'We do not sell your personal data. We share information only with service providers that help us run the site (such as hosting and analytics), and only to the extent needed to deliver those services.'
        ]
    },
    {
        heading: '5. Data retention',
        paragraphs: [
            'We retain personal information only for as long as necessary to fulfil the purposes described here, or as required by law. You may request deletion of your data at any time.'
        ]
    },
    {
        heading: '6. Your rights',
        bullets: [
            'Access, correct, or delete the personal data we hold about you.',
            'Object to or restrict certain processing of your data.',
            'Withdraw consent at any time where processing is based on consent.'
        ]
    },
    {
        heading: '7. Security',
        paragraphs: [
            'We apply reasonable technical and organisational measures to protect your data. No method of transmission over the internet is fully secure, so we cannot guarantee absolute security.'
        ]
    },
    {
        heading: '8. Changes to this policy',
        paragraphs: [
            'We may update this policy from time to time. Material changes will be reflected by the "Last updated" date above. Continued use of the site after changes constitutes acceptance.'
        ]
    }
];

export default function PrivacyPolicyPage() {
    return (
        <LegalPage
            title="Privacy Policy"
            updated="June 9, 2026"
            intro="This Privacy Policy explains what information DraftScripts collects, how we use it, and the choices you have. By using this website you agree to the practices described below."
            sections={SECTIONS}
        />
    );
}
