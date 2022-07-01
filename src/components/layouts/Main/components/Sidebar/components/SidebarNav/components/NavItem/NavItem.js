import React, { useEffect, useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const NavItem = ({ title, route }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Accordion
        disableGutters
        elevation={0}
        sx={{ backgroundColor: "transparent" }}
        onClick={() => {
          navigate(route);
        }}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" sx={{ padding: 0 }}>
          <Typography fontWeight="500" color={"primary"} >
            {title}
          </Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default NavItem;
