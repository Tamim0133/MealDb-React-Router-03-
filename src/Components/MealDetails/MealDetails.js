import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setmeal] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((res) => res.json())
      .then((data) => setmeal(data.meals[0]));
  }, []);
  return (
    <div className="container card shadow p-2 my-5 w-75 bg-light">
      <h2 className="text-danger">{meal.strMeal}</h2>
      <img className="img-fluid rounded" src={meal.strMealThumb} alt="" />
      <br />
      <h4>
        Catagory : {meal.strCategory} ; Area : {meal.strArea}
      </h4>{" "}
      <br />
      <div className="text-start  p-2">
        <p>{meal.strInstructions}</p>
      </div>
      <p>Feel Free to see video on YOUTUBE</p>
      <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
        {" "}
        {meal.strYoutube}
      </a>
    </div>
  );
};

export default MealDetails;
