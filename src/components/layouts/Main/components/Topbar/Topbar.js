import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "utils/assets/Mylogo.jpg";
import AvarileLogo from "utils/assets/Mylogo.logo";
import { NavItem } from "./components";

const Topbar = ({ onSidebarOpen, pages, colorInvert }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: 60 }} display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
      <Box display={"flex"} component="a" href="/" title="home" width={{ xs: 100, md: 120 }}>
        <Box height={1} width={1}>
          <AvarileLogo colorInvert={colorInvert} />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }} alignItems={"center"}>
        <Box>
          <NavItem title={"Home"} route={"/"} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={6}>
          <NavItem title={"Frontend"} route={"/frontend"} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={6}>
          <NavItem title={"Backend"} route={"/backend"} colorInvert={colorInvert} />
        </Box>
        <Box marginLeft={6}>
          <NavItem title={"About me"} route={"/selfintro"} colorInvert={colorInvert} />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }} alignItems={"center"}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={"outlined"}
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}>
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
