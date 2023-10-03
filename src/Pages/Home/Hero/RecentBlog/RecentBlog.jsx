import React from "react";

const RecentBlog = ({ blog }) => {
    const {category, title} = blog
  return (
    <div>
      <h2>{category}</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default RecentBlog;
