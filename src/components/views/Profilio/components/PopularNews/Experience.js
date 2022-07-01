/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

import carManufacturing from "utils/assets/car-manufacturing.jpg";
import ccfta from "utils/assets/ccfta.jpg";

const mock = [
  {
    image: carManufacturing,
    description: [
      "General Intro: Communicate, facilitate and organize the tier2 / tier3 suppliers to meet the production plan with minimal inventory. Use vanilla JavaScript and .net 4.0 to design and implement a localized MRP system, so the process of the entire production – logistic – warehousing – consumption cycle can be closely monitored and analyzed, pinpoint the problems then finally solve them.",
      "- Working under the lead of the SCM team leader, keep close contact with more than 80 suppliers regularly to monitor the process. Searching for means to improve the procedure and reduce inventory costs. Use BI tools to do presentation of suggestion and solution report.",
      "- Work closely with development team, translate the needs of production and implementation team into technical solutions.",
      "- After all procedures are set and running, joined the development team, working on improvements of the MRP system.",
      "- Use Microsoft .Net framework as Backend, started with C/S structure, after finished the service deployment within the organization, the company decides not to deploy windows application on the computers of suppliers, then a web based application is also introduced in order to achieve a better integration results.",
    ],
    title: "MRP programmer / Supply Chain Implementation",
    tags: ["JavaScript", "C#", "MSSql", "Supply Chain Integration", "ASP.net"],
    author: {
      name: "Ford motor Company - Chongqing Complex",
    },
    date: "2008 - 2010",
  },
  {
    image: ccfta,
    description: [
      "General Intro: Keep close contact with stockholders, contractors and port operation team, to transform from traditional paper based warehousing control to digital upgrades.",
      "- Collected detailed information about existing, building and to be built warehouses within and around the port thoroughly on site, made acquaintance and kept close contact with the managers of those warehouses along with multiple fleet controller.",
      "- Compiled and gradually populated a working database where surplus cargos can be stored at a specific logistic cost.",
      "- Working not only a programmer but as the only developer who have onsite logistic experience in the team, I also constantly working with operation team  to understand their actual needs, and implement the solution with development team.",
      "- Established a real-time storage, warehousing and freight information web service, enables the service provider and consumer could effectively organized at the lowest cost and highest efficiency with websocket - node.",
    ],
    title: "Warehousing Operation / JavaScript Programmer",
    tags: ["JavaScript", "Nodejs", "Expressjs", "Logistics", "Ro-ro terminal"],
    author: {
      name: "CCFTA Marine Port",
    },
    date: "2011 - 2015",
  },
];

const Experience = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={"fade-up"}
          align={"center"}
          gutterBottom
          color={"GrayText"}
          sx={{
            fontWeight: 700,
          }}>
          Generally I am a web developer
          <br />
          with strong Manufacturing / Supply Chain background.
        </Typography>
        <Typography variant="h6" color={"text.secondary"} align={"center"} data-aos={"fade-up"}>
          or Vice versa
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={"flex"}
              flexDirection={{
                xs: "column",
                md: i % 2 === 0 ? "row-reverse" : "row",
              }}
              sx={{ backgroundImage: "none", bgcolor: "transparent" }}>
              <Box
                sx={{
                  width: { xs: 1, md: "50%" },
                  "& .lazy-load-image-loaded": {
                    height: 1,
                    display: "flex !important",
                  },
                }}>
                <Box
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: "cover",
                    maxHeight: 360,
                    borderRadius: 2,
                    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  paddingX: { xs: 1, sm: 2, md: 4 },
                  paddingY: { xs: 2, sm: 4 },
                  width: { xs: 1, md: "50%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                <Box>
                  {item.tags.map((item) => (
                    <Chip key={item} label={item} component="i" size={"small"} color={"primary"} sx={{ marginBottom: 1, marginRight: 1 }} />
                  ))}
                </Box>
                <Typography variant={"h6"} fontWeight={700}>
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography variant={"caption"} color={"text.secondary"} component={"i"}>
                    {item.author.name} {item.date}
                  </Typography>
                </Box>
                {item.description.map((desc, i) => {
                  return (
                    <div key={i}>
                      <br />

                      <Typography color={"GrayText"}> {desc}</Typography>
                    </div>
                  );
                })}
                {/* <Box marginTop={2} display={"flex"} justifyContent={"flex-end"}>
                  <Button
                    endIcon={
                      <Box component={"svg"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width={24} height={24}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </Box>
                    }>
                    Read More
                  </Button>
                </Box> */}
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Experience;
