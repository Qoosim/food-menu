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
    <div>
      {
        meals.map((meal) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = meal;
          return (
            <article key={idCategory}>
              <img src={strCategoryThumb} alt={strCategory} />
              <div>
                <div>
                  <h3>{strCategory}</h3>
                  <h3>${randomPrice()}</h3>
                </div>
                <p>{strCategoryDescription}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Menu;
