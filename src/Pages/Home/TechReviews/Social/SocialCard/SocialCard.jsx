import React from "react";

const SocialCard = ({ icon, title, followers }) => {
  return (
    <div className="flex items-center gap-2 mt-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        <h2>{followers}Followers</h2>
      </div>
    </div>
  );
};

export default SocialCard;

