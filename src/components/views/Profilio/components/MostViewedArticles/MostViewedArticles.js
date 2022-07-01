import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import RRN from "utils/assets/React-ReactNative.png";
import TypeScript from "utils/assets/typeScript.jpeg";
import statemanagement from "utils/assets/statemanagment.png";
import sql from "utils/assets/SQL.jpeg";
import ui from "utils/assets/ui_frameworks.png";
import netCore from "utils/assets/netCore.png";
import nestjs from "utils/assets/Nestjs.webp";
import itTech from "utils/assets/it.png";
import logistics from "utils/assets/Logistics.gif";
import distribution from "utils/assets/3PL.jpg";
import supplyChain from "utils/assets/supplyChain.webp";

const mock = [
  {
    image: RRN,
    description: "- Proficient witn React functional, OOP methodologyi and Event Driven Developments. Could utilized most of the Tools within React ecosystem.",
    title: "React Website / SPA development",
    tags: ["Frontend", "Css", "React", "Redux"],
    author: {
      name: "Functional or OOP React programming",
      avatar: "",
    },
    date: "",
  },
  {
    image: TypeScript,
    description: "- Proficient with TypeScript in React or Nodejs.",
    title: "TypeScript",
    tags: [],
    author: {
      name: "TypeScript Proficiency",
      avatar: "",
    },
    date: "",
  },
  {
    image: statemanagement,
    description: "Proficient with most of the state-managment solution.",
    title: "Redux, Mobx, Natur and useContext / useReducer",
    tags: ["UX", "Design", "Themes", "Photography"],
    author: {
      name: "State Managment Proficiency",
      avatar: "",
    },
    date: "",
  },
  {
    image: sql,
    description: "Proficient with most of the Sql / No-Sql databate, and data structure patterns, can work with ORM or Raw Query.",
    title: "MySql, Postgres, MongoDB, MSSql",
    tags: [],
    author: {
      name: "Database Proficiency",
      avatar: "",
    },
    date: "",
  },
  {
    image: ui,
    description: "Be able to utilize most of the mainstream ui frameworks including Bootstrap, Ant-design, Material UI...",
    title: "UI framework solutions",
    tags: [],
    author: {
      name: "UI frameworks",
      avatar: "",
    },
    date: "",
  },
  {
    image: netCore,
    description: "Familiar with C#, Asp.net core, winform, SugarSql, EF core, and entire ecosystem around C#.",
    title: "C$ and .net Core",
    tags: [],
    author: {
      name: "C#, .net core and Asp.net core",
      avatar: "",
    },
    date: "",
  },
  {
    image: nestjs,
    description: "Proficient Nestjs and it's Dependency Inject structuring. and its built in components.Be able to bootstrap services utilizing its provided components real fast.",
    title: "Nestjs and Nodejs Proficiency",
    tags: [],
    author: {
      name: "Nestjs",
      avatar: "",
    },
    date: "",
  },
  {
    image: itTech,
    description: "",
    title: "Other Programming Skills",
    tags: [],
    author: {
      name: "Linux, CI/CD, Nginx, Azure, AWS, Docker, DNS...",
      avatar: "",
    },
    date: "",
  },
  {
    image: logistics,
    description: "Over 6 years of logistics / supply chain integrate operation experiences and system implementation. Excel with Logistics flow control, problem solving and continues improvements.",
    title: "Logistics",
    tags: [],
    author: {
      name: "Logistics, SupplyChain and Flow Control management",
      avatar: "",
    },
    date: "",
  },
  {
    image: distribution,
    description: "Familiar with 3PL or similar Distribution and Warehousing managements.",
    title: "Distribution and Warehousing",
    tags: [],
    author: {
      name: "3PL, Warehousing and Distribution managements",
      avatar: "",
    },
    date: "",
  },
  {
    image: supplyChain,
    description: "Know how to control the flow of merchandise, revenue and information, and more importantly, utilize the digital tools to make sure the numbers do not differ from the reality.",
    title: "Supply Chain implementation and flow control.",
    tags: [],
    author: {
      name: "SupplyChain Operation and flow control",
      avatar: "",
    },
    date: "",
  },
];

const MostViewedArticles = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} alignItems={{ xs: "flex-start", sm: "center" }} flexDirection={{ xs: "column", sm: "row" }} marginBottom={4}>
        <Box>
          <Typography fontWeight={700} variant={"h6"} gutterBottom>
            TechStack and Abilities
          </Typography>
          <Typography color={"text.secondary"}>Here is What I can do:</Typography>
        </Box>
        {/* <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Box component={Button} variant="outlined" color="primary" size="large" marginLeft={2}>
            View all
          </Box>
        </Box> */}
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={"flex"}
              flexDirection={{ xs: "column", md: "row" }}
              sx={{ backgroundImage: "none", bgcolor: "transparent" }}>
              <Box
                sx={{
                  width: { xs: 1, md: "30%" },
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
                    maxHeight: 200,
                    borderRadius: 2,
                    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  width: { xs: 1, md: "70%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                <Typography fontWeight={700} color={"Black"}>
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography variant={"caption"} color={"text.secondary"} component={"i"}>
                    {item.author.name} {item.date}
                  </Typography>
                </Box>
                <Typography color="text.secondary">{item.description}</Typography>
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

export default MostViewedArticles;
