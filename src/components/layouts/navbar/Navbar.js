import React from "react";
import logo from "../../../assets/img/Logo.png";
import ThemeToggler from "../../themeToggler/ThemeToggler";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className="container  mx-auto flex justify-between  py-[20px] shadow-lg ">
        <div>
          <img src={logo} />
        </div>
        <div>
          <ul className="flex gap-[40px]">
            <li>
              <a className="text-[#3B3C4A] text-base">Home</a>
            </li>
            <li>
              <a className="text-[#3B3C4A] text-base ">Blog</a>
            </li>
            <li>
              <a className="text-[#3B3C4A] text-base">Single Post</a>
            </li>
            <li>
              <a className="text-[#3B3C4A] text-base">Pages</a>
            </li>
            <li>
              <a className="text-[#3B3C4A] text-base">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3  ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#F4F4F5] w-[166px] px-3 outline-none"
            />
            <svg
              className="absolute right-3  bottom-1.5"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_15_152)">
                <rect width="24" height="24" />
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#000000"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                  fill="#000000"
                />
              </g>
              <defs>
                <clipPath id="clip0_15_152">
                  <rect width="24" height="24" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
