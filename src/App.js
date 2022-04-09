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

  const handleCategories = (category) => {
    setCategories(category);
  }

  return (
    <main className="container mx-auto my-8 px-8">
      <section>
        <div className="flex flex-col place-items-center">
          <h2 className="font-roboto font-bold text-5xl py-2">Our Meals</h2>
          <div className="w-24 border-2 border-yellow-600"></div>
        </div>
        <Category
          filterCategories={filterCategories}
          categories={categories}
          onChangeCategory={handleCategories}
        />
        <Meal meals={filterMeal} />
      </section>
    </main>
  );
}

export default App;
