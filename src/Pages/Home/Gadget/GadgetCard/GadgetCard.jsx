import React from "react";

const GadgetCard = ({ blog }) => {
  const { category, title, descOne, image } = blog;
  return (
    <div
      className="h-96"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="bg-black text-gray-50 bg-opacity-50 h-full w-full p-16 flex flex-col justify-end gap-3">
        <h2 className="uppercase tracking-widest">{category}</h2>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="line-clamp-2">{descOne}</p>
      </div>
    </div>
  );
};

export default GadgetCard;
