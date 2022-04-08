import React from 'react';

const Category = ({ filterCategories, categories }) => {
  return (
    <div>
      {
        categories.map((category, index) => {
          return (
            <button 
              key={index}
              onClick={() => filterCategories(category)}
            >
              {category}
            </button>
          )
        })
      }
    </div>
  )
}

export default Category;
