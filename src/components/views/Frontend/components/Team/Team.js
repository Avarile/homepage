import React from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import PhoneIcon from "@mui/icons-material/Phone";

const mock = [
  {
    name: "Avarile",
    title: "Frontend Developer",
    avatar: "https://assets.maccarianagency.com/avatars/img4.jpg",
  },
  {
    name: "Avarile",
    title: "Backend developer",
    avatar: "https://assets.maccarianagency.com/avatars/img5.jpg",
  },
  {
    name: "Avarile",
    title: "Linux Lover",
    avatar: "https://assets.maccarianagency.com/avatars/img6.jpg",
  },
  {
    name: "Avarile",
    title: "Supply Chain Implementaion",
    avatar: "https://assets.maccarianagency.com/avatars/img1.jpg",
  },
  {
    name: "Avarile",
    title: "Abattoir worker",
    avatar: "https://assets.maccarianagency.com/avatars/img2.jpg",
  },
  {
    name: "Avarile",
    title: "Automobile Assembly worker",
    avatar: "https://assets.maccarianagency.com/avatars/img3.jpg",
  },
];

const Reviews = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}>
          Me
        </Typography>
        <Typography
          variant="h4"
          align={"center"}
          data-aos={"fade-up"}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}>
          Why work with Me
        </Typography>
        <Typography variant="h6" align={"center"} color={"text.secondary"} data-aos={"fade-up"}>
          I am a talented and devotional Supply Chain operator / fullstack developer.
        </Typography>
        <Box marginTop={2} display={"flex"} justifyContent={"center"}>
          <Button variant="contained" color="primary" size="large" startIcon={<PhoneIcon />}>
            Call me now on: 048-1877127
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box sx={{ paddingBottom: 2 }}>
              <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                <ListItemAvatar sx={{ marginRight: 3 }}>
                  <Avatar src={item.avatar} variant={"rounded"} sx={{ width: 100, height: 100, borderRadius: 2 }} />
                </ListItemAvatar>
                <ListItemText sx={{ margin: 0 }} primary={item.name} secondary={item.title} />
              </ListItem>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
