import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { blueGrey } from "@mui/material/colors";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="400" padding="10px 20px">
          Upcoming Events
        </Typography>
        <List
          sx={{
            width: "90%",
            maxWidth: 360,
            bgcolor: "background.paper",
            color: "#b90e0a",
            border: "1px solid #e0e0e0",
            marginRight: 0,
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Kaffe mé drömmar"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    1 Juli, kl 11:00
                    <br />
                  </Typography>
                  {
                    "Kaffe mé drömmar arrangeras av Föreningen Teater i Huskvarnai samarbete med NBV."
                  }
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Folkmusik med Högt i tak"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    28 Augusti, kl 20:00
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Blown in the wind"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    21 Oktober, kl 20:00
                  </Typography>
                  <br />
                  {"Trio Astrakan tolkar Bob Dylan"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
