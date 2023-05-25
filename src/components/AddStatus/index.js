import React from "react";
import ReusableComponent from "../ReusableComponent";
import DialogBox from "../DialogBox";

function AddStatus() {

  function content() {
    return (
      <ReusableComponent
        heading=""
        remarks="Enter your Remarks"
        timeStamp="TimeStamp"
        textField=""
        addFile=""
      />
    );
  }

  return (
    <>
      <DialogBox
        title="Add Status: Job Submitted to Icegate"
        ButtonText="AddStatus"
        contentText="Add Remarks and Timestamp"
        content={content()}
      />
    </>
  );
}

export default AddStatus;
