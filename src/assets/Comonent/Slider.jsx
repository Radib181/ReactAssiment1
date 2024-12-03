import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.!",
    author: {
      name: "John Doe",
      title: "Chief Strategy Officer",
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
    }, 8000); // Auto-slide every 8 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mt-16 mx-auto px-6 sm:px-12 lg:px-24">
      <div className="relative bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-2xl overflow-hidden">
        {/* Testimonial Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full px-6 sm:px-16 py-12">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                  <img
                    src={testimonial.author.avatar}
                    alt={testimonial.author.name}
                    className="w-20 h-20 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  />
                  <div className="mt-6 md:mt-0 md:ml-6">
                    <p className="text-gray-700 text-lg italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-gray-900">{testimonial.author.name}</p>
                    <p className="text-gray-500 text-sm">
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
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-indigo-600 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
