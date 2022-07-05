/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PhoneSkeletonIllustration from "components/svg/illustrations/PhoneSkeleton";
import mobile from "utils/assets/mobile.jpg";

const VideoSection = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            maxWidth: 450,
            position: "relative",
            marginX: "auto",
          }}>
          <Box
            sx={{
              position: "relative",
              borderRadius: "2.75rem",
              boxShadow: 1,
              width: "75% !important",
              marginX: "auto",
            }}>
            <Box>
              <Box position={"relative"} zIndex={2} maxWidth={1} height={"auto"} sx={{ verticalAlign: "middle" }}>
                <PhoneSkeletonIllustration />
              </Box>
              <Box
                position={"absolute"}
                top={"2.4%"}
                left={"4%"}
                width={"92.4%"}
                height={"96%"}
                sx={{
                  "& .lazy-load-image-loaded": {
                    height: 1,
                    width: 1,
                  },
                }}>
                <Box
                  component={LazyLoadImage}
                  src={mobile}
                  alt="Image Description"
                  effect="blur"
                  width={1}
                  height={1}
                  sx={{
                    objectFit: "cover",
                    borderRadius: "2.5rem",
                    filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}>
              A Simple self Introduction on Youtube
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              {/* Wait a sec before you close the page, this video is only about 3 mins, wont waste too much of your life!, why not give it a go?. */}
              Well, I am going to make a self Introduction, still working on it. so, I put up an random video as placeholder... for now.
            </Typography>
          </Box>
          <Box height={1} width={1} maxHeight={400} maxWidth={{ xs: "100%", sm: 800 }} marginTop={3}>
            <Box
              component={"iframe"}
              title="video"
              width="100%"
              height="100%"
              minHeight={400}
              src="https://www.youtube.com/embed/ClIbn_IF31U"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
