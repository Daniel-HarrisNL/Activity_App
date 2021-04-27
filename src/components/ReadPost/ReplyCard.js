import React from 'react';
import { Avatar, Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import avatar from '../../assets/avatar.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png'
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';

function ReplyCard() {
  const useStyles = makeStyles((theme) => ({
    root: {
      
      maxWidth: 390,
      boxSizing: 'border-box',
      background: '#e8e8e8',
      margin: 'auto auto 5px auto',
      borderRadius: "8px"
    },
    
  }));

    const classes = useStyles();
    return (
      <div>
        <Paper>
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar1} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
              <p style={{ textAlign: "left", margin: "8px 0" }}> 
              Where should we meet?
              
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray", margin: "8px 0" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          
        </Paper>
  
       
           <Paper >
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Remy Sharp</h4>
              <p style={{ textAlign: "left", margin: "8px 0" }}>The plan is still up in the air, and we will see what everyone else who wants to do this says.
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray", margin: "8px 0" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          
        </Paper>
     

       <Paper >
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar2} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
              <p style={{ textAlign: "left", margin: "8px 0" }}> I am interested. If anyone needs to arrange a ride, let me know.  We should make a list of things we need.
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray", margin: "8px 0" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          
        </Paper>
        <Paper >
          <Grid className={classes.root} container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={avatar2} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
              <p style={{ textAlign: "left", margin: "8px 0" }}> I am interested. If anyone needs to arrange a ride, let me know.  We should make a list of things we need.
                {" "}
              </p>
              <p style={{ textAlign: "left", color: "gray", margin: "8px 0" }}>
                posted 1 minute ago
              </p>
            </Grid>
          </Grid>
          
        </Paper>
      </div>
    );
  }

  export default ReplyCard;