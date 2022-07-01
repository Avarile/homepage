import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FooterNewsletter = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={"h4"} align={"center"} gutterBottom>
          Send me a letter: Avarile@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterNewsletter;
