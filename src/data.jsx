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
]

export const experiences = [
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
]
