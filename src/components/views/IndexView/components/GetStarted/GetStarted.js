import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        variant="h4"
        color="text.primary"
        align={"center"}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}>
        Get started with a new capable staff today
      </Typography>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }} align={"center"}>
        Hire me as a one stop solution to Fullstack React projects.
      </Typography>
      <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} alignItems={{ xs: "stretched", sm: "flex-start" }} justifyContent={"center"} marginTop={4}>
        <Button
          component={"a"}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          onClick={() => {
            navigate("/profilio");
          }}>
          Call Me
        </Button>
        <Box marginTop={{ xs: 2, sm: 0 }} marginLeft={{ sm: 2 }} width={{ xs: "100%", md: "auto" }}>
          <Button
            component={"a"}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
            onClick={() => {
              navigate("/profilio");
            }}>
            Email me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
