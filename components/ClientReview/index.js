/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

function ClientReview() {
  const data = [
    {
      name: "Bob",
      username: "@Bob123",
      img: "assets/images/jpg/p1.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat. Ipsam, tenetur magni. Debitis ipsum similique dolor quaeexercitationem dolores aspernatur. Quis aut sequi cupiditate veritatis natus odio delen.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat",
      rate: 5,
    },
    {
      name: "Tom",
      username: "@Tom123",
      img: "assets/images/jpg/p2.jpeg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat. Ipsam, tenetur magni. Debitis ipsum similique dolor quaeexercitationem dolores aspernatur. Quis aut sequi cupiditate veritatis natus odio delen.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat",
      rate: 2.5,
    },
    {
      name: "Harry",
      username: "@Harry123",
      img: "assets/images/jpg/p3.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat. Ipsam, tenetur magni. Debitis ipsum similique dolor quaeexercitationem dolores aspernatur. Quis aut sequi cupiditate veritatis natus odio delen.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat",
      rate: 3.5,
    },
    {
      name: "Nick",
      username: "@vatsal123",
      img: "assets/images/jpg/p4.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat. Ipsam, tenetur magni. Debitis ipsum similique dolor quaeexercitationem dolores aspernatur. Quis aut sequi cupiditate veritatis natus odio delen.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, totam repellat",
      rate: 4.5,
    },
  ];
  return (
    <div className="container px-2 mx-auto pb-11">
      <div
        class="w-full px-2"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div class="mx-auto mb-[40px] max-w-[610px] text-center">
          <span class="mb-2 block  tracking-wider text-base font-semibold text-primary9">
            TESTIMONIALS
          </span>
          <h2 class="mb-4 text-4xl font-bold text-primary1">
            What do people praise about PIE ?
          </h2>
        </div>
      </div>

      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          1200: { slidesPerView: 3 },
          800: { slidesPerView: 2 },
          400: { slidesPerView: 1 },
        }}
        onSlideChange={() => true}
        onSwiper={() => true}
        pagination={{
          clickable: true,
        }}
        onAutoplay={{ delay: 1000 }}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.username}>
            <div
              className="flex flex-col w-auto h-full gap-4 p-12 my-2 transition-all bg-white rounded-lg shadow-box-shadow hover:mt-1"
              data-aos="fade-down"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <img
                    src={item.img}
                    alt="Img"
                    className="rounded-full shadow-lg h-14 w-14"
                  />
                  <div>
                    <p className="font-bold text-md">{item.name}</p>
                    <p className="text-sm">{item.username}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>{item.rate}</span>
                  <AiFillStar style={{ color: "#FFD700", fontSize: "25px" }} />
                </div>
              </div>
              {item.review}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReview;
