import React from "react";
import Main from "components/layouts/Main";
import Container from "components/universalComponents/Container.component";
import underConstruction from "utils/assets/websiteUnderConstruction.png";
import Box from "@mui/material/Box";

export default function Backend() {
  return <Box component={"img"} height={1} width={1} src={underConstruction}></Box>;
}
