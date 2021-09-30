import React from "react";
import { useHistory } from "react-router";

const Resturent = (props) => {
  const { strMeal, strArea, strInstructions, strMealThumb, idMeal } =
    props?.meal;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/mealDetails/${idMeal}`);
  };

  return (
    <div className="col-lg-4 col-sm-12 mb-3 h-100 p-2 ">
      <div className="p-2 card shadow-lg">
        <img src={strMealThumb} className="img-fluid rounded" alt="" />
        <h3>{strMeal}</h3>
        <h4>Area: {strArea}</h4>
        <p className="text-start">{strInstructions.slice(0, 300)}</p>
        <button onClick={handleClick} className="btn btn-danger w-50 mx-auto">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Resturent;
