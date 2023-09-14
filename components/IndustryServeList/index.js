/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { industryServeData } from "@utils/constant/services";

function IndustryServeList() {
  return (
    <Fragment>
      <div className="container mx-auto ">
        <div className="px-10 py-12">
          <div
            class="w-full px-4"
            data-aos="fade-down"
            data-aos-duration="900"
            data-aos-delay="600"
          >
            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary9">
                WHY CHOOSE US
              </span>
              <h2 class="mb-4 text-3xl font-bold text-primary1 sm:text-4xl md:text-[40px]">
                Why Choose Us
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-8 mb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industryServeData.map((items, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-center flex-none py-12 mx-4 mb-6 text-center border shadow-xl hover:shadow-2xl text-slate-950 rounded-xl"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="700"
                  key={index}
                >
                  <img
                    alt={items.altImg}
                    className="float-right w-12 duration-1000 rounded-t"
                    src={items.imgSrc}
                  />
                  <h2 className="mt-4 text-lg font-medium">{items.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default IndustryServeList;
