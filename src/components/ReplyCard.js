import React from 'react';
import { Avatar, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import avatar from '../assets/avatar.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import SubdirectoryArrowRightOutlinedIcon from '@material-ui/icons/SubdirectoryArrowRightOutlined';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      border: '1px solid rgba(0, 0, 0, 0.28)',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      background: '#e8e8e8',
      margin: 'auto'
    },
    reply: {
        maxWidth: 270,
        border: '1px solid rgba(0, 0, 0, 0.28)',
        boxSizing: 'border-box',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        background: '#e8e8e8',
        margin: 'auto'
    }
  }));

function ReplyCard() {
    const classes = useStyles();
    return (
      <div>
        <Paper >
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar1} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
              <p style={{ textAlign: "left" }}> Where is this happening? How long will we be gone, and what should we bring?sdvsvdsvsdsd d s dvsd vs vd sd vdsvdsvdsvdsvsdv sdv ds vds
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
              <CardActions><QuestionAnswerOutlinedIcon/>Reply</CardActions>
            </Grid>
          </Grid>
          
        </Paper>
  
       <CardActions>
           <SubdirectoryArrowRightOutlinedIcon
           style={{ fontSize: 75 }}/>
           <Paper >
          <Grid className={classes.reply} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Remy Sharp</h4>
              <p style={{ textAlign: "left" }}>The plan is still up in the air, and we will see what everyone else who wants to do this, says.
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
              <CardActions><QuestionAnswerOutlinedIcon/>Reply</CardActions>
            </Grid>
          </Grid>
          
        </Paper>
       </CardActions>

       <Paper >
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar2} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
              <p style={{ textAlign: "left" }}> I am interested. If anyone needs to arrange a ride, let me know.  We should make a list of things we need.
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray" }}>
                posted 1 minute ago
              </p>
              <CardActions><QuestionAnswerOutlinedIcon/>Reply</CardActions>
            </Grid>
          </Grid>
          
        </Paper>
      </div>
    );
  }

  export default ReplyCard;