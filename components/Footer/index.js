/* eslint-disable @next/next/no-img-element */

import React, { Fragment } from "react";
import { AiFillMail, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";

function Footer() {
  return (
    <Fragment>
      <footer class="relative z-10 bg-gradient-to-t bg-primary1 via-slate-700 to-slate-800  text-white py-8 px-10 ">
        <div class="mx-10">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full  sm:w-2/3 lg:w-4/12">
              <div class=" w-full z-20">
                <p className="mb-2 text-lg font-semibold text-white">
                  About Us
                </p>
                <p class="mb-7 text-base text-body-color">
                  We, Multilingual Business Service Company, provide valuable
                  insights about what you expect from us. Our Multilingual cum
                  multidisciplinary business service help you to cut your
                  operation cost. We understand your needs and build
                  long-lasting happy relations with you. We develop loyal
                  customers by delivering the highest customer satisfaction for
                  long-term success. We are Flexible, Custom Configured and
                  Customer delighted company. We are here to talk anytime.
                </p>
                <p class="flex items-center text-sm font-medium text-dark">
                  <span class="mr-3 text-primary"></span>
                  <span>+012 (345) 678 99</span>
                </p>
              </div>
            </div>

            <div class="w-full  sm:w-1/2 lg:w-2/12">
              <div class=" rounded-lg  pl-5 z-20">
                <p className="mb-2 text-lg font-semibold text-white">
                  Quick Link
                </p>
                <ul class="list-disc ml-6">
                  <li class="mb-2 hover:text-primary2">
                    FOREIGN LANGUAGE SUPPORT
                  </li>
                  <li class="mb-2 hover:text-primary2">
                    MARKET RESEARCH & ANALYSIS
                  </li>
                  <li class="mb-2 hover:text-primary2">
                    TRANSCRIPTION SERVICES
                  </li>
                  <li class="mb-2 hover:text-primary2">
                    MULTILINGUAL CALL CENTER
                  </li>
                  <li class="mb-2 hover:text-primary2">DATA ENTRY SERVICES</li>
                  <li class="mb-2 hover:text-primary2">CREATIVE SERVICES</li>
                  <li class="mb-2 hover:text-primary2">
                    PHOTO EDITING SERVICES
                  </li>
                  <li class="mb-2 hover:text-primary2">
                    VIRTUAL ASSISTANT SERVICES
                  </li>
                </ul>
              </div>
            </div>

            <div className="z-20 max-w-xs mx-auto rounded">
              <h2 className="mb-2 text-lg font-semibold text-white">
                Subscribe
              </h2>
              <form>
                <div className="mb-2">
                  <label htmlFor="name" className="block text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-2 py-1 border-gray-300 rounded focus:ring focus:ring-blue-200"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-2">
                  <label htmlFor="email" className="block text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-2 py-1 border-gray-300 rounded focus:ring focus:ring-blue-200"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyAccepted"
                    className="w-3 h-3 text-blue-600 form-checkbox"
                  />
                  <label htmlFor="privacy" className="ml-1 text-xs text-white">
                    I accept the privacy rules
                  </label>
                </div>

                <div className="mb-2">
                  <button
                    type="submit"
                    className="px-3 py-1 text-xs text-white border rounded border-primary2 hover:border-white bg-primary2 hover:bg-primary1"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div class="w-full  sm:w-1/2 lg:w-3/12 z-20">
              <div class="mb-10 w-full">
                <h4 class="mb-4 text-lg font-semibold text-dark">
                  Follow Us On
                </h4>

                <div>
                  <div className="flex justify-start gap-3 lg:justify-start">
                    <a target="_blank" rel="noreferrer">
                      <div className="border border-solid border-primary4 p-2.5 rounded-full hover:bg-primary2 hover:border-primary2 transition-all">
                        <AiOutlineTwitter size={16} />
                      </div>
                    </a>
                    <a target="_blank" rel="noreferrer">
                      <div className="border border-solid border-primary4 p-2.5 rounded-full hover:bg-primary2 hover:border-primary2 transition-all">
                        <BsInstagram size={16} />
                      </div>
                    </a>
                    <a target="_blank" rel="noreferrer">
                      <div className="border border-solid border-primary4 p-2.5 rounded-full hover:bg-primary2 hover:border-primary2 transition-all">
                        <AiFillLinkedin size={16} />
                      </div>
                    </a>
                    <a target="_blank" rel="noreferrer">
                      <div className="border border-solid border-primary4 p-2.5 rounded-full hover:bg-primary2 hover:border-primary2 transition-all">
                        <FaMobileAlt size={16} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <p class="text-base text-body-color">
                &copy; 2023 Pie Multilingual. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 flex items-center justify-center w-[90%] text-center -z-10 opacity-40">
          <img
            src="/assets/images/png/map.png"
            alt="hello"
            className="w-[700px]"
          />
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
