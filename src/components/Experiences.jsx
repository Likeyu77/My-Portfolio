import { experiences } from '../data'
// import { BsRocket } from 'react-icons/bs'
const Experiences = () => {
  return (
    <>
      {experiences.map((experience, index) => {
        const { id, time, title, company, jobContent } = experience
        return (
          <article
            key={id}
            className=" m-16 p-4 bg-base-200 text-base-content rounded-lg hover:shadow-[5px_5px_0px_0px_rgba(135,22,210)] duration-150">
            <div className="flex flex-row justify-between px-4">
              <h3>{time}</h3>
              <div>
                <h4>{title}</h4>
                <p>{company}</p>
              </div>
            </div>
            <p className="p-4">{jobContent}</p>
          </article>
        )
      })}
    </>
  )
}

export default Experiences
