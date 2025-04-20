import AboutSection from '@/components/portfolio/AboutSection';
import ContactSection from '@/components/portfolio/contacts';
import HeroSection from '@/components/portfolio/HeroSection';
import NavbarSection from '@/components/portfolio/Navbar';
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
