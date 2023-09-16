import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
import Experiences from './Experiences'
const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="Tech Stack & Experiences" />
      <div className="flex flex-col lg:flex-row">
        <div className="  lg:w-1/2  p-12 sm:p-16 grid grid-cols-4 gap-4">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill} />
          })}
        </div>

        <article className="lg:w-1/2">
          <Experiences />
        </article>
      </div>
    </section>
  )
}
export default Skills
