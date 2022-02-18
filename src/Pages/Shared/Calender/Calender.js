import React from "react";
// import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

// import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { CalendarPicker } from "@mui/lab";

const Calender = ({ date, setDate }) => {
  return (
    <div>
      <h1>Calender header</h1>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* <StaticDatePicker
          sx={{ backgroundColor: "transparent" }}
          displayStaticWrapperAs='desktop'
          openTo='day'
          value={date}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <CalendarPicker
          openTo='day'
          date={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calender;
