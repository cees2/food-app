import React from "react";
import MainRouting from "../MainRouting";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <Navigation />
      <MainRouting />
    </div>
  );
};

export default Layout;
