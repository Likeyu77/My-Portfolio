import { nanoid } from 'nanoid'
// import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
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
    title: 'MongoDB',
    icon: <img src={mongodb} alt="mongodb" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Node Js',
    icon: <img src={nodejs} alt="nodejs" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'MySql',
    icon: <img src={mysql} alt="mysql" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Codeigniter',
    icon: <img src={codeigniter} alt="codeigniter" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <img src={python} alt="python" className="w-10 h-10" />,
  },
  {
    id: nanoid(),
    title: 'Swift',
    icon: <img src={swift} alt="swift" className="w-10 h-10" />,
  },
]

export const experiences = [
  {
    id: nanoid(),
    time: 'July 2021 - July 2023',
    title: 'Master of Information Technology',
    company: 'The University of Queensland',
    jobContent:
      'Using C#(Object-Oriented Programming) and Unity 2D platform; collaborating with team to do test and debug; code comprehension and resuable, working within real world.',
  },
  {
    id: nanoid(),
    time: 'July 2021 - July 2023',
    title: 'Master of Information Technology',
    company: 'The University of Queensland',
    jobContent:
      'Using C#(Object-Oriented Programming) and Unity 2D platform; collaborating with team to do test and debug; code comprehension and resuable, working within real world.',
  },
]
export const projects = [
  {
    id: nanoid(),
    category: 'Front-End',
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    category: 'Full-Stack',
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    category: 'App',
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
]
