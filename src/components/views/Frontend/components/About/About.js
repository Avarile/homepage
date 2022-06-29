/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LaptopSkeleton from "components/svg/illustrations/LaptopSkeleton";
import Grid from "@mui/material/Grid";
import redux from "utils/assets/redux.svg";
import umi from "utils/assets/umi.png";
import mobx from "utils/assets/mobx.png";
import axios from "utils/assets/axios.svg";
import antd from "utils/assets/antd.svg";
import Blitz from "utils/assets/BlitzsErp.png";

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={"span"} variant="h3" sx={{ fontWeight: 700 }}>
          What I can bring
          <Typography
            component={"span"}
            variant={"inherit"}
            color={"primary"}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(theme.palette.secondary.main, 0.3)} 0%)`,
            }}>
            {" "}
            for your Frontend
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={"text.secondary"}>
        Of course, this is about functional(most likey) or class based React!
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent={"flex-start"} marginTop={4}>
        {[
          { icon: redux, title: "Redux" },
          { icon: umi, title: "Umijs" },
          { icon: mobx, title: "Mobx" },
          { icon: axios, title: "Axios" },
          { icon: antd, title: "Antd" },
        ].map((item, i) => (
          <Box maxWidth={70} marginTop={2} marginRight={4} key={i} sx={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item.icon}
              alt="..."
              sx={{
                height: "50px",
                width: "50px",
                filter: theme.palette.mode === "dark" ? "brightness(0) invert(0.7)" : "contrast(1) brightness(1)",
              }}
            />
            <Typography variant="h6" component="p" color={"text.secondary"}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: "relative",
            marginX: "auto",
            perspective: 1500,
            transformStyle: "preserve-3d",
            perspectiveOrigin: 0,
          }}>
          {/* <LaptopSkeleton /> */}
          <Box
            sx={{
              position: "relative",
              marginX: "auto",
              transform: "rotateY(-35deg) rotateX(15deg) translateZ(0)",
              maxWidth: "96%",
            }}>
            <Box>
              <Box position={"relative"} zIndex={-2} maxWidth={1} height={"auto"} sx={{ verticalAlign: "middle" }}>
                <Box component={"img"} src={Blitz} alt="Img loading" sx={{ maxWidth: "100%", height: "auto" }} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
