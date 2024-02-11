import React from "react";
import articleImg from "../../assets/img/articleImg.png";
import authorPic from "../../assets/img/authorPic.png";
const Articles = () => {
  return (
    <article className="w-[392px] p-4 rounded-xl border border-solid border-[#E8E8EA] shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
      <img
        src={articleImg}
        alt="articleImage"
        className="w-full h-[240px] mb-6"
      />
      <div>
        <a className="text-sm text-[#4B6BFB] font-medium m-5 bg-[rgba(75, 107, 251, 0.05)] block rounded-md">
          Technologie
        </a>
        <h2 className="text-xl font-semibold mb-5">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h2>
        <div className="flex items-center gap-3">
          <img src={authorPic} alt="" />
          <span className=" font-medium text-[#97989F]">Tracey Wilson</span>
          <span className=" font-medium text-[#97989F]">August 20, 2022</span>
        </div>
      </div>
    </article>
  );
};

export default Articles;
