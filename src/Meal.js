import React from 'react';

const Menu = ({ meals }) => {
  return (
    <main>
      {
        meals.map((meal) => {
          const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = meal;
          return (
            <article key={idCategory}>
              <img src={strCategoryThumb} alt={strCategory} />
              <div>
                <div>
                  <h3>{strCategory}</h3>
                  <h3>${'price'}</h3>
                </div>
                <p>{strCategoryDescription}</p>
              </div>
            </article>
          )
      })
      }
    </main>
  )
}

export default Menu;
