import React from "react";
import DialogBox from "../DialogBox";
import ReusableComponent from "../ReusableComponent";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";

const queryReply = [
  {
    id: 1,
    value: 1234567,
  },
  {
    id: 2,
    value: 5466345,
  },
  {
    id: 3,
    value: 4564633,
  },
  {
    id: 4,
    value: 5478335,
  },
];

function QueryReply() {
  function content() {
    return (
      <>
        <div className="main-container">
          <h1 className="heading">Select Query Received</h1>
          <TextField
            className="date"
            id="standard-select-currency"
            select
            defaultValue="EUR"
            variant="standard"
          >
            {queryReply.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <ReusableComponent
          heading="Add Reply Message"
          remarks="Add Remarks"
          timeStamp="TimeStamp"
          addFile="active"
        />
      </>
    );
  }

  return (
    <>
      <DialogBox
        title="Query Reply"
        ButtonText="Query Reply"
        contentText="Select Query to Reply, add reply, add remarks and Timeslamp"
        content={content()}
      />
    </>
  );
}

export default QueryReply;
