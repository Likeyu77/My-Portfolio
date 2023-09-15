import { useState } from 'react'
import { projects } from '../data'
import SectionTitle from './SectionTitle'
import CategoryButtons from './CategoryButtons'
import ProjectsContainer from './ProjectsContainer'

const Projects = () => {
  const categories = ['Front-End', 'Full-Stack', 'App', 'All']
  const [activeCategory, setActiveCategory] = useState('All')
  return (
    <section className="py-20  bg-base-200 " id="projects">
      <SectionTitle text="Personal Projects" />
      <CategoryButtons
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectsContainer activeCategory={activeCategory} projects={projects} />
    </section>
  )
}

export default Projects
