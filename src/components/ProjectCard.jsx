import { AiOutlineEye, AiFillGithub } from 'react-icons/ai'

const ProjectCard = ({ project }) => {
  const { img, url, github, text, title } = project
  return (
    <div className="card w-64 sm:w-72 bg-base-100 shadow-xl m-4 justify-self-auto hover:scale-105 duration-300">
      <figure className="p-4 relative group">
        <img src={img} alt="Shoes" className="rounded-xl h-64 w-64" />

        <div
          className="absolute h-64 w-56 sm:w-64 bg-gray-400 opacity-0 rounded-xl z-10 
        flex justify-around items-center group-hover:opacity-60">
          <a href={url} target="_blank">
            <AiOutlineEye className="h-8 w-8 bg-black rounded-full hover:scale-125 duration-200" />
          </a>
          <a href={github} target="_blank">
            <AiFillGithub className="h-8 w-8 bg-black rounded-full hover:scale-125 duration-200" />
          </a>
        </div>
      </figure>
      <div className="card-body items-center text-star px-4 pb-4 pt-0">
        <h2 className="card-title">{title}</h2>
        <p className="text-xs">{text}</p>
      </div>
    </div>
  )
}

export default ProjectCard
