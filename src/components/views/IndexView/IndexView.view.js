import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Main from "components/layouts/Main";
import Container from "components/universalComponents/Container.component";
import { GetStarted, Features, QuickStart, Services, Benefits, Hero, VideoSection, Solutions } from "./components";

const IndexView = () => {
  const theme = useTheme();
  return (
    <Main bgcolor={"background.paper"}>
      <VideoSection />
      <Hero />
      <Container sx={{ marginTop: 35 }}>
        <Services />
      </Container>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to bottom, ${alpha(
            theme.palette.background.paper,
            0
            // @ts-ignore
          )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
          backgroundRepeat: "repeat-x",
          position: "relative",
        }}>
        {/* @ts-ignore */}
        <Container maxWidth={600}>
          <QuickStart />
        </Container>
        <Container>
          <Solutions />
        </Container>
        <Container>
          <Benefits />
        </Container>
        <Box
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
        </Box>
      </Box>
      <Container>
        <GetStarted />
      </Container>
    </Main>
  );
};

export default IndexView;
