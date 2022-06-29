/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const QuickStart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={"center"}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}>
            Proficient with React Ecosystem
          </Typography>
          <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }} align={"center"}>
            Solve your tech and customer service problem.
          </Typography>
        </Box>
      </Box>
      <Box
        component={SyntaxHighlighter}
        language={"javascript"}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
        bgcolor={"#21325b !important"}>
        {`
> $ Avarile hire
// Or
> $ Avarile contracted

// Another reliable fullstack solution found!


> $ Avarile --frontend start
// Or
> $ Avarile --backend start

// Avarile Problem Solver --init
        `}
      </Box>
    </Box>
  );
};

export default QuickStart;
