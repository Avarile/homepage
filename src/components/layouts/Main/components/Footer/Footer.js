import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import logo from "utils/assets/Mylogo.jpg";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1} flexDirection={{ xs: "column", sm: "row" }}>
          <Box display={"flex"} component="a" href="/" title="Avarile " width={80}>
            <Box component={"img"} src={logo} height={1} width={1} />
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href="/" color="text.primary" variant={"subtitle2"}>
                Call: 048-1877-127
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link underline="none" component="a" href="/docs/introduction" color="text.primary" variant={"subtitle2"}>
                Email: Avarile@gmail.com
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography align={"center"} variant={"subtitle2"} color="text.secondary" gutterBottom>
          &copy; Avarile. 2022, All rights reserved
        </Typography>
        <Typography align={"center"} variant={"caption"} color="text.secondary" component={"p"}></Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
