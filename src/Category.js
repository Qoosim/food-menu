import React, { useState } from 'react';

const Category = ({ filterCategories, categories, onChangeCategory }) => {
  const [mealCategories] = useState('default');

  const handleChange = (e) => {
    onChangeCategory(e.target.value);
  }

  return (
    <div className="flex flex-col place-items-center my-8">
      <h3 className="font-mont font-bold text-xl mb-4">Select a Category </h3>
      <select
        className={`rounded w-44 mb-8 px-2 bg-transparent outline outline-1 border-0 ${
          mealCategories === 'default' && 'text-slate-400'
        }`}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="default" disable="+true" hidden>Category</option>
        {
          categories.map((category, index) => {
            <option key={index} value={category}>
              {category}
            </option>
          })
        }
      </select>
    </div>
  )
}

export default Category;
