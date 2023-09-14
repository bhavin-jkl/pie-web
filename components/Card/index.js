import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  const choiceData = [
    {
      imgUrl: "/assets/images/svg/retail.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
    {
      imgUrl: "/assets/images/svg/education.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
    {
      imgUrl: "/assets/images/svg/healthcare.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
    {
      imgUrl: "/assets/images/svg/logistics.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
    {
      imgUrl: "/assets/images/svg/social.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
    {
      imgUrl: "/assets/images/svg/estate.svg",
      title: "MULTILINGUAL CALL CENTER",
      description:
        "Get your business processes transform with proficient call center support.",
    },
  ];

  return (
    <div className="px-4 py-3 mx-auto max-w-7xl">
      <div className="space-y-8">
        <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
          <div class="w-full px-4">
            <div class="mx-auto mb-[60px] max-w-[510px] text-center">
              <span class="mb-2 block text-lg font-semibold text-primary9">
                SERVICES
              </span>
              <h2 class="mb-4 text-3xl font-bold text-primary1 sm:text-4xl md:text-[40px]">
                Out Sourcing Services
              </h2>
              <p class="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 px-2 py-8 lg:grid-cols-2 lg:px-8">
          {choiceData.map((item, index) => (
            <div
              className="rounded-md cursor-pointer shadow-small-shadow hover:shadow-lg text-primary1 hover:text-primary2"
              key={index}
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <div className="flex gap-8 p-6 transition-all duration-300">
                <img
                  src={item.imgUrl}
                  alt="Nothing"
                  className="w-16 h-16 my-4"
                />
                <div className="flex flex-col justify-center gap-2 py-4">
                  <h1 className="text-xl font-bold tracking-wider underline-offset-1">
                    {item?.title}
                  </h1>
                  <p className="text-sm tracking-wider text-primary3">
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;

Card.propTypes = {};

Card.defaultProps = {};
