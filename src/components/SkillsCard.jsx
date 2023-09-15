const SkillsCard = ({ icon, title }) => {
  return (
    <div className="grid-span-1 flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full flex justify-center items-center hover:bg-base-200">
        <span>{icon}</span>
      </div>
      <p className="font-bold">{title}</p>
    </div>
  )
}
export default SkillsCard
