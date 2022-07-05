import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Container from "components/universalComponents/Container.component";

const MapHero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=15seabird,pointcook,Melbourne&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter: theme.palette.mode === "dark" ? "grayscale(0.5) opacity(0.7)" : "none",
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}>
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 50%" },
            position: "relative",
            maxWidth: { xs: "100%", md: "50%" },
            order: { xs: 1, md: 2 },
          }}>
          <Box
            sx={{
              width: { xs: 1, md: "50vw" },
              height: "100%",
              position: "relative",
            }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}>
              <Box
                sx={{
                  overflow: "hidden",
                  left: "0%",
                  width: 1,
                  height: 1,
                  position: { xs: "relative", md: "absolute" },
                }}>
                <RightSide />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default MapHero;
