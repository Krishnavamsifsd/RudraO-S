"use client"
import React from 'react';
import Slider from 'react-slick';
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
import Image from 'next/image';

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
  ];

  return (
    <>
      <Slider {...settings}>
        {testimonialImages.map((image, index) => (
          <div key={index} className="p-4">
            <Image src={image} alt={`Testimonial ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          </div>
        ))}
      </Slider>
    </>

  );
};

export default TestimonialCarousel;