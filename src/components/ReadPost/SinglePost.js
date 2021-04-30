import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../App.css';

import InterestedModal from './InterestedModal';
import ReplyModal from './ReplyModal';
import { Divider } from '@material-ui/core';
import { useParams } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReplyCard from './ReplyCard';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import useMUIFixer from '../../useMaterialUiStyleFixer';

function CommentCard() {

  const [postArray, setPostArray] = useState([]);
  const [commentsArray, setCommentsArray] = useState([]);
  const [refreshComments, setRefreshComments] = useState(0);

  const { postID } = useParams();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {

    const response = await axios.get(`http://johnny-o.net/activity-app/php-react/get-posts.php?id=${postID}`);

    setPostArray(response.data)
    // console.log(response.data)
  }

  useEffect(() => {
    getComments();
  }, [refreshComments]);

  const getComments = async () => {

    const response = await axios.get(`http://johnny-o.net/activity-app/php-react/comments.php?post_id=${postID}`);

    setCommentsArray(response.data)
    // console.log(response.data)
  }


  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: '#757CE8',
        main: '#f9f9fe',
        // dark: '#002884',
        contrastText: '#FFFFFF',
      },
      secondary: {
        light: '#FF7961',
        main: '#F44336',
        dark: '#BA000D',
        contrastText: '#000000',
      },
      
    },
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      background: '#4892BC',
      border: '1px solid rgba(0, 0, 0, 0.28)',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      margin: '0 auto 8px auto'
    
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    title: {
      color: 'white',
      fontSize: 18,
    },
    dividerColor: {
      backgroundColor: 'white',
      width: '100%',
      margin: 'auto'
    },
    textArea: {
      boxSizing: 'border-box',
      textAlign:'left',
      fontSize:'1.1rem'
    },
    viewHeight: {
      height: '1000vh',
    }
    
  }));

  // function MakePost(props){
  //   const [message, setMessage] = useState("");
  
  //   const onButtonClick = ()=>{
  //     let post = {
       
  //       "message": message
  //     }
  //     props.addNewPost(post);
  //   }
  
  //   return (<form>
  //     <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="message" />
  //     <button onClick={onButtonClick} type="button">Submit!</button>
  //   </form>);
  // }
  
  const classes = useStyles();
  // Uses url parameter ID to get the correct post data
  // console.log(postID);

  useMUIFixer();
  if(postArray.length === 0){
    return <Typography>Loading... please wait!</Typography>
  }
  
  let postTitle = postArray.title.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",");
  let postUserID = postArray.user_id;
  let postUserAvatar = require('../../assets/avatar' + postUserID + '.png').default
  let postUserName = postArray.user_name.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",");

  // let postCategory = postArray.category;
  let postLocation = postArray.location.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",");
  let postDescription = postArray.description.replace(/&#39;/g, "'").replace(/&#8208;/g, "-").replace(/&#44;/g, ",");
  let postStartDate = postArray.start_datetime;
  // let postEndDate = postArray.end_datetime;
  

  return (
    <div>
      <div className="main-ext ">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar src={postUserAvatar} aria-label={postUserName} className={classes.avatar}/> 
            }
            className={classes.title}
            title={ <Typography gutterBottom variant="h5" component="h2">
              {postTitle}
            </Typography>}
            subheader={<Typography gutterBottom variant="h6" style={{color: 'lightgrey'}} component="p"> {`${postStartDate.slice(0,10)} | ${postLocation}`} </Typography>}
          />
          <Divider className={classes.dividerColor} />
          <CardContent>
            <ThemeProvider theme={theme}>
            <Typography color="primary" component="p" className={classes.textArea}>
              {postDescription} 
            </Typography>
            </ThemeProvider>
          </CardContent>
        
        </Card>
        {commentsArray.length > 0 ? commentsArray.map((e)=>{
          return (
            <ReplyCard
              commentID = {e.id}
              userID = {e.user_id}
              userName = {e.user_name}
              datetime = {e.comment_datetime}
              comment = {e.comment}
            />);
          }) : null
        }
      </div>
      <div className="post-buttons single-post">
        <InterestedModal />
        <ReplyModal
          postID = {postID}
          refresh = {setRefreshComments}
        />
      </div>
    </div>
    
    )
};

export default CommentCard
