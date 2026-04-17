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
                                PHP • Laravel • JavaScript • React • Vue • AWS
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
                            Strong problem-solving skills with a focus on scalable system design,
                            performance optimization, and clean, maintainable code. 4+ years of
                            experience engineering high-throughput web applications, APIs, and
                            distributed systems. Deep expertise in PHP (Laravel) and modern
                            JavaScript frameworks (React, Vue). Proven track record of delivering
                            high-impact solutions across multi-vendor platforms and enterprise ERP
                            systems, bridging product vision with rigorous engineering standards.
                        </p>
                    </div>

                    {/* Technical Skills */}
                    <h5 className="section-heading">TECHNICAL SKILLS</h5>

                    <div className="mb-4 text-sm">
                        <ul className="bullet-list">
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Languages & Frameworks:</span>
                                    <p>
                                        PHP (Laravel), JavaScript/TypeScript, React.js, Next.js,
                                        Vue.js, Nuxt.js, Express.js
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Backend & Architecture:</span>
                                    <p>
                                        REST APIs, Microservices, MVC Architecture, WebSockets,
                                        Event-driven systems
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Databases:</span>
                                    <p>MySQL, PostgreSQL, Redis</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">DevOps & Tools:</span>
                                    <p>
                                        Docker, Git, GitHub Actions (CI/CD), AWS (EC2, ECS, RDS,
                                        S3), Nginx, Apache
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Testing & Quality:</span>
                                    <p>PHPUnit, Playwright</p>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-1">
                                    <span className="font-bold">Other:</span>
                                    <p>
                                        OOP, Data Structures & Algorithms, System Design,
                                        Agile/Scrum
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
                                    <h3>Software Engineer L2</h3>
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
                                        Designed and developed scalable multi-vendor marketplace
                                        features used by thousands of users.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Built and enhanced complex modules including vendor
                                        management, subscriptions, booking systems, and payment
                                        integrations.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Optimized database queries and application performance,
                                        improving system efficiency and response time.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Developed RESTful APIs and frontend integrations using React
                                        and modern JavaScript practices.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated cross-functionally with product, QA, and design
                                        teams to deliver production-ready features.
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
                                        Architected and developed a modular ERP system covering
                                        inventory, accounting, and HR management.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Designed scalable backend systems using Laravel and Vue.js,
                                        supporting multiple business workflows.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Improved operational efficiency by automating manual
                                        processes across departments.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Built and maintained REST APIs and service-oriented
                                        architecture for system integration.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Led technical discussions, mentored junior developers, and
                                        contributed to system design decisions.
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
                                        Developed full-stack web applications using Laravel, Vue.js,
                                        and MySQL.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Implemented clean MVC architecture and reusable components
                                        for scalable development.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Collaborated in Agile teams, contributing to code reviews
                                        and improving team productivity.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Communicated with clients to gather requirements and deliver
                                        tailored technical solutions.
                                    </p>
                                </li>
                            </ul>
                        </TimelineIcon>
                    </div>

                    {/* Project Highlights */}
                    <h5 className="section-heading">PROJECT HIGHLIGHTS</h5>

                    <div className="mb-4 text-sm">
                        <ul className="bullet-list">
                            <li>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">
                                        Multi-Vendor Marketplace System
                                    </span>
                                    <p>
                                        Built scalable vendor management and payment systems
                                        supporting complex business logic. Integrated third-party
                                        services including payment gateways and booking systems.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="flex flex-col gap-1">
                                    <span className="font-bold">Enterprise ERP Platform</span>
                                    <p>
                                        Designed end-to-end ERP solution with multiple modules and
                                        real-time data handling. Implemented modular architecture
                                        for maintainability and scalability.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Education */}
                    <h5 className="section-heading break-before-page">EDUCATION</h5>

                    <div className="timeline-container">
                        <TimelineIcon>
                            <div className="job-header mb-0">
                                <div className="font-bold">
                                    <h3>BSc in Computer Science & Engineering (Running)</h3>
                                    <div className="text-sm font-medium">
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
                            <div className="job-header mb-0">
                                <div className="font-bold">
                                    <h3>Diploma in Engineering (Computer Technology)</h3>
                                    <div className="text-sm font-medium">
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

                    {/* Additional Information */}
                    <h5 className="section-heading">ADDITIONAL INFORMATION</h5>

                    <ul className="bullet-list">
                        <li>
                            <p>Strong foundation in Data Structures and Algorithms</p>
                        </li>
                        <li>
                            <p>Experience with real-time systems (WebSockets, Pusher, Socket.io)</p>
                        </li>
                        <li>
                            <p>Familiar with third-party APIs (Stripe, Twilio)</p>
                        </li>
                        <li>
                            <p>Comfortable with system design and scalable architecture</p>
                        </li>
                        <li>
                            <p>
                                Design, code, test, and implement according to software design
                                specifications following standard coding styles and practices.
                            </p>
                        </li>
                        <li>
                            <p>Analyze the requirements and understand the deliverables.</p>
                        </li>
                        <li>
                            <p>
                                Ensure that projects are accurately estimated and delivered to
                                schedule.
                            </p>
                        </li>
                        <li>
                            <p>Participate in code/design reviews.</p>
                        </li>
                        <li>
                            <p>Collaborate with team members and ensure knowledge transfer.</p>
                        </li>
                        <li>
                            <p>
                                Actively contribute to the process of continual improvement,
                                concerning self, team, and systems.
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
