import React from "react";
import DialogBox from "../DialogBox";
import ReusableComponent from "../ReusableComponent";

function QueryRaised() {

  function content() {
    return (
      <div>
        <ReusableComponent
          heading="Query Raised"
          remarks="Remarks"
          timeStamp="TimeStamp"
          textField=""
          addFile="active"
        />
      </div>
    );
  }

  return (
    <>
      <DialogBox
        title="Query Raised"
        ButtonText="Query Raised"
        contentText="Add Query Raised message, Remarks and upload File"
        content={content()}
      />
    </>
  );
}

export default QueryRaised;
