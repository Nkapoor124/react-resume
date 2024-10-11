import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Nevin Kapoor Resume',
  description: "Welcome to my professional platform, where I bring a unique blend of business acumen, technology expertise, and customer experience to help organizations achieve their goals. As an MBA candidate at Illinois Institute of Technology, I have cultivated a deep understanding of business management and technology, with hands-on experience in customer retention, process improvement, and e-commerce strategies.\n" +
      "\n" +
      "Whether it’s optimizing customer relationships, enhancing sales funnels, or driving digital transformation, my goal is to deliver measurable outcomes that fuel growth and innovation. Explore my experience, skills, and insights, and discover how I can help your business thrive in today’s competitive landscape",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: "I'm Nevin Kapoor.",
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Chicago-based <strong className="text-stone-100">Business Management and Technology Specialist</strong>, currently focusing on
        <strong className="text-stone-100">digital transformation</strong> and business growth strategies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time, you’ll find me exploring new <strong className="text-stone-100">CRM solutions</strong>, refining my
        <strong className="text-stone-100">project management</strong> skills, or enjoying life in beautiful
        <strong className="text-stone-100">Carol Stream</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: "I'm Nevin Kapoor, a Business Management and Technology Specialist with a focus on digital transformation, CRM solutions, and project management. I thrive on driving growth and optimizing business processes, with additional expertise in the healthcare sector.",
  aboutItems: [
    {label: 'Location', text: 'Carol Stream, IL', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Interests', text: 'Project Management, CRM Solutions, Automobiles', Icon: SparklesIcon},
    {label: 'Study', text: 'MBA in Business/Technology, Illinois Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Independent Business Consultant with Healthcare Expertise', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 8,
      },
      {
        name: 'Punjabi',
        level: 8,
      },
    ],
  },
  {
    name: 'Business and Technology',
    skills: [
      {
        name: 'CRM Solutions (Salesforce, Zendesk)',
        level: 9,
      },
      {
        name: 'Project Management',
        level: 8,
      },
      {
        name: 'Market Analysis',
        level: 7,
      },
    ],
  },
  {
    name: 'E-Commerce and Digital Strategy',
    skills: [
      {
        name: 'Shopify/WooCommerce',
        level: 9,
      },
      {
        name: 'SEO (Search Engine Optimization)',
        level: 8,
      },
      {
        name: 'Conversion Optimization',
        level: 8,
      },
    ],
  },
  {
    name: 'Data and Analytics',
    skills: [
      {
        name: 'Google Analytics',
        level: 8,
      },
      {
        name: 'KPI/Goal Attainment',
        level: 7,
      },
      {
        name: 'Data Analysis',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Salus Securus AI',
    description: 'A healthcare-focused project providing innovative patient safety solutions for home health, targeting Parkinson’s patients.',
    url:"",
    image: "",
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - December 2024',
    location: 'Illinois Institute of Technology',
    title: 'MBA in Business/Technology',
    content: (
      <p>
        Gained expertise in business management and technology, focusing on digital transformation, CRM solutions, and project management. Developed strategic thinking and problem-solving skills through various projects, including the Salus Securus AI project for healthcare.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2018 - Present',
    location: 'Northwestern Medicine Central DuPage Hospital',
    title: 'Patient Safety Technician',
    content: (
      <p>
        Led patient safety initiatives that reduced workplace hazards by 25%. Conducted safety audits and cross-functional team meetings, improving compliance and reducing incidents. Demonstrated strong teamwork and problem-solving skills in a healthcare setting.
      </p>
    ),
  },
  {
    date: 'May 2024 - August 2024',
    location: 'Guesty',
    title: 'Customer Experience Specialist Intern',
    content: (
      <p>
        Increased customer retention by 15% through data-driven strategies and personalized service recommendations. Streamlined support procedures by implementing an automated ticketing system, reducing response times by 20%.
      </p>
    ),
  },
  {
    date: 'November 2016 - Present',
    location: 'Self-employed',
    title: 'E-Commerce Business Consultant',
    content: (
      <p>
        Developed and executed e-commerce strategies, increasing sales by 60% and expanding the customer base by 35%. Implemented CRM systems to optimize customer service and support.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for business inquiries, collaboration, or general questions. I look forward to connecting with you!',
  items: [
    {
      type: ContactType.Email,
      text: 'kapoornev18@gmail.com',
      href: 'mailto:kapoornev18@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Carol Stream, IL, USA',
      href: 'https://www.google.com/maps/place/Carol+Stream,+IL',
    },
    {
      type: ContactType.LinkedIn,
      text: 'nkapoor124',
      href: 'https://www.linkedin.com/in/nkapoor124/',
    },
  ],
};

/**

Social items*/
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nkapoor124/'%7D,
];
