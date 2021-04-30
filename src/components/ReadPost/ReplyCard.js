import React from 'react';
import "./replyCard.css"

function ReplyCard(props) {

  let id = props.userID;
  let image = require('../../assets/avatar' + id + '.png').default;

  console.log(image)

  return (
      <div className="reply-card" key={props.userID}>
        <div className="reply-card-avatar">
          <img className="r-c-avatar" alt={props.userName} src={image} />
        </div>
        <div className="reply-card-text">
          <h4>{props.userName}</h4>
          <p>{props.comment}</p>
          <p class="r-c-date">{props.datetime}</p>
        </div>
      </div>
  )




  // console.log.apply(props);

  // const useStyles = makeStyles((theme) => ({
  //   root: {
      
  //     maxWidth: 390,
  //     boxSizing: 'border-box',
  //     background: '#e8e8e8',
  //     margin: 'auto auto 5px auto',
  //     borderRadius: "8px"
  //   },
    
  // }));

  //   const classes = useStyles();
  //   const imageURL = `http://johnny-o.net/activity-app/images/avatar${props.userID}.png`;
  //   return (
  //     <div key={props.id}>
  //       <Paper>
  //         <Grid className={classes.root} container wrap="nowrap" spacing={2}>
  //           <Grid item>
  //             <Avatar alt={props.userName} src={avatar1} />
  //           </Grid>
  //           <Grid justifyContent="left" item xs zeroMinWidth>
  //             <h4 style={{ margin: 0, textAlign: "left" }}>Jane Doe</h4>
  //             <p style={{ textAlign: "left", margin: "8px 0" }}> 
  //             {props.comment}
              
  //               {" "}
  //             </p>
  //             <p style={{ textAlign: "left", color: "gray", margin: "8px 0" }}>
  //               {props.date}
  //             </p>
  //           </Grid>
  //         </Grid>
  //       </Paper>
  
       
  //     </div>
  //   );
  }

  export default ReplyCard;