import React, { useEffect, useState } from "react";
import Resturent from "../Resturent/Resturent";

const Header = () => {
  const [search, setSearch] = useState("");
  const [meals, setmeals] = useState([]);
  const handleInput = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setmeals(data.meals));
  }, [search]);

  return (
    <div>
      <header>
        <form className="col-md-6 m-auto py-5">
          <div className="input-group mb-3 shadow">
            <input
              onChange={handleInput}
              type="text"
              className="form-control"
              placeholder="Enter any food  ..."
            />
            <div className="input-group-append">
              <button type="button" className="btn btn-danger ms-2">
                Search
              </button>
            </div>
          </div>
        </form>
      </header>
      <div>
        <p>
          <small>Meals Avaiable : " {meals?.length}"</small>
        </p>
        <div className="meals-container row p-4 gx-3">
          {meals?.map((meal) => (
            <Resturent key={meal.idMeal} meal={meal}></Resturent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
