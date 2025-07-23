import CoverLetter from '@/components/resume/cover-letter';
import TimelineIcon from '@/components/resume/timeline-icon';
import { profileImage, user } from '@repo/shared/metadata';
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
                <div className="p-10 print:p-0">
                    <div className="mb-2 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">KAMRUZZAMAN</h1>
                            <h2 className="text-lg font-semibold">Full Stack Software Engineer</h2>
                            <p className="mt-1 text-sm text-gray-700">
                                PHP • Laravel • React.js • Vue.js • AWS • 5+ Years of Experience
                            </p>
                            <ul className="flex gap-2 text-sm">
                                <li>
                                    <a href="tel:8801716724245" className="contact-link">
                                        <span className="font-semibold">Phone:</span>
                                        <span className="underline">+880 1716-724245</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={`mailto:${user.email}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-link">
                                        <span className="font-semibold">Email:</span>
                                        <span className="underline"> {user.email}</span>
                                    </a>
                                </li>

                                <li className="contact-link">
                                    <span className="font-semibold">Address:</span>
                                    <p>Mirpur 12, Dhaka, Bangladesh</p>
                                </li>
                            </ul>
                            {/* Social */}
                            <div className="mb-4 flex flex-wrap gap-2 text-sm">
                                {social.map(([key, value], index) => (
                                    <div key={key} className="contact-link">
                                        <a
                                            href={value}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="social-link">
                                            <span>
                                                {value.replace('https://', '').replace('www.', '')}
                                            </span>
                                        </a>
                                        <span>{index < social.length - 1 ? '•' : ''}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Image
                            src={profileImage}
                            className="size-25 rounded-xl object-cover"
                            width={100}
                            height={100}
                            alt="kamruzzaman"
                        />
                    </div>
                    {/* contact info */}
                    <div className="about-me">
                        <h5 className="section-heading">PROFESSIONAL SUMMARY</h5>
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
                    <h5 className="section-heading">PROFESSIONAL EXPERIENCE</h5>

                    <div className="timeline-container">
                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold text-gray-900">
                                    <h3>Software Engineer</h3>
                                    <div className="company-info">
                                        <div className="flex items-center rounded border p-0.5">
                                            <Image
                                                src="/images/wedevs-logo.svg"
                                                alt="Company Logo"
                                                className="size-3 object-cover"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="contact-link">
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
                                <div className="job-meta">
                                    <time>November 2024 - Present</time>
                                    <address>Mirpur DOHS 1216, Dhaka, Bangladesh</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li>
                                    <p>
                                        Developed and enhanced Dokan and Dokan Pro multi-vendor
                                        marketplace plugins for WordPress, serving 150,000+ active
                                        installations.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Built advanced features including vendor management systems,
                                        subscription models, booking integrations, and payment
                                        gateways for Dokan Pro platform.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Enhanced wePOS (Point of Sale) system to integrate physical
                                        retail operations with WooCommerce stores, improving
                                        inventory management and sales tracking.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Implemented scalable solutions using PHP, JavaScript,
                                        React.js, WordPress APIs, and MySQL database optimization
                                        techniques.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated with UX/UI design teams to create intuitive
                                        user interfaces, resulting in improved user experience and
                                        reduced support tickets by 25%.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold text-gray-900">
                                    <h3>Software Engineer</h3>
                                    <div className="company-info">
                                        <div className="flex items-center rounded border p-0.5">
                                            <Image
                                                src="/images/mononsoft-logo.svg"
                                                alt="Company Logo"
                                                className="size-3 object-cover"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="contact-link">
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
                                <div className="job-meta">
                                    <time>July 2021 - October 2024</time>
                                    <address>50/B New Eskaton Road, Dhaka 1000</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li>
                                    <p>
                                        Architected and developed comprehensive ERP system using
                                        Laravel 8/9/10, Vue.js 3, React.js 18, and MySQL, serving
                                        multiple business modules including inventory, accounting,
                                        and HR management.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Delivered custom software solutions for client requirements,
                                        reducing manual processes by 60% and improving operational
                                        efficiency across departments.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Designed and implemented RESTful APIs and microservices
                                        architecture, ensuring seamless integration between frontend
                                        and backend systems.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Performed comprehensive testing, debugging, and code
                                        reviews, maintaining 95% code coverage and reducing
                                        production bugs by 40%.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Led application modernization initiatives, migrating legacy
                                        systems to modern frameworks and implementing performance
                                        optimizations that improved page load times by 50%.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Mentored junior developers and conducted technical training
                                        sessions, contributing to team skill development and
                                        knowledge sharing.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold text-gray-900">
                                    <h3>Jr. Software Engineer</h3>
                                    <div className="company-info">
                                        <div className="flex items-center rounded border p-0.5">
                                            <Image
                                                src="/images/maxsop-logo.svg"
                                                alt="Company Logo"
                                                className="size-3 object-cover"
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="contact-link">
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
                                <div className="job-meta">
                                    <time>May 2020 – June 2021</time>
                                    <address>27/2 Ram Babu Road, Mymensingh-2200</address>
                                </div>
                            </div>
                            <ul className="bullet-list ml-0">
                                <li>
                                    <p>
                                        Developed responsive web applications using PHP Laravel
                                        framework, Vue.js, MySQL, and Bootstrap, implementing MVC
                                        architecture and following coding best practices.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Built efficient, testable, and reusable code components,
                                        reducing development time by 35% and improving application
                                        maintainability.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Implemented responsive user interface designs and
                                        established coding standards for consistent development
                                        practices across the team.
                                    </p>
                                </li>
                                <li>
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
                    <h5 className="section-heading">EDUCATION</h5>

                    <div className="timeline-container">
                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold text-gray-900">
                                    <h3>Bachelor of Science</h3>
                                    <div className="text-sm font-medium">
                                        Computer Science & Engineering
                                    </div>
                                </div>
                                <div className="job-meta">
                                    <time>2022 - Present</time>
                                    <address>Dhaka, Bangladesh</address>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">Southeast University</p>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold text-gray-900">
                                    <h3>Diploma in Engineering</h3>
                                    <div className="text-sm font-medium">Computer Technology</div>
                                </div>
                                <div className="job-meta">
                                    <time>2015 - 2019</time>
                                    <address>Mymensingh, Bangladesh</address>
                                </div>
                            </div>
                            <p className="text-sm text-gray-700">
                                Rumdo Institute of Modern Technology
                            </p>
                        </TimelineIcon>
                    </div>

                    {/* Core Technical Skills */}
                    <h5 className="section-heading">CORE TECHNICAL SKILLS</h5>

                    <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <h6 className="mb-2 font-semibold text-gray-900">
                                Programming Languages & Frameworks
                            </h6>
                            <ul className="bullet-list m-0 space-y-1 text-gray-700">
                                <li>
                                    <p>PHP/Laravel</p>
                                </li>
                                <li>
                                    <p>JavaScript/TypeScript</p>
                                </li>
                                <li>
                                    <p>React.js/Next.js</p>
                                </li>
                                <li>
                                    <p>Vue.js/Nuxt.js</p>
                                </li>
                                <li>
                                    <p>Node.js/Express.js</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h6 className="mb-2 font-semibold text-gray-900">Database & DevOps</h6>
                            <ul className="bullet-list m-0 space-y-1 text-gray-700">
                                <li>
                                    <p>MySQL/PostgreSQL</p>
                                </li>
                                <li>
                                    <p>AWS/Docker</p>
                                </li>
                                <li>
                                    <p>Git/GitHub</p>
                                </li>
                                <li>
                                    <p>WordPress/WooCommerce</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Training */}
                    <h5 className="section-heading">CERTIFICATIONS & TRAINING</h5>

                    <div className="relative mb-4">
                        <div className="job-header">
                            <div className="font-bold text-gray-900">
                                <h3>
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="resume-link">
                                        PHP/Laravel Full Stack Development
                                    </a>
                                </h3>
                                <div className="text-sm font-medium text-gray-600">
                                    Creative IT Institute, Dhaka
                                </div>
                            </div>
                        </div>

                        <div className="job-header">
                            <div className="font-bold text-gray-900">
                                <h3>
                                    <a
                                        href="https://learnwithsumit.com/certificates/verify/LWSCTXN-F584A5R7"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="resume-link">
                                        Redux State Management
                                    </a>
                                </h3>
                                <div className="text-sm font-medium text-gray-600">
                                    Learn with Sumit
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Skills */}
                    <h5 className="section-heading">ADDITIONAL COMPETENCIES</h5>

                    <ul className="bullet-list">
                        <li>
                            <p>
                                Strong foundation in Object-Oriented Programming (OOP), Data
                                Structures, and Algorithms
                            </p>
                        </li>
                        <li>
                            <p>
                                Extensive experience with RESTful APIs, GraphQL, and microservices
                                architecture
                            </p>
                        </li>
                        <li>
                            <p>
                                Database design and optimization: MySQL, PostgreSQL, MongoDB, Redis
                                caching
                            </p>
                        </li>
                        <li>
                            <p>
                                Frontend technologies: TypeScript, Redux, Tailwind CSS, Bootstrap,
                                SCSS
                            </p>
                        </li>
                        <li>
                            <p>
                                Software Development Life Cycle (SDLC) and Agile/Scrum methodologies
                            </p>
                        </li>
                        <li>
                            <p>
                                Version control systems: Git, GitHub, GitLab with CI/CD pipeline
                                implementation
                            </p>
                        </li>
                        <li>
                            <p>
                                Cloud platforms: AWS (EC2, S3, RDS, Lambda), Google Cloud Platform
                                basics
                            </p>
                        </li>
                        <li>
                            <p>
                                DevOps tools: Docker containerization, Jenkins, Nginx, Apache server
                                configuration
                            </p>
                        </li>
                        <li>
                            <p>Linux/Unix systems administration and command-line proficiency</p>
                        </li>
                        <li>
                            <p>Testing frameworks: PHPUnit, Jest, Cypress for automated testing</p>
                        </li>
                        <li>
                            <p>
                                Self-motivated team player with strong analytical and
                                problem-solving abilities
                            </p>
                        </li>
                        <li>
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
