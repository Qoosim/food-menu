import { useState, useEffect } from 'react';
import './index.css';
import Meal from './Meal';
import Category from './Category';
import { categoryTitle }  from './categoryTitle';

const allCategories = ['all', ...new Set(categoryTitle.map((meal) => meal))];

function App() {
  const [meals, setMeals] = useState([{
    idCategory: '',
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: ''
  }]);
  console.log(meals);
  const [categories, setCategories] = useState(allCategories);

  const fetchFromApi = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setMeals(data.categories);
    } catch (err) {
      throw new Error (err);
    }
  }
  
  useEffect(() => {
    fetchFromApi();
  }, []);

  const filterCategories = (category) => {
    if (category === 'all') {
      return setMeals(meals);
    }

    let mealCategories = meals.filter((meal) => meal.strCategory === category)
    setMeals(mealCategories);
  }


  return (
    <main>
      <section>
        <div>
          <h2>Our Meal</h2>
          <div></div>
        </div>
        <Category filterCategories={filterCategories} categories={categories} />
        <Meal meals={meals} />
      </section>
    </main>
  );
}

export default App;
