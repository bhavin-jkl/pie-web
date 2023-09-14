/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

function Blog() {
  const blogsData = [
    {
      title:
        "10 Tips To Choose The Best Web Technology Stack For Web Development",
      date: "Aug 22, 2023",
      imgSrc: "/assets/images/png/blog-1.jpg",
      description:
        "For any software product, the tech stack for web development used in building it has a direct impact on its performance.",
    },
    {
      title: "iPhone 13 or iPhone 15: India price, specs, which one to buy?",
      date: "Sep 13, 2023",
      imgSrc: "/assets/images/png/blog-2.jpg",
      description:
        "The iPhone 15 comes with a starting price of Rs 69,900 for the base 128GB storage model, which is the same as last year's model. ",
    },
    {
      title:
        "Elon Musk calls AI a double edge sword, says we need to regulate it to ensure safety",
      date: "Today",
      imgSrc: "/assets/images/png/blog-3.jpg",
      description:
        "Elon Musk and other tech moguls call for AI regulation during a Capitol Hill meeting with US lawmakers.",
    },
  ];

  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="container mx-auto mt-32">
        <div
          class="w-full px-4"
          data-aos="fade-down"
          data-aos-duration="900"
          data-aos-delay="600"
        >
          <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <span class="mb-2 block  tracking-wider text-base font-semibold text-primary9">
              CASE STUDIES
            </span>
            <h2 class="mb-4 text-3xl font-bold text-primary1 sm:text-4xl md:text-[40px]">
              Look At Our Case Studies
            </h2>
            <p class="text-base text-body-color">
              {"A glimpse of work we've done."}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap ">
          {blogsData.map((item, index) => (
            <div
              key={index}
              className="w-full px-4 md:w-1/2 lg:w-1/3"
              data-aos="fade-down"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={item?.imgSrc}
                    alt="image"
                    className="w-full h-[230px]"
                  />
                </div>
                <div>
                  <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary1">
                    {item?.date}
                  </span>
                  <h3>
                    <a className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                      {item?.title}
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default Blog;
