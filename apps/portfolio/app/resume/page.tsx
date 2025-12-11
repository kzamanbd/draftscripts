import CoverLetter from '@/components/resume/cover-letter';
import TimelineIcon from '@/components/resume/timeline-icon';
import { profileImage, user } from '@repo/shared/metadata';
import Image from 'next/image';

const social = Object.entries({
    GitHub: user.github,
    Linkedin: user.linkedin,
    LeetCode: user.leetcode
});

const Resume = () => {
    return (
        <div>
            <div className="page-container h-auto text-gray-900 print:h-auto">
                <div className="p-10 print:p-0 print:pl-1.5">
                    <div className="mb-2 flex justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">MD KAMRUZZAMAN</h1>
                            <h2 className="text-lg font-semibold">Full Stack Software Engineer</h2>
                            <p className="mt-1 text-sm">
                                PHP • Laravel • React.js • Vue.js • AWS • 4+ Years of Experience
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
                                            className="resume-link">
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
                            Full Stack Software Engineer with 4+ years of hands-on experience
                            specializing in Laravel, PHP, and modern JavaScript frameworks like
                            Vue.js and React. Proven track record of designing and developing
                            scalable, secure web applications and RESTful APIs using clean, testable
                            code. Experienced in collaborating with cross-functional teams,
                            participating in Agile/Scrum workflows, and communicating complex
                            technical concepts to both technical and non-technical stakeholders.
                            Adept at optimizing application performance, integrating third-party
                            services, and mentoring junior developers. Passionate about continuous
                            learning, user-focused design, and driving impact within high-performing
                            engineering teams.
                        </p>
                    </div>

                    {/* Core Technical Skills */}
                    <h5 className="section-heading">CORE TECHNICAL SKILLS</h5>

                    <div className="mb-4 text-sm">
                        <ul className="bullet-list">
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Programming:</span>
                                    <p>
                                        PHP/Laravel, JavaScript/TypeScript, React.js/Next.js,
                                        Vue.js/Nuxt.js and Express.js
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Databases:</span>
                                    <p>MySQL, PostgreSQL and Redis</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Tools:</span>
                                    <p>
                                        Git/GitHub, Github Action/CICD, Composer, npm, Webpack,
                                        Docker, PHPUnit and Playwright
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Cloud/Servers:</span>
                                    <p>AWS (EC2, ECS, RDS, S3), Google Cloud basics.</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">WordPress:</span>
                                    <p>
                                        Plugin development, WooCommerce, Hooks, Filters, Shortcodes
                                        and Custom Post Types
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Experience section */}
                    <h5 className="section-heading">PROFESSIONAL EXPERIENCE</h5>

                    <div className="timeline-container">
                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold">
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
                            <ul className="bullet-list">
                                <li>
                                    <p>
                                        Developed and enhanced Dokan and Dokan Pro multi-vendor
                                        marketplace plugins for WordPress.
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
                                        Implemented scalable solutions using PHP, JavaScript,
                                        React.js, WordPress APIs, and MySQL database optimization
                                        techniques.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated closely with frontend developers, designers,
                                        and QA to ensure smooth feature rollouts across multi-vendor
                                        platforms.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Participated in daily stand-ups and sprint planning sessions
                                        following Agile/Scrum methodology.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold">
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
                            <ul className="bullet-list">
                                <li>
                                    <p>
                                        Architected and developed comprehensive ERP system using
                                        Laravel, Vue.js and MySQL, serving multiple business modules
                                        including inventory, accounting, and HR management.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Delivered custom software solutions for client requirements,
                                        reducing manual processes and improving operational
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
                                        Coordinated with cross-functional stakeholders to gather
                                        requirements and deliver business-critical ERP modules.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Documented system architecture and conducted walkthroughs
                                        for new team members
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
                                <div className="font-bold">
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
                            <ul className="bullet-list">
                                <li>
                                    <p>
                                        Developed responsive web applications using PHP Laravel
                                        framework, Vue.js/Nuxt.js, MySQL, and Bootstrap,
                                        implementing MVC architecture and following coding best
                                        practices.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Worked in a small agile team, improving team velocity by
                                        sharing knowledge and reviewing peers’ code.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Actively communicated with clients to understand project
                                        requirements and propose technical solutions.
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
                    <h5 className="section-heading break-before-page">EDUCATION</h5>

                    <div className="timeline-container">
                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold">
                                    <h3>Bachelor of Science</h3>
                                    <div className="text-sm font-medium">
                                        Computer Science & Engineering(In Progress) -{' '}
                                        <span className="font-bold">Southeast University</span>
                                    </div>
                                </div>
                                <div className="job-meta">
                                    <time>2022 - Present</time>
                                    <address>Dhaka, Bangladesh</address>
                                </div>
                            </div>
                        </TimelineIcon>

                        <TimelineIcon>
                            <div className="job-header">
                                <div className="font-bold">
                                    <h3>Diploma in Engineering</h3>
                                    <div className="text-sm font-medium">
                                        Computer Technology -{' '}
                                        <span className="font-bold">
                                            Rumdo Institute of Modern Technology
                                        </span>
                                    </div>
                                </div>
                                <div className="job-meta">
                                    <time>2015 - 2019</time>
                                    <address>Mymensingh, Bangladesh</address>
                                </div>
                            </div>
                        </TimelineIcon>
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
                                Extensive experience with RESTful APIs, and microservices
                                architecture
                            </p>
                        </li>
                        <li>
                            <p>
                                Extensive experience with WebSockets, Laravel Echo, Pusher, or
                                Socket.io.
                            </p>
                        </li>
                        <li>
                            <p>
                                Experience Third-Party APIs like Stripe, Twilio. TypeScript, Redux,
                                Tailwind CSS, Bootstrap, SCSS, and jQuery
                            </p>
                        </li>
                        <li>
                            <p>
                                Software Development Life Cycle (SDLC) and Agile/Scrum methodologies
                            </p>
                        </li>
                        <li>
                            <p>Docker containerization, Nginx, Apache server configuration</p>
                        </li>
                        <li>
                            <p>
                                Self-motivated team player with strong analytical and
                                problem-solving abilities
                            </p>
                        </li>
                        <li>
                            <p>
                                Strong verbal and written communication skills for team and client
                                interaction
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
