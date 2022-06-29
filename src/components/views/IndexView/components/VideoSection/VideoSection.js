import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import bgAvi from "utils/assets/Website-video-home4.mp4";

const VideoSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        zIndex: 0,
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: 1,
          height: 1,
          zIndex: 0,
          // background: theme.palette.primary.main,
          opacity: 0.5,
        },
      }}>
      <Box component={"video"} width={1} autoPlay={true} muted={true} loop={true} sx={{ zIndex: 0 }}>
        <source src={bgAvi} type="video/mp4" />
        {/* <source src="https://assets.maccarianagency.com/videos/video.mp4" type="video/webm" />
        <source src="https://assets.maccarianagency.com/videos/video.mp4" type="video/ogg" /> */}
        Your browser do not support HTML5 video.
      </Box>
    </Box>
  );
};

export default VideoSection;
