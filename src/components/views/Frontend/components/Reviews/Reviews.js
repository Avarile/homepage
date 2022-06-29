import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const mock = [
  {
    feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "无名氏",
    title: "Logistic Manager",
    avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
  },
  {
    feedback: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "John Doe",
    title: "Senior Frontend Developer",
    avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
  },
  {
    feedback: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Foo bar",
    title: "Fullstack programmer",
    avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
  },
];

const Reviews = () => {
  const theme = useTheme();
  const [selector, setSelector] = useState(0);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          data-aos={"fade-up"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}>
          Blow some of my own fxxxking trumpet!
        </Typography>
        <Typography variant="h6" color={"text.secondary"} data-aos={"fade-up"}>
          Companies from across the globe have had fantastic experiences while I working for them --- for this I can assure you is truth.
          <br />
          Here’s what they have to say.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              onMouseEnter={() => {
                setSelector(i);
              }}
              sx={{
                transition: "1s",
                cursor: "pointer",
              }}
              width={1}
              height={1}
              data-aos={"fade-up"}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display={"flex"}
              flexDirection={"column"}
              boxShadow={i === selector ? 4 : 0}
              bgcolor={i === selector ? "primary.main" : "none"}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <Box marginBottom={1}>
                  <Box display={"flex"} justifyContent={"flex-start"}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Box key={item} color={theme.palette.secondary.main}>
                        <svg width={18} height={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Typography color={i === selector ? theme.palette.common.white : "text.secondary"}>{item.feedback}</Typography>
              </CardContent>
              <Box flexGrow={1} />
              <CardActions sx={{ paddingBottom: 2 }}>
                <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                  <ListItemAvatar>
                    <Avatar src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ margin: 0 }}
                    primary={item.name}
                    secondary={item.title}
                    primaryTypographyProps={{
                      color: i === selector ? theme.palette.common.white : "text.primary",
                    }}
                    secondaryTypographyProps={{
                      color: i === selector ? theme.palette.common.white : "text.secondary",
                    }}
                  />
                </ListItem>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
