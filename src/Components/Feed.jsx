import React from "react";
import { Box } from "@mui/material";
import MessageList from "./MessageList";

const Feed = () => {
  const messages = [
    {
      id: 1,
      subject: "Hello",
      sender: "john@example.com",
      time: "10:30 AM",
      textfield: "Welcome to the group!",
    },
    {
      id: 2,
      subject: "Meeting reminder",
      sender: "jane@example.com",
      time: "12:30 AM",
      textfield: "You have a meeting today at 1:00pm.",
    },
    {
      id: 3,
      subject: "Event Invitation",
      sender: "jane@example.com",
      time: "11:00 AM",
      textfield: "You have a recieved an Invitation from forening.",
    },
  ];

  return (
    <Box flex={3} p={2} border={1} borderColor="#b90e0a">
      <div>
        <h1>Notifications</h1>
        <MessageList messages={messages} />
      </div>
    </Box>
  );
};

export default Feed;
