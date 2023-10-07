import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex space-x-5">
      <Link to={`/category/Technology`}>Technology</Link>
      <Link to={`/category/Gadget`}>Gadget</Link>
      <Link to={`/category/Software`}>Software</Link>
      <Link to={`/category/Apps`}>Apps</Link>
      <Link to={`/category/Games`}>Games</Link>
      <Link to={`/category/Podcasts`}>Podcasts</Link>
    </div>
  );
};

export default Menu;
