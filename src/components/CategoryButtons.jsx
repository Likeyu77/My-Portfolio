import React from 'react'

const CategoryButtons = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 mt-6">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`btn btn-outline  mx-2 mb-4 sm:mx-4 ${
              activeCategory === category ? 'btn-primary' : 'btn-secondary'
            }`}
            onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}
// className="flex flex-row justify-center mt-6"
export default CategoryButtons
