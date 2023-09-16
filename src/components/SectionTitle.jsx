const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-gray-200 pb-5 flex justify-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium capitalize">
        {text}
      </h2>
    </div>
  )
}
export default SectionTitle
