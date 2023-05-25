import ReusableComponent from "../ReusableComponent";
import DialogBox from "../DialogBox";

function OutofCharge() {
  function content() {
    return (
      <ReusableComponent
        remarks="Reason for Amendment"
        timeStamp="TimeStamp"
        addFile="active"
      />
    );
  }

  return (
    <DialogBox
      title="Out of Charge"
      contentText="Add Remarks and Add File"
      content={content()}
      ButtonText="Out of Charge"
    />
  );
}

export default OutofCharge;
