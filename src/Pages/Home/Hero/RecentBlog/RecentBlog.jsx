import React from "react";
import { Link } from "react-router-dom";

const RecentBlog = ({ blog }) => {
  const { category, title, _id } = blog;
  return (
    <div>
      <h2 className="uppercase text-xs tracking-widest font-semibold text-primary">
        {category}
      </h2>
      <Link
        to={`/blog/${_id}`}
        className="font-bold hover:text-primary cursor-pointer transition-all"
      >
        {title}
      </Link>
    </div>
  );
};

export default RecentBlog;
