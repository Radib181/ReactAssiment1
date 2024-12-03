import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "This product has changed the way we do business. Highly recommend!",
    author: {
      name: "John Doe",
      title: "CEO",
      company: "TechCorp",
      avatar: "https://via.placeholder.com/100",
    },
  },
  {
    text: "Amazing experience! The team is very professional and reliable.",
    author: {
      name: "Jane Smith",
      title: "CTO",
      company: "InnovateX",
      avatar: "https://via.placeholder.com/100",
    },
  },
  {
    text: "A seamless integration into our workflow. Couldn't ask for more.",
    author: {
      name: "Mike Brown",
      title: "Product Manager",
      company: "DevWorks",
      avatar: "https://via.placeholder.com/100",
    },
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mt-20 mx-auto px-4   rounded-lg shadow-xl">
      <div className="relative overflow-hidden rounded-lg">
        {/* Testimonial Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-4">
              <div className=" p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="flex justify-center items-center mb-6">
                  <div className="text-4xl text-gray-400 mx-3">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p className="text-lg text-white italic">"{testimonial.text}"</p>
                  <div className="text-4xl text-gray-400 mx-3">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-6">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="w-16 h-16 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
                  />
                  <div className="ml-4 text-left">
                    <p className="text-white font-semibold">{testimonial.author.name}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.author.title}, {testimonial.author.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] hover:bg-blue-500 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
