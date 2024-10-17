import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import portfolioImage1 from "../images/portfolio/googlecert.jpg";
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
  title: 'Nevin Kapoor',
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
        <strong className="text-stone-100"> digital transformation</strong> and business growth strategies.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my spare time, you’ll find me exploring <strong className="text-stone-100">CRM solutions</strong> and <strong>emerging technologies</strong>, refining my
        <strong className="text-stone-100"> project management</strong> skills, or traveling to discover new cultures.
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
    {label: 'Interests', text: 'Project Management, CRM Solutions', Icon: SparklesIcon},
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
        level: 3,
      },
      {
        name: 'Punjabi',
        level: 4,
      },
    ],
  },
  {
    name: 'Business and Technology',
    skills: [
      {
        name: 'CRM Solutions (Salesforce, Zendesk)',
        level: 7,
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
        level: 7,
      },
      {
        name: 'Conversion Optimization',
        level: 7,
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
        level: 8,
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
    title: 'Google Project Management Professional Certificate',
    description: 'A healthcare-focused Certification. --Image is temporary',
    url:"https://www.coursera.org/account/accomplishments/professional-cert/GRFFONALTRYA?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof",
    image: portfolioImage1,
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
      text: 'Nkapoor124',
      href: 'https://www.linkedin.com/in/nkapoor124/',
    },
  ],
};

/**

Social items*/
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/nkapoor124/'},
];
