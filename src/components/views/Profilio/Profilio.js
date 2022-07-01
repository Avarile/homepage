import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Main from "components/layouts/Main";
import Container from "components/universalComponents/Container.component";
import { FeaturedArticles, FooterNewsletter, Hero, LatestStories, MostViewedArticles, Experience, SidebarArticles, SidebarNewsletter, Tags } from "./components";

const Profilio = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <Experience />
      </Container>
      <Box bgcolor={"alternate.main"}>
        <Container>
          <FeaturedArticles />
        </Container>
      </Box>

      <Box bgcolor={"alternate.main"}>
        <Container>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12} md={12}>
              <MostViewedArticles />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={800} paddingY={"0 !important"}>
        <Divider />
      </Container>
    </Main>
  );
};

export default Profilio;
