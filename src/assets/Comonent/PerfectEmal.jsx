import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Img from "../Photos/Img.png";

function PerfectEmail() {
  return (
    <section className="relative py-12 md:py-16 mt-20 hover:shadow-lg mb-3 h-auto w-full max-w-7xl mx-auto rounded-2xl shadow-2xl">
      {/* Reversed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Img})`,
          transform: "scaleX(-1)", // Flip image horizontally
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Train your aiDR on your...
          </h1>
          <h2 className="text-[#0FF1F6] text-lg md:text-2xl italic">
            preferred email strategy |
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-4 max-w-3xl mx-auto">
            You’re in control. Train your aiDR on <br /> elements of your marketing
            strategy, ensuring optimized results tailored to your needs.
          </p>
        </div>

        {/* Feature Points Section */}
        <div className="grid grid-cols-1 ml-12 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto items-center mt-10">
          <div className="flex items-start space-x-4">
            <CheckCircleOutlineIcon
              fontSize="large"
              className="text-[#0FF1F6]"
            />
            <div>
              <h4 className="text-white font-medium text-lg">Quick to Ramp</h4>
              <p className="text-gray-400 text-sm mt-1">
                Get started effortlessly with minimal setup.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircleOutlineIcon
              fontSize="large"
              className="text-[#0FF1F6]"
            />
            <div>
              <h4 className="text-white font-medium text-lg">Easy to Optimize</h4>
              <p className="text-gray-400 text-sm mt-1">
                Refine your strategy with actionable insights.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircleOutlineIcon
              fontSize="large"
              className="text-[#0FF1F6]"
            />
            <div>
              <h4 className="text-white font-medium text-lg">Quick to Scale Up</h4>
              <p className="text-gray-400 text-sm mt-1">
                Expand operations seamlessly with scalable solutions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <CheckCircleOutlineIcon
              fontSize="large"
              className="text-[#0FF1F6]"
            />
            <div>
              <h4 className="text-white font-medium text-lg">Works with Your Tools</h4>
              <p className="text-gray-400 text-sm mt-1">
                Integrates smoothly with your existing workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerfectEmail;
