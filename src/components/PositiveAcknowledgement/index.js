import React from "react";
import ReusableComponent from "../ReusableComponent";
import DialogBox from "../DialogBox";

function PositiveAcknowledgement() {

  function content() {
    return (
      <div>
        <ReusableComponent
          heading="Enter BE No"
          remarks="Remarks"
          timeStamp="TimeStamp"
          textField="active"
          addFile="active"
        />
      </div>
    );
  }

  return (
    <>
      <DialogBox
        title="PositiveAcknowledgement"
        ButtonText="Positive Acknowledgement"
        contentText="Add BE Number, BE Date and upload File"
        content={content()}
      />
    </>
  );
}

export default PositiveAcknowledgement;
