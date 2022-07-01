import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";

import Container from "components/universalComponents/Container.component";

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: "3",
      }}>
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: "50%" }}>
            <Typography
              variant="h2"
              color="text.info"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}>
              Turn your ideas
              <br />
              into{" "}
              <Typography
                color={"primary"}
                component={"span"}
                variant={"inherit"}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
                }}>
                <Typed strings={["Design.", "Demo.", "Reality."]} typeSpeed={110} loop={true} />
              </Typography>
            </Typography>
            <Typography variant="h6" component="p" color="white" sx={{ fontWeight: 300 }}>
              Programming is an abstraction of the real world, and a good programme is an accurate tracking and manipulating of some information flows of the Reality.
            </Typography>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretched", sm: "flex-start" }} marginTop={4}>
              <Button component={"a"} variant="contained" color="info" size="large" fullWidth={isMd ? false : true} href={"http://avarile.com:2095"}>
                View Demos
              </Button>
              <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: "100%", md: "auto" }}>
                <Button
                  component={"a"}
                  variant="outlined"
                  color="info"
                  size="large"
                  fullWidth={isMd ? false : true}
                  onClick={() => {
                    navigate("/selfintro");
                  }}>
                  Profilio
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Box
        component={"svg"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          marginBottom: theme.spacing(-1),
        }}>
        <path fill={theme.palette.background.paper} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </Box> */}
    </Box>
  );
};

export default Hero;
