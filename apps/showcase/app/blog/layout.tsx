import Footer from '@/components/blog/footer';
import Header from '@/components/blog/header';
import SectionContainer from '@/components/section-container';
import { ThemeProviders } from '@repo/shared';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProviders>
            <SectionContainer>
                <Header />
                <main className="mb-auto">{children}</main>
                <Footer />
            </SectionContainer>
        </ThemeProviders>
    );
};

export default BlogLayout;
