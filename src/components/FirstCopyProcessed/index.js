import ReusableComponent from "../ReusableComponent";
import DialogBox from "../DialogBox";

function FirstCopyProcessed() {
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
    <>
      <DialogBox
        title="1st Copy of Processed BE"
        ButtonText="1st Copy of Processed BE"
        contentText="Add Remarks and Add File"
        content={content()}
      />
    </>
  );
}

export default FirstCopyProcessed;
