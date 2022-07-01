import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useLocation } from "react-router-dom";

import Container from "components/universalComponents/Container.component";

import { Topbar, Sidebar, Footer } from "./components";

import pages from "../navigation";

const Main = ({ children, colorInvert = false, bgcolor = "transparent" }: { children: React.ReactChild; colorInvert: boolean; bgcolor: string }) => {
  const theme = useTheme();
  const currentLocation = useLocation();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}>
        {/* @ts-ignore */}
        <Container paddingY={1}>
          <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} colorInvert={trigger ? false : colorInvert} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" pages={pages} />
      <main>
        {children}
        <Divider />
      </main>
      {/* @ts-ignore */}
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
