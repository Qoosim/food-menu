import React, { useState } from 'react';

const Menu = ({ meals }) => {

  const priceLists = [
    12.20,
    15.21,
    20.10,
    9.15,
    10.50,
  ]

  const randomPrice = () => {
    let randomNum = Math.floor(Math.random() * priceLists.length);
    return priceLists[randomNum];
  }

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4">
      {
        meals.map((meal) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = meal;
          return (
            <article key={idCategory} className="flex min-h-full">
              <img src={strCategoryThumb} alt={strCategory} />
              <div>
                <div>
                  <h3>{strCategory}</h3>
                  <h3>${randomPrice()}</h3>
                </div>
                    <p>{strCategoryDescription.slice(0, 120) + '... '}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Menu;
