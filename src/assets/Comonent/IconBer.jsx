import React from "react";
import Group from "../Photos/Group.png"
import Group2 from "../Photos/Group2.png"
import Vector from "../Photos/Vector.png"

function IconBer() {
  const IconBer = [
    {
      Icon: Group,
      title: "You’re in Control",
      description:
    "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      Icon: Group2,
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
      {/* Icon Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 text-white">
        {IconBer.map((card, index) => (
          <div
            key={index} // Replace with unique key if possible
            className="relative flex flex-col items-center rounded-lg shadow-md p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-[#02242A] hover:to-[#07292F] group"
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
            <h3 className="text-xl font-medium mb-2 text-center group-hover:text-white">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center group-hover:text-white">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IconBer;
