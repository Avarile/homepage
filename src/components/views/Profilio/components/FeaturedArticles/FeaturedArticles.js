import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

import BlitzsErp from "utils/assets/BlitzsErp.png";
import wms from "utils/assets/wms.webp";
import ReactTemp from "utils/assets/reactTemplate.png";

import antd from "utils/assets/antd.svg";
import react from "utils/assets/react.svg";

const mock = [
  {
    image: BlitzsErp,
    description: "A light weight ERP system designed for a small auto parts company in west Mel",
    title: "Blitz ERP",
    author: {
      name: "React Nestjs",
      avatar: antd,
    },
    date: "Apr - june 2022",
  },
  {
    image: wms,
    description: "A logistic platform integratied with Auspot, Bigpost and FastWay",
    title: "3rd Party Api Integration platform",
    author: {
      name: "React, Expressjs",
      avatar: react,
    },
    date: "02 Aug",
  },
  {
    image: ReactTemp,
    description: "Qui blanditiis praesentium voluptatum deleniti atque corrupti",
    title: "Unde omnis iste natus",
    author: {
      name: "Chary Smith",
      avatar: react,
    },
    date: "05 Mar",
  },
];

const FeaturedArticles = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={{ xs: "flex-start", sm: "center" }} flexDirection={{ xs: "column", sm: "row" }} marginBottom={4}>
        <Box>
          <Typography fontWeight={700} variant={"h4"} gutterBottom>
            Recent Projects
          </Typography>
          <Typography color={"text.secondary"}>What I am working on recently.</Typography>
        </Box>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={"i"}
              display={"block"}
              width={1}
              height={1}
              sx={{
                textDecoration: "none",
                transition: "all .2s ease-in-out",
                "&:hover": {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                  cursor: "pointer",
                },
              }}>
              <Box component={Card} width={1} height={1} boxShadow={0} sx={{ bgcolor: "transparent", backgroundImage: "none" }}>
                <CardMedia
                  image={item.image}
                  title={item.title}
                  sx={{
                    height: { xs: 300, md: 360 },
                    position: "relative",
                    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                  }}
                />
                <Box
                  width={"90%"}
                  margin={"0 auto"}
                  display={"flex"}
                  flexDirection={"column"}
                  boxShadow={3}
                  borderRadius={2}
                  bgcolor={"background.paper"}
                  position={"relative"}
                  zIndex={3}
                  sx={{ transform: "translateY(-30px)" }}>
                  <Box component={CardContent} position={"relative"}>
                    <Typography variant={"h6"} gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">{item.description}</Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Box padding={2} display={"flex"} flexDirection={"column"}>
                    <Box marginBottom={2}>
                      <Divider />
                    </Box>
                    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                      <Box display={"flex"} alignItems={"center"}>
                        <Avatar src={item.author.avatar} sx={{ marginRight: 1 }} />
                        <Typography color={"text.secondary"}>{item.author.name}</Typography>
                      </Box>
                      <Typography color={"text.secondary"}>{item.date}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedArticles;
