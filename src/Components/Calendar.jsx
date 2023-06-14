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
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import AddIcon from "@mui/icons-material/Add";
import CalendarNavbar from "./CalendarNavbar";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 5, 15]);

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
                      {/* Add event data here */}
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

export default Calendar;
