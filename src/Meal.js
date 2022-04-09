import React from 'react';

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
    <div className="grid grid-cols-2 grid-flow-row gap-8 pb-8">
      {
        meals.map((meal) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = meal;
          return (
            <article key={idCategory} className="flex min-h-full">
              <img
                src={strCategoryThumb}
                alt={strCategory}
                className="mr-8 border-2 border-yellow-600 rounded" />
              <div>
                <div className="flex justify-between border-b-2 border-dotted border-orange-300 pb-2">
                  <h3 className="font-bold font-mont">{strCategory}</h3>
                  <h3 className="font-roboto font-bold text-yellow-600">${randomPrice()}</h3>
                </div>
                <p className="mt-2 font-pt-sans text-lg">{strCategoryDescription.slice(0, 120) + '... '}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Menu;
