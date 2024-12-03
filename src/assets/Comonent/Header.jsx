import React from "react";
import Img from "../Photos/Img.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
function Header() {
  return (
    <section
      className="Headbg bg-cover bg-no-repeat bg-center min-h-screen flex items-center px-6 md:px-16 mt-5"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 max-w-7xl mx-auto w-full">
        {/* Text Content */}
        <div className="text-center md:text-left flex-1">
          {/* Subheading */}
          <h3 className="text-[#0FF1F6] text-lg md:text-xl font-semibold mb-3">
            AI SDRs (aiDRs)
          </h3>

          {/* Main Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight md:leading-snug mb-6">
            More leads, <span className="text-[#0FF1F6]">less people.</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>

          {/* Call to Action Button */}
          <div className="flex flex-col md:flex-row gap-4">
          <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: "#14b8a6",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "none",
          padding: "10px 20px",
          borderRadius: "30px",
          marginTop: "20px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#0d9488",
            transform: "scale(1.05)",
          },
        }}
      >
        Sign Up for the Beta
      </Button>
          </div>
        </div>

        {/* Image/Illustration Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-full h-64 md:h-auto max-w-lg bg-gray-900 rounded-lg overflow-hidden shadow-md">
            {/* Optional Placeholder for an image */}
            {/* <img src={Img} alt="AI Illustration" className="w-full h-full object-cover" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
