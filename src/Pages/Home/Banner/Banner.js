import React from "react";
import img1 from "../../../assets/img-1.jpg";

import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img1,
    prev: 3,
    next: 2,
    id: 1,
  },
  {
    image: img1,
    prev: 1,
    next: 3,
    id: 2,
  },
  {
    image: img1,
    prev: 2,
    id: 3,
    next: 1,
  },
];
// console.log(bannerData);

const Banner = () => {
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Banner;
