import React from "react";
import CaloriesCounterNavigation from "../components/CaloriesCounterNavigation";
import Charts from "../components/Charts/Charts";
import MealsList from "../components/Meals/MealsList";

const CaloriesCounter = () => {
  return (
    <div className="content">
      <CaloriesCounterNavigation caloriesDate={new Date()} />
      <div className="calories-counter-content">
        <MealsList />
        <Charts />
      </div>
    </div>
  );
};

export default CaloriesCounter;
