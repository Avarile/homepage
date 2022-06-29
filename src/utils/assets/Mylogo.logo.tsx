import Box from "@mui/material/Box";
import React, { useState } from "react";
import Mylogo from "./Mylogo.jpg";
import { useNavigate } from "react-router-dom";

const AvarileLogo = ({ colorInvert }: { colorInvert: boolean }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <Box
        component={"img"}
        src={Mylogo}
        height={1}
        width={1}
        sx={{
          transition: "1s",
          borderRadius: "0 5px 0 5px",
          boxShadow: hovered ? "2px 2px 0px 2px" : "1px 1px 0px 1px",
          filter: `${colorInvert ? "grayScale(100%) opacity(15%)" : "grayScale(0%) opacity(100%)"}`,
        }}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        onClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};

export default AvarileLogo;
