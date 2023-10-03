import React from "react";

const AppPickCard = ({ blog }) => {
  const { title, category, image } = blog;
  return (
    <div>
      <div className="relative">
        <img src={image} alt="" />
        <h2 className="absolute top-5 shadow-md tracking-widest uppercase font-semibold bg-gray-50 px-1 left-10 ">{category}</h2>
      </div>
      <h2 className="text-2xl font-bold mt-5">{title}</h2>
    </div>
  );
};

export default AppPickCard;
