"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState<number>(0);

  // Utilisez React.Children.count pour obtenir le nombre d'enfants
  const childrenCount = React.Children.count(children);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? childrenCount - 1 : curr - 1));

  const next = useCallback(() => {
    setCurr((curr) => (curr === childrenCount - 1 ? 0 : curr + 1));
  }, [childrenCount]); // Ajoutez les dépendances nécessaires

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, childrenCount]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {/* Utilisez React.Children.map pour mapper sur les enfants */}
          {React.Children.map(children, (_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
