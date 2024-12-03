import React from "react";
import Vector from "../Photos/Vector.png";

function IconBer() {
  const IconBer = [
    {
      Icon: Vector,
      title: "You’re in Control",
      description:
        "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      Icon: Vector,
      title: "Efficient Execution",
      description:
        "Leverage aiDRs to automate repetitive tasks, saving time and increasing productivity.",
    },
    {
      Icon: Vector,
      title: "Seamless Integration",
      description:
        "aiDRs fit effortlessly into your workflow, adapting to your needs.",
    },
  ];

  return (
    <section className="py-12 mt-20">
      {/* Section Header */}
      <div className="text-center mb-8 ">
        
        
      </div>

      {/* Icon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 text-white">
        {IconBer.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center  rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-[#02242A] hover:to-[#07292F] group"
          >
            {/* Icon */}
            <div className="w-20 h-20 flex justify-center items-center rounded-full mb-4 transition duration-300 ease-in-out shadow-xl hover:shadow-2xl">
              <img
                src={card.Icon}
                alt={card.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl text-white font-medium mb-2 text-center transition duration-300 ease-in-out group-hover:text-white">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center transition duration-300 ease-in-out group-hover:text-white">
              {card.description}
            </p>

            {/* Bottom Shadow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IconBer;
