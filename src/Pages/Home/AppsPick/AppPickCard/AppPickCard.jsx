import React from "react";
import { Link } from "react-router-dom";

const AppPickCard = ({ blog }) => {
  const { title, category, image, _id } = blog;
  return (
    <div>
      <div className="relative">
        <img src={image} alt="" />
        <h2 className="absolute top-5 shadow-md tracking-widest uppercase font-semibold bg-gray-50 px-1 left-10 ">{category}</h2>
      </div>
      <Link to={`/blog/${_id}`} className="text-2xl font-bold mt-5 hover:text-gray-600">{title}</Link>
    </div>
  );
};

export default AppPickCard;
