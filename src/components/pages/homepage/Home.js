import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import HeroImg from "../../../assets/img/hero-bg.png";
import AuthorPic from "../../../assets/img/authorPic.png";
import Articles from "../../articles/Articles";
const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container mx-auto relative">
          <img
            src={HeroImg}
            alt="fond"
            className="w-full h-full md:h-[500px]"
          />
        </div>
        <div className="w-full lg:w-[598px] bg-white rounded-xl shadow-lg p-[40px] static lg:absolute bottom-0 md:bottom-[-80px] left-0 lg:left-[90px]">
          <a className="bg-[#4B6BFB] text-white text-xs py-1 px-[10px] rounded-md">
            Technologie
          </a>
          <h2 className="mt-5 mb-5 text-xl font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <div className="flex gap-3 items-center">
            <img src={AuthorPic} alt="AuthorPic" />
            <span className="text-[#97989F] font-medium ">Jason Francisco</span>
            <span className="text-[#97989F] font-medium ">August 20, 2022</span>
          </div>
        </div>
      </section>
      <section className="mt-10 lg:mt-24">
        <div className="container mx-auto">
          <div className="block lg:grid grid-cols-3 gap-5 ">
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
            <Articles />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
