import ActionButton from '@/components/resume/action-button';
import CoverLetter from '@/components/resume/cover-letter';
import TimelineIcon from '@/components/resume/timeline-icon';
import Image from 'next/image';
import { MdLocationPin } from 'react-icons/md';
import YearsOfExperience, { getTotalYearsOfExperience } from './experience';

import { profileImage, user } from '@/app/metadata';
const social = {
    GitHub: user.github,
    Linkedin: user.linkedin,
    Codeforces: user.codeforces,
    LeetCode: user.leetcode
};

export const metadata = {
    title: 'Resume | Kamruzzaman'
};

export default function Home() {
    return (
        <div className="resume">
            <div className="page-container">
                <ActionButton />
                <div className="resume-box with-photo">
                    <div className="left-box">
                        <Image
                            src={profileImage}
                            className="profile-photo"
                            width={150}
                            height={150}
                            alt="kamruzzaman, kamruzzaman profile image"
                        />
                        <div className="name--title">
                            <h1 className="text-xl font-bold">KAMRUZZAMAN</h1>
                            <h5 className="subtitle capitalize">Software Engineer</h5>
                        </div>
                        {/* contact info */}
                        <div className="about-me">
                            <h5 className="subtitle">About Me</h5>
                            <p className="mb-4 text-justify text-sm">
                                {getTotalYearsOfExperience()} of hands-on experience in PHP,
                                Laravel, WordPress, Vue.js, React, and AWS. Skilled in building and
                                optimizing web apps from architecture to deployment. Passionate
                                about learning new tools and delivering scalable, high-quality
                                solutions in team environments.
                            </p>
                        </div>

                        <ul className="mb-3 space-y-1 text-sm">
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
                                    className="flex items-center gap-1">
                                    <span className="font-semibold">Email:</span>
                                    <span className="underline"> {user.email}</span>
                                </a>
                            </li>

                            <li className="flex items-center">
                                <MdLocationPin size={12} />
                                <p>Mirpur 12, Dhaka, Bangladesh</p>
                            </li>
                        </ul>

                        {/* Education */}
                        <div className="subtitle">
                            <h5 className="subtitle-text">Educations</h5>
                        </div>
                        <div className="border-primary-500 relative mb-3 space-y-2 border-l pl-3 text-sm">
                            <TimelineIcon>
                                <p className="font-bold">Bachelor of Science</p>
                                <p>Computer Science & Engineering</p>
                                <p className="mb-2">2022 - Present</p>
                                <p className="font-semibold italic">Southeast University.</p>
                                <div className="flex items-center">
                                    <MdLocationPin size={12} />
                                    <span>251/A Tejgaon I/A, Dhaka</span>
                                </div>
                            </TimelineIcon>

                            <TimelineIcon>
                                <p className="font-bold">Diploma in Engineering </p>
                                <p>Computer Technology</p>
                                <p className="mb-2">2015 - 2019</p>
                                <p className="font-semibold italic">
                                    Rumdo Institute of Modern Technology.
                                </p>
                                <div className="flex items-center">
                                    <MdLocationPin size={12} />
                                    <span>Mymensingh Bypass.</span>
                                </div>
                            </TimelineIcon>
                        </div>
                        {/* Key Skills */}
                        <div className="subtitle">
                            <h5 className="subtitle-text">Key Skills</h5>
                        </div>

                        <section className="flex flex-wrap gap-2">
                            <span className="rounded-sm border border-rose-400 bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800">
                                PHP/Laravel
                            </span>
                            <span className="rounded-sm border border-yellow-300 bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                JavaScript
                            </span>
                            <span className="rounded-sm border border-sky-400 bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800">
                                WordPress
                            </span>
                            <span className="rounded-sm border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                React
                            </span>
                            <span className="rounded-sm border border-green-400 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Vue
                            </span>
                            <span className="me-2 rounded-sm border border-amber-500 bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                                AWS
                            </span>
                        </section>
                        {/* Training */}
                        <div className="subtitle left mt-3">
                            <h5 className="subtitle-text">Training</h5>
                        </div>
                        <div className="text-sm">
                            <div className="mb-2">
                                <a href="#" target="_blank" className="resume-link font-bold">
                                    PHP/Laravel (2019)
                                </a>
                                <p className="italic">Creative It Institute, Dhaka.</p>
                            </div>
                            <div>
                                <a
                                    href="https://learnwithsumit.com/certificates/verify/LWSCTXN-F584A5R7"
                                    target="_blank"
                                    className="resume-link font-bold">
                                    Redux (2023)
                                </a>
                                <p className="italic">Learn with Sumit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        {/* Social */}
                        <div className="mb-4 flex flex-wrap gap-4 md:justify-end">
                            {Object.entries(social).map(([key, value]) => (
                                <a
                                    key={key}
                                    href={value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary-500 text-sm font-semibold text-gray-800 underline">
                                    <span>{key}</span>
                                </a>
                            ))}
                        </div>

                        {/* Experience section */}
                        <h5 className="subtitle">Work Experience</h5>

                        <div className="border-primary-500 relative mb-4 space-y-4 border-l pl-4">
                            <TimelineIcon>
                                <h3 className="mb-1 flex flex-wrap items-center gap-y-2 font-bold text-gray-900">
                                    <span className="leading-0">Software Engineer</span>
                                    <div className="ml-1 flex gap-1 text-sm font-medium">
                                        <span>at</span>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://wedevs.com"
                                                className="underline"
                                                target="_blank">
                                                weDevs
                                            </a>
                                            <YearsOfExperience startDate="2024-11-01" />
                                        </div>
                                    </div>
                                </h3>
                                <div className="mb-3 items-center justify-between gap-4 text-gray-700 md:flex print:flex">
                                    <time className="block text-sm font-normal">
                                        NOV 2024 - Present
                                    </time>
                                    <address className="flex items-center text-xs">
                                        <MdLocationPin size={12} />
                                        <span>
                                            House:1005, Avenue:11, Road:09, Mirpur DOHS 1216
                                        </span>
                                    </address>
                                </div>
                                <ul className="bullet-list ml-0">
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Developed and enhanced Dokan and Dokan Pro multi-vendor
                                            marketplace plugins for WordPress.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Built advanced features like vendor management,
                                            subscriptions, and booking integrations in Dokan Pro.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Enhanced wePOS to integrate physical retail systems with
                                            WooCommerce stores.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Delivered scalable solutions using PHP, JavaScript, and
                                            React.js.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Designed intuitive interfaces in collaboration with
                                            UX/UI teams to improve user experience.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Produced developer documentation with technical writers,
                                            streamlining onboarding and support.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineIcon>

                            <TimelineIcon>
                                <h3 className="mb-1 flex flex-wrap items-center gap-y-2 font-bold text-gray-900">
                                    <span className="leading-0">Software Engineer</span>
                                    <div className="ml-1 flex gap-1 text-sm font-medium">
                                        <span>at</span>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://mononsoft.org"
                                                className="underline"
                                                target="_blank">
                                                MononSoft Ltd.
                                            </a>
                                            <a
                                                href="https://jmigroup-bd.com"
                                                className="underline"
                                                target="_blank">
                                                (JMI Group)
                                            </a>
                                            <YearsOfExperience
                                                startDate="2021-07-01"
                                                endDate="2024-10-31"
                                            />
                                        </div>
                                    </div>
                                </h3>
                                <div className="mb-3 items-center justify-between gap-4 text-gray-700 md:flex print:flex">
                                    <time className="block text-sm font-normal">
                                        JUL 2021 - OCT-2024
                                    </time>
                                    <address className="flex items-center text-xs">
                                        <MdLocationPin size={12} />
                                        <span>50/B New Eskaton Road, Dhaka 1000</span>
                                    </address>
                                </div>
                                <ul className="bullet-list ml-0">
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Developing an ERP system based on Laravel, Vue.js and
                                            React.js.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>Developing software solutions to meet customer needs.</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Creating and implementing the source code of new
                                            applications.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>Testing source code and debugging code.</p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Evaluating existing applications and performing updates
                                            and modifications.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Produced developer documentation with technical writers,
                                            streamlining onboarding and support.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineIcon>

                            <TimelineIcon>
                                <h3 className="mb-1 flex flex-wrap items-center gap-y-2 font-bold text-gray-900">
                                    <span className="leading-0">Jr. Software Engineer</span>
                                    <div className="ml-1 flex gap-1 text-sm font-medium">
                                        <span>at</span>
                                        <div className="flex items-center gap-1">
                                            <a
                                                href="https://maxsop.com/"
                                                className="underline"
                                                target="_blank">
                                                MaxSOP
                                            </a>
                                            <YearsOfExperience
                                                startDate="2020-05-01"
                                                endDate="2021-06-30"
                                            />
                                        </div>
                                    </div>
                                </h3>

                                <div className="mb-3 items-center justify-between gap-4 text-gray-700 md:flex print:flex">
                                    <time className="block text-sm font-normal">
                                        MAY 2020 – JUN 2021
                                    </time>
                                    <address className="flex items-center text-xs">
                                        <MdLocationPin size={12} />
                                        <span>27/2 Ram Babu Road, Mymensingh-2200.</span>
                                    </address>
                                </div>
                                <ul className="bullet-list ml-0">
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Developing web applications based on PHP frameworks -
                                            Laravel, Vue JS.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Build efficient, testable & reusable codes. Modify
                                            existing code as needed.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Executed and monitored standards for user interfaces
                                            page design and development.
                                        </p>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="bullet-point"></div>
                                        <p>
                                            Perform other operational tasks based on{' '}
                                            {`"as and when required"`}.
                                        </p>
                                    </li>
                                </ul>
                            </TimelineIcon>
                        </div>

                        {/* Additional Skills */}
                        <h5 className="subtitle">Additional Skills</h5>

                        <ul className="bullet-list">
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>A solid foundation on OOP, Algorithm and Data Structure.</p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>Solid Knowledge on Web Services likes REST/JSON APIs.</p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>SQL, MySQL, TypeScript, Redux, Tailwind CSS and Bootstrap.</p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>Experience with SDLC and Agile methodologies.</p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>
                                    Experience in working with version control systems like Git,
                                    GitHub, and Gitlab.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>
                                    Basic knowledge of Cloud Platforms like AWS, Google Cloud
                                    Platform.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>Experience working in a Dockerized environment.</p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>
                                    Familiarity with DevOps processes, operation tools and Linux
                                    based systems.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>
                                    Ability to work individually and independently with minimal
                                    supervision.
                                </p>
                            </li>
                            <li className="flex items-center">
                                <div className="bullet-point"></div>
                                <p>
                                    Problem-solving skills, Self-managed, independent, initiative
                                    and proactive.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <CoverLetter />
        </div>
    );
}
