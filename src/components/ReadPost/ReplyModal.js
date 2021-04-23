import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '8px',
    width: "350px",
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function ReplyModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <IconButton type="button" onClick={handleOpen} aria-label="comment">
          <MessageOutlinedIcon fontSize="large" style={{color: 'white'}} />
          <h6 style={{color: 'black'}} >-Comment</h6>
        </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <div className={classes.paper} style={{zIndex: 1}}>
            <TextField
                
                label="Reply"
                multiline
                rows={4}
                variant="outlined"
                fullWidth={true}
                required={true}
            />
            <button onClick={handleClose} className="btn blue-btn large" type="button" title="Submit">Submit</button>
        </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReplyModal


  