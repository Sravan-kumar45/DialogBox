import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function DialogBox(props) {
  const { title, content, contentText, ButtonText } = props;
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {ButtonText}
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
            }}
          >
            {content}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClickOpen}>Add Status</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogBox;
