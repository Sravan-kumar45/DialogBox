import React from "react";
import TextField from "@mui/material/TextField";
import "./index.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button } from "@mui/material";

// const styles = {
//     heading: {
//       fontSize: '15px',
//       fontFamily: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
//       fontWeight: 400
//     },
//     mainContainer: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginTop: '20px'
//     },
//     date: {
//       width: '70%'
//     },
//     textField: {
//       width: '70%'
//     }
//   };

function ReusableComponent(props) {
  const { remarks, timeStamp, textField, addFile, heading } = props;

  return (
    <>
      {heading && (
        <div className="main-container">
          <h1 className="heading">{heading}</h1>
          <TextField
            className="date"
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
          />
        </div>
      )}

      <div className="app-container">
        {textField && (
          <div className="main-container">
            <h1 className="heading">Enter BE Date</h1>
            <div className="date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker label="Enter Date" />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
        )}

        <div className="main-container">
          <h1 className="heading">{remarks}</h1>
          <TextField
            className="text-field"
            id="outlined-multiline-static"
            label="Enter your Remarks"
            multiline
            rows={5}
            defaultValue=""
          />
        </div>

        <div className="main-container">
          <h1 className="heading">{timeStamp}</h1>
          <div className="date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Enter Time Stamp" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        {addFile && (
          <div className="main-container">
            <h1 className="heading">Add File</h1>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default ReusableComponent;
