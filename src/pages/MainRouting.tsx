import React from "react";
import { Route, Routes } from "react-router-dom";
import CaloriesCounter from "./layout/Content/CaloriesCounter/Index";

const MainRouting = () => {
  return (
    <main className="app-main">
      <Routes>
        <Route path="my-meals" element={<div>My meals</div>} />
        <Route path="calories-counter" element={<CaloriesCounter />} />
      </Routes>
    </main>
  );
};

export default MainRouting;
