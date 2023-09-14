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
    <div className="container px-2 mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 pt-20 pb-10">
        <p className="font-bold tracking-widest text-gray-400">
          {"TESTIMONIALS"}
        </p>
        <h1 className="text-2xl font-semibold text-orange-600 tracking-wider">
          {"What do people praise about"}{" "}
          <span className="tracking-widest font-bold underline">{"PIE"}</span>
          {" ?"}
        </h1>
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
            <div className="flex flex-col w-auto h-full gap-4 p-12 transition-all bg-white rounded-lg shadow-box-shadow hover:mt-1 my-2 mx-2">
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
