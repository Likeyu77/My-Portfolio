import { nanoid } from 'nanoid'

import {
  css,
  codeigniter,
  html,
  javascript,
  git,
  mongodb,
  mysql,
  nodejs,
  python,
  react,
  redux,
  swift,
  Homefurni,
  Homefurni_V2,
  Jobnote,
  java,
  Csharp,
  RecipeBlog,
  wordpress,
  PowerApps,
  PowerAutomate,
} from './assets/Index'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'Power Apps',
    icon: <img src={PowerApps} alt="css" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Power Automate',
    icon: <img src={PowerAutomate} alt="css" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'CSS',
    icon: <img src={css} alt="css" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'HTML',
    icon: <img src={html} alt="html" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <img src={javascript} alt="javascript" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <img src={react} alt="react" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <img src={redux} alt="redux" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Node Js',
    icon: <img src={nodejs} alt="nodejs" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'C#',
    icon: <img src={Csharp} alt="Csharp" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <img src={mongodb} alt="mongodb" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'MySQL',
    icon: <img src={mysql} alt="mysql" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Codeigniter',
    icon: <img src={codeigniter} alt="codeigniter" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: (
      <img
        src="https://www.guayerd.com/wp-content/uploads/2021/04/expressjs-logo.svg"
        alt="codeigniter"
        className="w-10 h-10"
      />
    ),
  },
  {
    id: nanoid(),
    title: 'Java',
    icon: <img src={java} alt="java" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <img src={python} alt="python" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Git',
    icon: <img src={git} alt="git" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Wordpress',
    icon: <img src={wordpress} alt="wordpress" className="w-10 h-10" />,
  },
]

export const experiences = [
  {
    id: nanoid(),
    time: 'June 2024 - April 2025',
    title: 'Dynamics 365 Support Engineer',
    company: 'Wicresoft (Outsourced to Microsoft)',
    jobContent:
      'As a Dynamics 365 CRM technical support specialist for the Asia-Pacific region, I provided comprehensive support including system installation, configuration, custom development, and data migration. Utilizing tools like network trace analysis, backend log inspection, and debugging utilities, I efficiently identified and resolved system issues to ensure business continuity. My expertise extended across multiple Microsoft products such as Dataverse, Power Pages, Power Automate, Customer Service Workspace, and Customer Insights - Journeys.When troubleshooting complex issues, I employed advanced diagnostic methods including Dataverse API metadata inspection and Kusto queries for log analysis. Working closely with the product team, I not only diagnosed problems but also designed effective solutions or workarounds to stabilize customer environments. Beyond troubleshooting, I developed custom Dynamics 365 solutions tailored to business requirements, often creating simplified prototypes to demonstrate functionality to clients. Delivering bilingual support in Chinese and English across multiple time zones, I consistently handled 7+ complex daily requests and managed over 20 tickets during peak periods, achieving an average initial response time under 20 minutes. Throughout my tenure, I successfully resolved more than 300 support cases while maintaining an exceptional 98% customer satisfaction rate.',
  },
  {
    id: nanoid(),
    time: 'Dec 2023 - March 2024',
    title: 'Web Developer',
    company: 'Quinlan Consulting Team · Internship',
    jobContent:
      'I developed and maintained 3 company websites, improving page load speed by 40% through HTML/CSS optimization and lazy loading, while also implementing interactive JavaScript features that increased user dwell time by 25%. Additionally, I conducted in-depth scans of 10+ client websites using SEMrush to identify and fix common SEO issues, including missing meta descriptions, duplicate content, and broken internal links. Furthermore, by collaborating with the marketing team to execute On-Page and Off-Page SEO strategies—such as keyword optimization, internal link restructuring, and high-quality backlink building—I helped 3 client websites achieve first-page rankings on Google for local searches, resulting in a 20% increase in inquiry conversions.',
  },
  {
    id: nanoid(),
    time: 'July 2021 - July 2023',
    title: 'Master of Information Technology',
    company: 'The University of Queensland',
    jobContent:
      'Web development; collaborating with team to develop web application, test and debug; code comprehension and resuable.',
  },
  {
    id: nanoid(),
    time: 'July 2018 - July 2021',
    title: 'Bachelor of Information System',
    company: 'The University of Queensland',
    jobContent:
      'Using tools like BPMN (Business Process Model and Notation) for visualizing and optimizing business processes, analyzing data to identify potential instances of fraud and deficiencies in organizational governance within the company.',
  },
]
export const projects = [
  {
    id: nanoid(),
    category: 'Front-End',
    img: (
      <img src={Homefurni_V2} alt="Shoes" className="rounded-xl h-64 w-64" />
    ),
    url: 'https://homefurni-v2.netlify.app',
    github: 'https://github.com/Likeyu77/homefurni_V2',
    title: 'HomeFurni_V2',
    text: 'JavaScript, CSS, React, Styled-Component, Auth0, Stripe, React Router',
  },
  {
    id: nanoid(),
    category: 'Front-End',
    img: <img src={Jobnote} alt="Shoes" className="rounded-xl h-64 w-64" />,
    url: 'https://jobnote.netlify.app',
    github: 'https://github.com/Likeyu77/JobNote',
    title: 'JobNote',
    text: 'JavaScript, CSS, React, Styled-Component, Redux, React Router',
  },
  {
    id: nanoid(),
    category: 'Front-End',
    img: <img src={Homefurni} alt="Shoes" className="rounded-xl h-64 w-64" />,
    url: 'https://homefurni.netlify.app',
    github: 'https://github.com/Likeyu77/HomeFurni',
    title: 'HomeFurni',
    text: 'JavaScript, React, Redux, React Router, TailwindCss, daisyUI',
  },
  {
    id: nanoid(),
    category: 'Back-End',
    img: (
      <img
        src={RecipeBlog}
        alt="Recipe Blog"
        className="rounded-xl h-64 w-64"
      />
    ),
    // url: 'https://homefurni.netlify.app',
    github: 'https://github.com/Likeyu77/Recipe_Blog',
    title: 'Recipe Blog',
    text: 'Express, Node.JS, MongoDB',
  },
]
