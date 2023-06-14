import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import {
  TextField,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import EventIcon from "@mui/icons-material/Event";
import DeleteIcon from "@mui/icons-material/Delete";

const StaffCalendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 5, 15]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [events, setEvents] = useState([]);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = () => {
    const newEvent = {
      startTime,
      endTime,
      title,
      email,
      message,
    };

    setTitle("");
    setEmail("");
    setStartTime("");
    setEndTime("");
    setMessage("");
    setEvents([...events, newEvent]);
    setIsSubmitted(true);
    setIsFormOpen(false);
  };

  const times = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box style={{ display: "flex", width: "100%" }}>
        <div style={{ flex: 4, textAlign: "center" }}>
          <StaticDatePicker
            orientation="portrait"
            openTo="day"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            renderDay={(day, _value, DayComponentProps) => {
              const isSelected =
                !DayComponentProps.outsideCurrentMonth &&
                highlightedDays.indexOf(day.getDate()) >= 0;
              return (
                <Badge
                  key={day.toString()}
                  overlap="circular"
                  badgeContent={isSelected ? "🌚" : undefined}
                >
                  <PickersDay {...DayComponentProps} />
                </Badge>
              );
            }}
          />
          <Stack direction="column" spacing={3} alignItems="center">
            <Button
              variant="primary"
              onClick={handleFormOpen}
              sx={{
                bgcolor: "#ECF0F1",
                color: " #b90e0a",
                "&:hover": {
                  backgroundColor: "#b90e0a",
                  color: "#ffffff",
                },
              }}
              startIcon={<EventIcon />}
            >
              Add Event
            </Button>
            {isFormOpen && !isSubmitted && (
              <Dialog
                open={isFormOpen}
                onClose={handleFormClose}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  width: "500px",
                }}
              >
                <DialogTitle>Add Event</DialogTitle>
                <DialogContent>
                  <TextField
                    label="Title :"
                    variant="outlined"
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    label="Attendees :"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    label="Start Time :"
                    variant="outlined"
                    margin="normal"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    sx={{ width: "100%" }}
                  />

                  <TextField
                    label="End Time :"
                    variant="outlined"
                    margin="normal"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                  <TextField
                    label="Description :"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ width: "100%" }}
                  />
                  <DialogActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleFormSubmit}
                    >
                      Save
                    </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>
            )}
            {isSubmitted && (
              <div>
                <Typography variant="h6" align="center" gutterBottom>
                  event successfully created!
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setIsFormOpen(false);
                    setIsSubmitted(false);
                  }}
                ></Button>
              </div>
            )}

            <Button
              variant="primary"
              sx={{
                bgcolor: "#ECF0F1",
                color: " #b90e0a",

                "&:hover": {
                  backgroundColor: "#b90e0a",
                  color: "#ffffff",
                },
              }}
              startIcon={<DeleteIcon />}
            >
              Remove Event
            </Button>
          </Stack>
        </div>
        <div
          style={{
            flex: 8,
            marginLeft: "1rem",
            marginTop: "1rem",
          }}
        >
          <TableContainer style={{ width: "100%" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>Event</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {times.map((time) => (
                  <TableRow key={time}>
                    <TableCell
                      style={{
                        borderBottom: "1px dotted #000",
                      }}
                    >
                      <Typography variant="body1">{time}</Typography>
                    </TableCell>
                    <TableCell
                      style={{
                        borderBottom: "1px dotted #000",
                      }}
                    >
                      {events.map((event, index) => {
                        const eventStartTime = event.startTime.substring(0, 5);
                        if (eventStartTime === time) {
                          return (
                            <div key={index}>
                              <Typography variant="body1">
                                {event.title}
                              </Typography>
                              <Typography variant="body2">
                                {event.attendees}
                              </Typography>
                              <Typography variant="body2">
                                {event.message}
                              </Typography>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </LocalizationProvider>
  );
};

export default StaffCalendar;
