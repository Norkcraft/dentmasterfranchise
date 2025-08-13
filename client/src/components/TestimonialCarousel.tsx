import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "They repaired a huge dent on my truck in just a few hours — you can't even tell it was ever damaged. Highly professional team!",
    author: "Mark R.",
    location: "Lakeland, FL",
    rating: 5,
  },
  {
    id: 2,
    quote: "The training was top-notch. I now run my own PDR business thanks to Dents Master's expertise.",
    author: "Angela P.",
    location: "Tampa, FL",
    rating: 5,
  },
  {
    id: 3,
    quote: "Mobile service was a lifesaver after a hailstorm. Fast, friendly, and flawless work.",
    author: "David S.",
    location: "Orlando, FL",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Testimonials */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 text-center p-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl italic text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-brand-red font-semibold">
                  — {testimonial.author}, {testimonial.location}
                </cite>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-brand-red"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-brand-red"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-brand-red' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
