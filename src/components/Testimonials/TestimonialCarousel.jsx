"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test1 from "../../../public/images/testimonials/Test1.jpeg";
import Test2 from "../../../public/images/testimonials/Test2.jpeg";
import Test3 from "../../../public/images/testimonials/Test3.jpeg";
import Test4 from "../../../public/images/testimonials/Test4.jpeg";
import Test5 from "../../../public/images/testimonials/Test5.jpeg";
import Test6 from "../../../public/images/testimonials/Test6.jpeg";
import Test7 from "../../../public/images/testimonials/Test7.jpeg";
import Test8 from "../../../public/images/testimonials/Test8.jpeg";
import Test9 from "../../../public/images/testimonials/Test9.jpeg";
import Test10 from "../../../public/images/testimonials/Test10.jpeg";
import Test11 from "../../../public/images/testimonials/Test11.jpeg";
import Test12 from "../../../public/images/testimonials/Test12.jpeg";
import Test13 from "../../../public/images/testimonials/Test13.jpeg";
import Test14 from "../../../public/images/testimonials/Test14.jpeg";
import Test15 from "../../../public/images/testimonials/Test15.jpeg";
import Test16 from "../../../public/images/testimonials/Test16.jpeg";
import Test17 from "../../../public/images/testimonials/Test17.jpeg";
import Test18 from "../../../public/images/testimonials/Test18.jpeg";
import Test19 from "../../../public/images/testimonials/Test19.jpeg";
import Test20 from "../../../public/images/testimonials/Test20.jpeg";
import Test21 from "../../../public/images/testimonials/Test21.jpeg";
import Test22 from "../../../public/images/testimonials/Test22.jpeg";
import Test23 from "../../../public/images/testimonials/Test23.jpeg";
import Test24 from "../../../public/images/testimonials/Test24.jpeg";
import Test25 from "../../../public/images/testimonials/Test25.jpeg";
import Test26 from "../../../public/images/testimonials/Test26.jpeg";
import Test27 from "../../../public/images/testimonials/Test27.jpeg";
import Test28 from "../../../public/images/testimonials/Test28.jpeg";
import Test29 from "../../../public/images/testimonials/Test29.jpeg";
import Image from "next/image";

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialImages = [
    Test27,
    Test28,
    Test29,
    Test1,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7,
    Test8,
    Test9,
    Test10,
    Test11,
    Test12,
    Test13,
    Test14,
    Test15,
    Test16,
    Test17,
    Test18,
    Test19,
    Test20,
    Test21,
    Test22,
    Test23,
    Test24,
    Test25,
    Test26,
  ];

  return (
    <>
      <Slider {...settings}>
        {testimonialImages.map((image, index) => (
          <div key={index} className="p-4">
            <Image
              src={image}
              alt={`Testimonial ${index + 1}`}
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialCarousel;
