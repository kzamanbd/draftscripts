import AboutSection from '@/components/portfolio/about-section';
import ContactSection from '@/components/portfolio/contacts';
import HeroSection from '@/components/portfolio/hero-section';
import NavbarSection from '@/components/portfolio/nav-menu';
import ProjectsSection from '@/components/portfolio/projects';

export const metadata = {
    title: 'Portfolio | Kamruzzaman',
    description: 'DraftScripts features for business teams like yours.'
};

export default function Portfolio() {
    return (
        <div className="portfolio">
            <NavbarSection />
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    );
}
