import { useState } from 'react'
import { projects } from '../data'
import SectionTitle from './SectionTitle'
import CategoryButtons from './CategoryButtons'
import ProjectsContainer from './ProjectsContainer'

const Projects = () => {
  const allCategories = projects.map((project) => {
    return project.category
  })

  const uniqueCategory = ['All', ...new Set(allCategories)]
  const [activeCategory, setActiveCategory] = useState('All')
  return (
    <section className="py-20  bg-base-200 " id="projects">
      <SectionTitle text="Personal Projects" />
      <CategoryButtons
        categories={uniqueCategory}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ProjectsContainer activeCategory={activeCategory} projects={projects} />
    </section>
  )
}

export default Projects
