import { useState, useEffect } from 'react';
import './index.css';
import Meal from './Meal';
import Category from './Category';

function App() {
  const [meals, setMeals] = useState([{
    idCategory: '',
    strCategory: '',
    strCategoryDescription: '',
    strCategoryThumb: ''
  }]);
  const [category, setCategory] = useState([]);

  const fetchFromApi = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      console.log(data.categories);
      setMeals(data.categories);
    } catch (err) {
      throw new Error (err);
    }
  }
  
  useEffect(() => {
    fetchFromApi();
  }, []);

  return (
    <main>
      <section>
        <div>
          <h2>Our Meal</h2>
          <div></div>
        </div>
        <Category />
        <Meal meals={meals} />
      </section>
    </main>
  );
}

export default App;
