import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Mylogo from "utils/assets/Mylogo.logo";
import { useNavigate } from "react-router-dom";

import NavItem from "./components/NavItem";

const SidebarNav = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [call, setCall] = React.useState(false);

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1} zIndex={10}>
        <Box display={"flex"} component="a" href="/" title="theFront" width={{ xs: 100, md: 120 }}>
          <Mylogo />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Box>
          <NavItem title={"Home"} route={"/"} />
        </Box>
        <Box>
          <NavItem title={"Frontend"} route={"/frontend"} />
        </Box>
        <Box>
          <NavItem title={"Backend"} route={"/backend"} />
        </Box>
        <Box>
          <NavItem title={"Profilio"} route={"/selfintro"} />
        </Box>

        <Box marginTop={2}>
          <Button
            size={"large"}
            variant="outlined"
            fullWidth
            component="button"
            onClick={() => {
              navigate("./demo");
            }}>
            Demo
          </Button>
        </Box>
        <Box marginTop={1}>
          <Button
            size={"large"}
            variant="contained"
            color="primary"
            fullWidth
            component="button"
            target="blank"
            onClick={() => {
              setCall(true);
              setTimeout(() => {
                setCall(false);
              }, [5000]);
            }}>
            {call ? "dial: 048-1877127" : "Call ME"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
