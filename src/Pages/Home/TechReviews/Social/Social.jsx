import React from "react";
import SocialCard from "./SocialCard/SocialCard";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

const Social = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Stay Connected</h2>
      <SocialCard
        icon={<AiFillFacebook />}
        followers={"2M+"}
        title={"Vertex News"}
      />
      <SocialCard
        icon={<AiFillTwitterSquare />}
        followers={"1.4M+"}
        title={"@vertexenews"}
      />
      <SocialCard icon={<AiFillYoutube />} followers={"4M+"} title={"Vertex"} />
    </div>
  );
};

export default Social;
