"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import HVAC from "../images/HVAC.png";
import Pipes from "../images/pipes.jpg";
import Chimney from "../images/chimney.jpg";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Slider: React.FC = () => {
  const slides = [HVAC, Pipes, Chimney]; // Slide images array
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative mx-auto lg:mt-[20px] md:mt-[20px] overflow-hidden w-full"
    >
      {/* Slides */}
      <div className="relative h-[65vh] w-full flex transition-transform duration-500">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
