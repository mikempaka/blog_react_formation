import React from "react";
import AuthorPic from "../../../assets/img/authorPic.png";
const SinglePost = () => {
  return (
    <section>
      <div className="container">
        <h2>
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex items-center gap-3">
          <img src={AuthorPic} alt="" />
          <span className=" font-medium text-[#97989F]">Tracey Wilson</span>
          <span className=" font-medium text-[#97989F]">August 20, 2022</span>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
