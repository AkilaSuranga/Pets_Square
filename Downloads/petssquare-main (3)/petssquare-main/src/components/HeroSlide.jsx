import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSlide() {
  const slides = [
    {
      image: "/im1.jpg",
    },
    {
      image: "/im2.jpg",
    },
    {
      image: "/im3.jpg",
    },
    {
      image: "/im4.jpg",
    },
    {
      image: "/im5.jpg",
    }
  ];

  return (
    <div className="relative h-92 w-full flex items-center">
      <div className="absolute left-0 h-full w-1/2 flex flex-col justify-center p-8 text-black" style={{ backgroundColor: '#edf2f4' }}>
        <h2 className="text-4xl font-bold text-gray">The best Pet's Toys collection 2024</h2>
        <p className="mt-4 text-lg text-gray-800 justify-center p-2 rounded">Exclusive offer -10% off this week</p>
        <button className="mt-6 px-4 py-2 bg-blue-300 text-black font-bold rounded hover:bg-blue-400">Shop Now</button>
      </div>
      <div className="ml-auto w-1/2 h-full">
        <Swiper
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} className="h-full w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper> 
      </div>
    </div>
  );
}




