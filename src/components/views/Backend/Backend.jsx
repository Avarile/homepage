import React from "react";
import Main from "components/layouts/Main";
import Container from "components/universalComponents/Container.component";
import underConstruction from "utils/assets/websiteUnderConstruction.png";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

export default function Backend() {
  const theme = useTheme();
  return (
    <Main>
      <Box sx={{}}>
        <Box component={"img"} height={1} width={1} src={underConstruction} />
      </Box>
    </Main>
  );
}
