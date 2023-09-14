import React, { Fragment } from "react";
import ReactTyped from "react-typed";
import AppButton from "@components/Common/AppButton";

function WelcomePanel() {
  return (
    <Fragment>
      <div
        className="relative bg-primary7 h-screen pt-[120px] lg:pt-[150px]"
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay="600"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <ReactTyped
                  strings={[
                    "Innovative Software Solutions",
                    "Solving Challenges",
                    "Transforming Business",
                  ]}
                  typeSpeed={120}
                  loop
                  className="text-4xl font-extrabold tracking-normal font-Jost text-primary2 xl:tracking-wider"
                />
                <div className="flex flex-col  mb-2 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                  <p> {"Kickstart"}</p>
                  <p> {"Startup Website"} </p>
                  <p> {"with TailGrids"}</p>
                </div>
                <p className="mb-8 max-w-[480px] text-base text-body-color">
                  {
                    " With TailGrids, business and students thrive together.Business can perfectly match their staffing to changing demand throughout the dayed."
                  }
                </p>
                {/* <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-white rounded-lg bg-primary1 hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                    >
                      {"Get Started"}
                    </a>
                  </li>
                </ul> */}
                <AppButton
                  buttonText="Get Started"
                  type="primary"
                  variant="outline"
                />
                <div className="pt-16 clients">
                  <h6 className="flex items-center mb-2 text-xs font-normal text-body-color">
                    {" Some Of Our Clients"}
                  </h6>
                  <div className="flex items-center">
                    <div className="w-full py-3 mr-4">
                      <img src="assets/images/png/ayroui.svg" alt="ayroui" />
                    </div>
                    <div className="w-full py-3 mr-4">
                      <img
                        src="assets/images/png/graygrids.svg"
                        alt="graygrids"
                      />
                    </div>
                    <div className="w-full py-3 mr-4">
                      <img src="assets/images/png/uideck.svg" alt="uideck" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden px-4 lg:block lg:w-1/12"></div>
            <div class="w-full px-4 lg:w-6/12">
              <div class="lg:ml-auto lg:text-right">
                <div class="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="assets/images/png/hero-image-01.png"
                    alt="hero"
                    class="max-w-full lg:ml-auto"
                  />
                  <span class="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WelcomePanel;
