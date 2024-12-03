import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Photos/Logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Use media query to determine the screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen width is small (below 600px)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="text-center py-4 bg-gray-50">
      <img   src={Logo} alt="Logo" className="mx-auto w-24 cursor-pointer" />
      <List className="space-y-3">
        {["About Us", "Pricing", "Customers", "Solutions"].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText>
              <button className="w-full text-lg font-medium text-gray-700 hover:text-blue-500">
                {item}
              </button>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <div className="flex flex-col gap-3 mt-5 px-6">
        <Button
          variant="contained"
          className="bg-[#02242A] text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Book a Demo
        </Button>
        <Button
          variant="outlined"
          className="text-blue-500 border border-blue-500 py-2 rounded-lg hover:bg-blue-50"
        >
          Contact Us
        </Button>
      </div>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#02242A",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Toolbar className="flex justify-between">
          {/* Logo */}
          <img  src={Logo} alt="Logo" className ="h-6 w-28 ml-5" />

          {/* Desktop Links */}
          <div className="hidden sm:flex gap-6">
            {["About Us", "Pricing", "Customers", "Solutions"].map((item) => (
              <button
                key={item}
                className="text-white text-lg font-medium hover:text-blue-400 transition"
              >
                {item}
              </button>
            ))}
            <Button

              // variant="contained"
              // className="bg-[#53FFFC33] text-white py-2 px-4  hover:bg-blue-600"
              sx={{
                backgroundColor: "#0FF1F6",
                color: "#000",
                fontWeight: "bold",
                textTransform: "none",
                padding: "5px 16px",
                borderRadius: "30px",
                marginTop: "2px",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#0d9488",
                  transform: "scale(1.05)",
                },
              }}
            >
              Book a Demo
            </Button>
            <Button

sx={{
  backgroundColor: "#002228",
  color: "#fff",
  fontWeight: "bold",
  textTransform: "none",
  padding: "5px 16px",
  borderRadius: "30px",
  marginTop: "2px",
  transition: "all 0.3s ease-in-out",
  border:"2px solid white",
  "&:hover": {
    backgroundColor: "#0d9488",
    transform: "scale(1.05)",
  },
}}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && ( // Only show MenuIcon on small screens
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}

       
      </Drawer>
      <hr /> 
    </>
  );
};

export default Navbar;
