import CoverLetter from '@/components/resume/cover-letter';
import TimelineIcon from '@/components/resume/timeline-icon';
import { user } from '@repo/shared/metadata';
import Image from 'next/image';

const social = Object.entries({
    GitHub: user.github,
    Linkedin: user.linkedin,
    LeetCode: user.leetcode
});

export const metadata = {
    title: 'Kamruzzaman - Software Engineer'
};

const Resume = () => {
    return (
        <div>
            <div className="page-container h-auto print:h-auto">
                <div className="p-10">
                    <div className="mb-2 flex flex-col">
                        <h1 className="text-xl font-bold">KAMRUZZAMAN</h1>
                        <h2 className="text-lg font-semibold">Full Stack Software Engineer</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            PHP • Laravel • React.js • Vue.js • AWS • 5+ Years of Experience
                        </p>
                        <ul className="flex gap-2 text-sm">
                            <li>
                                <a href="tel:8801716724245" className="flex items-center gap-1">
                                    <span className="font-semibold">Phone:</span>
                                    <span className="underline">+880 1716-724245</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href={`mailto:${user.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-1">
                                    <span className="font-semibold">Email:</span>
                                    <span className="underline"> {user.email}</span>
                                </a>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="font-semibold">Address:</span>
                                <p>Mirpur 12, Dhaka, Bangladesh</p>
                            </li>
                        </ul>
                        {/* Social */}
                        <div className="mb-4 flex flex-wrap gap-2 text-sm">
                            {social.map(([key, value], index) => (
                                <div key={key} className="flex items-center gap-1">
                                    <a
                                        href={value}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-primary-500 text-sm font-semibold text-gray-800 underline">
                                        <span>
                                            {value.replace('https://', '').replace('www.', '')}
                                        </span>
                                    </a>
                                    <span>{index < social.length - 1 ? '•' : ''}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* contact info */}
                    <div className="about-me">
                        <h5 className="subtitle">PROFESSIONAL SUMMARY</h5>
                        <p className="mb-4 text-justify text-sm">
                            Full-Stack Software Engineer with 5+ Years of professional experience
                            developing scalable web applications using PHP, Laravel, WordPress,
                            Vue.js, React.js, Node.js, and AWS cloud services. Proven expertise in
                            multi-vendor marketplace platforms, ERP systems, and e-commerce
                            solutions. Experienced in agile methodologies, API development, database
                            optimization, and DevOps practices. Strong track record of collaborating
                            with cross-functional teams to deliver high-quality software solutions
                            on time and within budget.
                        </p>
                    </div>

                    {/* Experience section */}
                    <h5 className="subtitle">PROFESSIONAL EXPERIENCE</h5>

                    <div className="border-primary-500 relative mb-4 space-y-4 border-l pl-4">
                        <TimelineIcon>
                            <div className="flex justify-between">
                                <div className="font-bold text-gray-900">
                                    <h3>Software Engineer</h3>
                                    <div className="flex gap-1 text-sm font-medium">
                                        <div className="size-4">
                                            <Image
                                                src="/images/wedevs-logo.svg"
                                                alt="weDevs Logo"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://wedevs.com"
                                                className="underline"
                                                target="_blank"
                                                rel="noreferrer">
                                                weDevs
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right text-sm">
                                    <time>November 2024 - Present</time>
                                    <address>Mirpur DOHS 1216, Dhaka, Bangladesh</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Developed and enhanced Dokan and Dokan Pro multi-vendor
                                        marketplace plugins for WordPress, serving 150,000+ active
                                        installations.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Built advanced features including vendor management systems,
                                        subscription models, booking integrations, and payment
                                        gateways for Dokan Pro platform.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Enhanced wePOS (Point of Sale) system to integrate physical
                                        retail operations with WooCommerce stores, improving
                                        inventory management and sales tracking.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Implemented scalable solutions using PHP, JavaScript,
                                        React.js, WordPress APIs, and MySQL database optimization
                                        techniques.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Collaborated with UX/UI design teams to create intuitive
                                        user interfaces, resulting in improved user experience and
                                        reduced support tickets by 25%.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="flex justify-between">
                                <div className="font-bold text-gray-900">
                                    <h3>Software Engineer</h3>
                                    <div className="flex gap-1 text-sm font-medium">
                                        <div className="size-4">
                                            <Image
                                                src="/images/mononsoft-logo.svg"
                                                alt="MononSoft Logo"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://mononsoft.org"
                                                className="underline"
                                                target="_blank"
                                                rel="noreferrer">
                                                MononSoft Ltd.
                                            </a>
                                            <a
                                                href="https://jmigroup-bd.com"
                                                className="underline"
                                                target="_blank"
                                                rel="noreferrer">
                                                (JMI Group)
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right text-sm">
                                    <time>July 2021 - October 2024</time>
                                    <address>50/B New Eskaton Road, Dhaka 1000</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Architected and developed comprehensive ERP system using
                                        Laravel 8/9/10, Vue.js 3, React.js 18, and MySQL, serving
                                        multiple business modules including inventory, accounting,
                                        and HR management.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Delivered custom software solutions for client requirements,
                                        reducing manual processes by 60% and improving operational
                                        efficiency across departments.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Designed and implemented RESTful APIs and microservices
                                        architecture, ensuring seamless integration between frontend
                                        and backend systems.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Performed comprehensive testing, debugging, and code
                                        reviews, maintaining 95% code coverage and reducing
                                        production bugs by 40%.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Led application modernization initiatives, migrating legacy
                                        systems to modern frameworks and implementing performance
                                        optimizations that improved page load times by 50%.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Mentored junior developers and conducted technical training
                                        sessions, contributing to team skill development and
                                        knowledge sharing.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="flex justify-between">
                                <div className="font-bold text-gray-900">
                                    <h3>Jr. Software Engineer</h3>
                                    <div className="flex gap-1 text-sm font-medium">
                                        <div className="size-4">
                                            <Image
                                                src="/images/maxsop-logo.svg"
                                                alt="MaxSOP Logo"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://maxsop.com/"
                                                className="underline"
                                                target="_blank"
                                                rel="noreferrer">
                                                MaxSOP
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right text-sm">
                                    <time>May 2020 – June 2021</time>
                                    <address>27/2 Ram Babu Road, Mymensingh-2200</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Developed responsive web applications using PHP Laravel
                                        framework, Vue.js, MySQL, and Bootstrap, implementing MVC
                                        architecture and following coding best practices.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Built efficient, testable, and reusable code components,
                                        reducing development time by 35% and improving application
                                        maintainability.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Implemented responsive user interface designs and
                                        established coding standards for consistent development
                                        practices across the team.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bullet-point"></div>
                                    <p>
                                        Contributed to full software development lifecycle including
                                        requirements analysis, system design, implementation,
                                        testing, and deployment.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>
                    </div>

                    {/* Education */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">EDUCATION</h5>
                    </div>
                    <div className="relative mb-3 space-y-3 text-sm">
                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-semibold">Bachelor of Science</span>,{' '}
                                    <span>Computer Science & Engineering</span>
                                </div>
                                <span className="text-sm text-gray-600">2022 - Present</span>
                            </div>
                            <p className="text-gray-700">
                                Southeast University, 251/A Tejgaon I/A, Dhaka
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="font-semibold">Diploma in Engineering</span>,{' '}
                                    <span>Computer Technology</span>
                                </div>
                                <span className="text-sm text-gray-600">2015 - 2019</span>
                            </div>
                            <p className="text-gray-700">
                                Rumdo Institute of Modern Technology, Mymensingh
                            </p>
                        </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">KEY ACHIEVEMENTS</h5>
                    </div>
                    <ul className="bullet-list mb-4">
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Successfully delivered 15+ web applications and WordPress plugins
                                serving 150,000+ active users globally
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Improved application performance by 50% through database
                                optimization and code refactoring initiatives
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Reduced development time by 35% by implementing reusable component
                                libraries and coding standards
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Led technical documentation initiatives, improving team onboarding
                                efficiency by 30%
                            </p>
                        </li>
                    </ul>

                    {/* Core Technical Skills */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">CORE TECHNICAL SKILLS</h5>
                    </div>

                    <section className="mb-4 flex flex-wrap gap-2">
                        <span className="rounded-sm border border-rose-400 bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800">
                            PHP/Laravel
                        </span>
                        <span className="rounded-sm border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            JavaScript/TypeScript
                        </span>
                        <span className="rounded-sm border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            React.js/Next.js
                        </span>
                        <span className="rounded-sm border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Vue.js/Nuxt.js
                        </span>
                        <span className="rounded-sm border border-sky-400 bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800">
                            WordPress/WooCommerce
                        </span>
                        <span className="rounded-sm border border-purple-400 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                            Node.js/Express.js
                        </span>
                        <span className="rounded-sm border border-indigo-400 bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                            MySQL/PostgreSQL
                        </span>
                        <span className="rounded-sm border border-amber-500 bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                            AWS/Docker
                        </span>
                        <span className="rounded-sm border border-gray-400 bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                            Git/GitHub
                        </span>
                    </section>
                    {/* Training */}
                    <div className="subtitle left mt-3">
                        <h5 className="subtitle-text">CERTIFICATIONS & TRAINING</h5>
                    </div>
                    <div className="mb-4 space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="resume-link font-bold">
                                    PHP/Laravel Full Stack Development
                                </a>
                                <p className="italic text-gray-600">Creative IT Institute, Dhaka</p>
                            </div>
                            <span className="text-sm text-gray-600">2019</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <a
                                    href="https://learnwithsumit.com/certificates/verify/LWSCTXN-F584A5R7"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="resume-link font-bold">
                                    Redux State Management
                                </a>
                                <p className="italic text-gray-600">Learn with Sumit</p>
                            </div>
                            <span className="text-sm text-gray-600">2023</span>
                        </div>
                    </div>

                    {/* Additional Skills */}
                    <h5 className="subtitle">ADDITIONAL COMPETENCIES</h5>

                    <ul className="bullet-list">
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Strong foundation in Object-Oriented Programming (OOP), Data
                                Structures, and Algorithms
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Extensive experience with RESTful APIs, GraphQL, and microservices
                                architecture
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Database design and optimization: MySQL, PostgreSQL, MongoDB, Redis
                                caching
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Frontend technologies: TypeScript, Redux, Tailwind CSS, Bootstrap,
                                SCSS
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Software Development Life Cycle (SDLC) and Agile/Scrum methodologies
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Version control systems: Git, GitHub, GitLab with CI/CD pipeline
                                implementation
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Cloud platforms: AWS (EC2, S3, RDS, Lambda), Google Cloud Platform
                                basics
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                DevOps tools: Docker containerization, Jenkins, Nginx, Apache server
                                configuration
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>Linux/Unix systems administration and command-line proficiency</p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>Testing frameworks: PHPUnit, Jest, Cypress for automated testing</p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Self-motivated team player with strong analytical and
                                problem-solving abilities
                            </p>
                        </li>
                        <li className="flex items-center">
                            <div className="bullet-point"></div>
                            <p>
                                Excellent communication skills for cross-functional collaboration
                                and client interaction
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <CoverLetter />
        </div>
    );
};

export default Resume;
