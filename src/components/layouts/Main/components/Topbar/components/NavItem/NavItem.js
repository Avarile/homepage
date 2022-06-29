import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { alpha, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AutorenewTwoToneIcon from "@mui/icons-material/AutorenewTwoTone";

const NavItem = ({ title, route, colorInvert }) => {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  const linkColor = colorInvert ? "white" : "gray";

  React.useEffect(() => {
    console.log(colorInvert, linkColor);
  }, [colorInvert]);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{ cursor: "pointer" }}
      onClick={(e) => handleNavigation()}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}>
      <Typography
        variant="h7"
        component="p"
        color={linkColor}
        sx={{
          "&:hover": { color: "black", transition: "transform 0.3s", transform: hovered ? "scale(1.01)" : "none" },
          textShadow: "1px 1px 0 1px",
          fontWeight: 500,
          font: "Courier",
          color: linkColor,
        }}>
        {title}
      </Typography>
      <AutorenewTwoToneIcon
        sx={{
          marginLeft: theme.spacing(1 / 4),
          width: 16,
          height: 16,
          transition: "transform 0.3s",
          transform: hovered ? "rotate(90deg)" : "none",
          color: "text.secondary",
        }}
      />
    </Box>
  );
};

export default NavItem;
