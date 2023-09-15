import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsContainer = ({ projects, activeCategory }) => {
  let activeProjects = projects

  if (activeCategory !== 'All') {
    activeProjects = projects.filter(
      (project) => project.category === activeCategory
    )
  }
  const numProjects = activeProjects.length

  return (
    <div className="flex justify-center">
      <div
        className={`w-2/3 bg-neutral rounded-lg grid lg:grid-cols-2 xl:grid-cols-3
       md:grid-cols-1 gap-2 mt-16 justify-items-center  `}>
        {activeProjects.map((project) => {
          return <ProjectCard key={project.id} project={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectsContainer
