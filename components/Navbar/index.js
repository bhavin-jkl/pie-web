/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";

function Navbar(props) {
  return (
    <Fragment>
      <div className="bg-orange-50 shadow-lg">
        <nav className="container mx-auto h-20 w-full px-6">
          <div className="flex items-center h-full w-full justify-between">
            <img
              src="/assets/images/svg/piemulti.svg"
              className="w-56"
              alt="qwe"
            />
            <div className="flex items-center gap-4 text-xl tracking-wide font-semibold cursor-pointer text-gray-600">
              <span className="hover:text-orange-600">All Services</span>
              <div className="h-7 w-[2px] bg-gray-600" />
              <span className="hover:text-orange-600">Industries we serve</span>
              <div className="h-7 w-[2px] bg-gray-600" />
              <span className="hover:text-orange-600">Language</span>
              <div className="h-7 w-[2px] bg-gray-600" />
              <span className="hover:text-orange-600">About Us</span>
              <div className="h-7 w-[2px] bg-gray-600" />
              <span className="hover:text-orange-600">Contact Us</span>
            </div>
            <div className="relative flex items-center cursor-pointer">
              <input
                type="text"
                name="Search"
                id=""
                className="py-2 rounded-lg border-solid border-[1px] border-gray-400 w-64 px-4 bg-transparent"
                placeholder="Search here..."
              />

              <div className="absolute right-4 h-5 w-5">
                <svg
                  class="svg-icon search-icon"
                  aria-labelledby="title desc"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.9 19.7"
                >
                  <title id="title">Search Icon</title>
                  <desc id="desc">A magnifying glass icon.</desc>
                  <g
                    class="search-path"
                    fill="none"
                    stroke="#808080"
                    stroke-width="2px"
                  >
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
              </div>
              <div className="absolute right-12 h-10 w-[1px] bg-gray-400" />
            </div>
          </div>
        </nav>
      </div>
      <nav className="max-w-7xl mx-auto px-4 bg-[#43b8c5] h-14 rounded-b-2xl font-semibold cursor-pointer shadow-lg">
        <div className="text-white flex gap-2 px-4 items-center">
          <span className="hover:text-black">FOREGIN LANGUAGE SUPPORT</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">MARKET RESEARCH & ANALYSIS</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">TRANSCRIPTION SERVICES</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">MULTILINGUAL CALL CENTER</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">DATA ENTRY SERVICES</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">CREATIVE SERVICES</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">PHOTO EDITING SERVICES</span>
          <div className="h-14 w-[2px] bg-white" />
          <span className="hover:text-black">VIRTUAL ASSISTANT SERVICES</span>
        </div>
      </nav>
    </Fragment>
  );
}
export default Navbar;

Navbar.propTypes = {};

Navbar.defaultProps = {};
