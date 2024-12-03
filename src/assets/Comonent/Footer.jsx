import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  return (
    <div className="flex -mt-10 flex-col items-center justify-center min-h-screen  text-[#e0e1dd] text-center">
      {/* Header Text */}
      <p className="text-[#80ced7] text-sm uppercase tracking-wide">Get Started</p>
      <h1 className="text-4xl font-bold mt-2">
        Embrace the <span className="text-[#80ced7]">new era of outbound.</span>
      </h1>
      <p className="text-base max-w-lg mt-4">
        Wizia lets you train, activate, and optimize aiDRs. Take your outbound
        to new levels of performance & efficiency.
      </p>

      {/* Button */}
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
  );
};

export default Footer;
