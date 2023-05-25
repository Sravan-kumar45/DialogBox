import ReusableComponent from "../ReusableComponent";
import DialogBox from "../DialogBox";

function GatePassReceived() {

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
      title="Gatepass Received"
      contentText="Add Remarks and Add File"
      content={content()}
      ButtonText="Gatepass Received"
    />
  );
}

export default GatePassReceived;
