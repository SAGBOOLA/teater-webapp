import React from "react";
import styled from "@emotion/styled";
import { List, ListItem, ListItemText } from "@mui/material";

const CustomListItem = styled(ListItem)({
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  marginBottom: "8px",
});

const MessageList = ({ messages }) => {
  return (
    <List>
      {messages.map((message) => (
        <CustomListItem key={message.id}>
          <ListItemText
            primary={message.subject}
            secondary={
              <>
                {message.sender} - {message.time}
                <br />
                {message.textfield}
              </>
            }
          />
        </CustomListItem>
      ))}
    </List>
  );
};
export default MessageList;
