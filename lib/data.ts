import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiFirebase,
  SiGit,
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiJoomla,
  SiMysql,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiPhp,
    text: "PHP",
  },
  {
    icon: SiLaravel,
    text: "Laravel",
  },
  {
    icon: SiWordpress,
    text: "Wordpress",
  },
  {
    icon: SiJoomla,
    text: "Joomla",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMysql,
    text: "Mysql",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: any[];
}

export const projects: Project[] = [
  {
    title: "Motivations AI Personality Assessment",
    description: "It is the desire to do something because it is interesting, enjoyable, or personally meaningful. In the context of artificial intelligence (AI), intrinsic motivation is what drives an AI system to keep learning and improving itself.",
    link: "https://motivationsai.com",
    tags: [
			{
				name: "laravel",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "orange-text-gradient",
			},
			{
				name: "artificialintelligence",
				color: "blue-text-gradient",
			},
			{
				name: "vanilajs",
				color: "pink-text-gradient",
			},
		],
  },
  {
    title: "Outside Chicago Website",
    description: "The Outside Chicago website served as a comprehensive guide to activities available outside the city, offering detailed descriptions, locations, and amenities for various destinations.",
    link: "https://outsidechicago.com/",
    tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "pink-text-gradient",
			},
			{
				name: "flexiblecontent",
				color: "orange-text-gradient",
			},
			{
				name: "vanilajs",
				color: "red-text-gradient",
			},
			{
				name: "customplugin",
				color: "white-text-gradient",
			},
			{
				name: "customtheme",
				color: "green-text-gradient",
			}
		],
  },
  {
    title: "Essence",
    description: "ESSENCE Communications is the number one media, technology, and commerce company dedicated to Black women and inspires a global audience of more than 20 million through diverse storytelling and immersive original content.",
    link: "https://essence.com/",
    tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "vanilajs",
				color: "orange-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "white-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
  },
  {
    title: "Dermatological Care",
    description: "Dermatological care is critical to addressing health care inequity and we are expanding access to these services. Increasing access to dermatological care will allow for earlier detection of life-threatening conditions such as skin cancer and provide the preventative treatment necessary to help improve health inequities.",
    link: "https://usdermatologypartners.com",
    tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "orange-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
  },
  {
    title: "Jobs Portal Cointelegraph",
    description: "Cointelegrapgh is a company based in the US which specializes in The most recent news about the crypto industry at Cointelegraph. Latest news about bitcoin, Ethereum, blockchain, mining, cryptocurrency prices, and more",
    link: "https://jobs.cointelegraph.com",
    tags: [
			{
				name: "php",
				color: "blue-text-gradient",
			},
			{
				name: "bootstrap",
				color: "green-text-gradient",
			},
			{
				name: "customplugin",
				color: "orange-text-gradient",
			},
			{
				name: "customtheme",
				color: "pink-text-gradient",
			}
		],
  },
  {
    title: "Rudis",
    description: "RUDIS is wrestling. RUDIS outfits athletes with premium gear, apparel, wrestling shoes, and training shoes.",
    link: "https://rudis.com/",
    tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Gubloo Technologies",
    logo: "/gubloo.png",
    position: "Senior Software Engineer",
    description: "Oversee the technical aspects of all projects, ensuring quality and efficiency. Independently work on personal software projects, showcasing individual initiative and expertise.",
    years: "Sep, 2022 - Dec, 2023",
  },
  {
    company: "Strategic Systems International",
    logo: "/ssi.jpg", 
    position: "Principle Software Engineer", 
    description: "Develop, document, and test software to meet end-users' needs and align with business goals. Provide technical guidance to development teams, fostering a collaborative and innovative environment. Take ownership of personal projects, demonstrating self-driven initiative. Collaborate effectively within a team, contributing to a positive and productive work environment. Offer mentorship to team members, sharing knowledge and expertise",
    years: "Feb, 2021 - Sep, 2022",
  },
  {
    company: "Embrace IT Pakistan",
    logo: "/embraceit.jpeg",
    position: "Software Engineer",
    description: "Provide technical guidance to development teams, ensuring the successful execution of projects. Independently work on personal software projects, showcasing individual initiative and expertise. Manage projects, ensuring timely delivery and adherence to quality standards. Communicate effectively with clients, addressing their needs and ensuring satisfaction.",
    years: "Dec, 2018 - Feb, 2021",
  },
  {
    company: "IPLEX Technologies",
    logo: "/iplex.jpeg",
    position: "Sr. Web Developer",
    description: "Provide technical guidance to development teams, ensuring project success. Independently work on personal projects, demonstrating creativity and technical proficiency. Manage projects and products, overseeing the entire development lifecycle. Focus on client retention through effective communication and understanding of client needs. Provide leadership and mentorship to foster a collaborative and highperforming team",
    years: "Aug, 2013 - Dec, 2018",
  },
  {
    company: "Riphah International University",
    logo: "/riphah.jpg",
    position: "Student",
    description:
      "I graduated with a Bachelor in Software Engineering from Riphah International University, Islamabad.",
    years: "Jan, 2009 - Jan, 2013",
  },
];

export const aboutYou = {
  name: "Awais Ahmed Khan",
  phone: "+923335213118",
  description:
    "👋 Hi, I’m @aakhan-me 👀 I’m interested in Learning and development 🌱 I’m currently learning python and reactjs 💞️ I’m looking to collaborate on open source projects",
  yearsOfExperience: "10 years",
  location: "Islamabad, Pakistan",
  email: "info@awaisworks.com",
};

export const logoText = "@aakhan";

export const marketingHeadlines = {
  mainHeadline: "Versatile Product Manager & Web Developer | 10+ Years Experience",
  subHeadline: "With over 10 years of experience in product management and ownership, coupled with a specialization in web development, I bring a versatile skill set to the table. As a dedicated team player, I thrive in collaborative environments while also excelling in independent project work. My expertise spans across a robust tech stack including PHP (Laravel, WordPress), JavaScript (React.js, Next.js, Alpine.js), and CSS (TailwindCSS, Bootstrap, Material UI). Additionally, I have a keen eye for quality assurance, with proficiency in writing test cases and conducting testing using tools like JMeter and Postman. Let's connect and explore opportunities for collaboration and growth!",
};

export const websiteMetadata = {
  title: "Awais Ahmed Khan | Full Stack Developer",
  description: "👋 Hi, I’m @aakhan-me 👀 I’m interested in Learning and development 🌱 I’m currently learning python and reactjs 💞️ I’m looking to collaborate on open source projects.",
};
