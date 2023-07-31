import { Fab, Modal, Tooltip, Typography, styled } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const AddPostContainer = styled("div")(({ theme }) => ({
    width: "450px",
    height: "250px",
    padding: "20px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
  }));
  return (
    <>
      <Tooltip
        title="Add Post"
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddPostContainer>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </AddPostContainer>
      </Modal>
    </>
  );
};

export default Add;
