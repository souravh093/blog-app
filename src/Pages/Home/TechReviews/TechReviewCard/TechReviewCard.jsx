import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const TechReviewCard = ({ blog }) => {
  const { image, category, title, descOne, writer, date, _id } = blog;
  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-primary uppercase font-semibold text-xs">
          {category}
        </h2>
        <Link
          to={`/blog/${_id}`}
          className="text-2xl font-bold hover:text-gray-600"
        >
          {title}
        </Link>
        <p className="line-clamp-3">{descOne}</p>
        <div className="flex items-center gap-10">
          <h2 className="flex items-center gap-2">
            <AiOutlineUser />
            {writer}
          </h2>
          <h2 className="flex items-center gap-2">
            <MdDateRange />
            {date}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TechReviewCard;
