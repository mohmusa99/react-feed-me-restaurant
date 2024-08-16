import React, { useEffect, useState } from 'react'
import './MealSection.css'
import Meal from  '../Meal/Meal'
import mealsData from '../../Assets/Data/Data'


const MealSection = () => {
  const [meals, setMeals] = useState([]); // Start with empty array to indicate no data yet

  useEffect(() => {
    // Fetch data from API and update meals
    const fetchMeals = async () => {
      try {
        const response = await fetch('https://feedme-api.onrender.com/meals');
        const data = await response.json();
        console.log(data); // Log the response to inspect it
        setMeals(Array.isArray(data) ? data : []); // Ensure it's an array
      } catch (error) {
        console.error("Error fetching meals data:", error);
        setMeals(mealsData); // Fallback to local data if fetching fails
      }
    };

    fetchMeals();
  }, []);

  if (meals.length < 1) {
    return <p>Loading meals...</p>; // Show a loading state while fetching data
  }

  return (
    <div className='meal__section'>
      <div className="predefined__image__portrait"></div>
      <div className="predefined__image__landscape"></div>

      {meals.map((meal) => (
        <Meal
        key={meal.id}
        mealName={meal.name}
        mealType={meal.type}
        />
      ))}
    </div>
  )
}

export default MealSection