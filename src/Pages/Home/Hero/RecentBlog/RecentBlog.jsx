import React from "react";

const RecentBlog = ({ blog }) => {
    const {category, title} = blog
  return (
    <div>
      <h2 className="uppercase text-xs tracking-widest font-semibold text-primary">{category}</h2>
      <h1 className="font-bold">{title}</h1>
    </div>
  );
};

export default RecentBlog;
