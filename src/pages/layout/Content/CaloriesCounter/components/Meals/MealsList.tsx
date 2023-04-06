import React from "react";
import SingleMeal from "./SingleMeal";
import { mealList } from "./Helpers";

const MealsList = () => {
  return (
    <div className="content-item">
      <h3>My meals</h3>
      {mealList.map((meal, index) => (
        <SingleMeal mealName={meal} key={index} />
      ))}
    </div>
  );
};

export default MealsList;
