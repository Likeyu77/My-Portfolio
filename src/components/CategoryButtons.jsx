import React from 'react'

const CategoryButtons = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-row justify-center mt-6">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={`btn btn-outline mx-2 sm:mx-4 ${
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

export default CategoryButtons
