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

  const [filterMeal, setFilterMeal] = useState([{
    idCategory: '',
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: ''
  }]);

  const [categories, setCategories] = useState(allCategories);

  const fetchFromApi = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setMeals(data.categories);
      setFilterMeal(data.categories);
    }catch (err) {
      throw Error (err);
    }
  }
  
  useEffect(() => {
    fetchFromApi();
  }, []);

  const filterCategories = (category) => {
    if (category === 'all') {
      return setFilterMeal(meals);
    }

    let mealCategories = meals.filter((meal) => meal.strCategory === category)
    setFilterMeal(mealCategories);
  }

  return (
    <main className="container mx-auto w-4/5">
      <section>
        <div>
          <h2>Our Meal</h2>
          <div></div>
        </div>
        <Category filterCategories={filterCategories} categories={categories} />
        <Meal meals={filterMeal} />
      </section>
    </main>
  );
}

export default App;
