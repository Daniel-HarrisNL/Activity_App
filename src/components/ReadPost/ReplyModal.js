import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function ReplyModal(props) {

  let postID   = props.postID;
  let userID   = sessionStorage.getItem("currentUserID");
  let userName = sessionStorage.getItem("currentName");

  // console.log(postID, userID, userName)

  const [newComment, setNewComment] = useState({"user_id": userID, "user_name": userName, "post_id": postID});

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
  
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Storing the Comment Data.
  const addNewComment = (e, field) => {
    setNewComment({
      ...newComment,
      [field]: e.target.value,
    });
  };

  // Inserting a new post into the Database.
  const submitComment = (e) => {
    e.preventDefault();
    insertComment(newComment);
    e.target.reset();
    // console.log(newComment);
  };

  const insertComment = (newComment) => {
    fetch("http://johnny-o.net/activity-app/php-react/comments.php", {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment),
    })
    .then((response)=>{
      return response.text()
    })
    .then((text) => {
      props.refresh(previousValue => previousValue + 1)
      handleClose();
      console.log(text);
    }, (error) => {
      console.log(error);
    });
  };  

  // comments table
  // id | post_id | user_id | user_name | comment_datetime | comment

  return (
    <div>
     
      <button className="btn large blue-btn" onClick={handleOpen} aria-label="Comment">
      Comment&nbsp;<QuestionAnswerOutlinedIcon fontSize="medium" style={{color: 'red'}} />
      </button>

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
          <div className={classes.paper} style={{zIndex: 10}}>
          <form onSubmit={submitComment}>
            <TextField
                label="Reply"
                multiline
                rows={4}
                variant="outlined"
                fullWidth={true}
                required={true}
                onChange={(e) => addNewComment(e, "comment")}
            />
            <button className="btn blue-btn large" type="submit" title="Submit">Submit</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ReplyModal


  