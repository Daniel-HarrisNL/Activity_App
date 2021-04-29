import React, { useState } from 'react'
import '../../App.css';

import InterestedModal from './InterestedModal';
import ReplyModal from './ReplyModal';
import { Divider } from '@material-ui/core';
import {BrowserRouter as useParams} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReplyCard from './ReplyCard';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


import avatar from '../../assets/avatar.png';

function CommentCard(props) {

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
      // border: '1px solid rgba(0, 0, 0, 0.28)',
      boxSizing: 'border-box',
      // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.29)',
      textAlign:'left',
      // backgroundColor: 'rgba(0, 0, 0, 0.29)'
      fontSize:'1.1rem'
    },
    viewHeight: {
      height: '1000vh',
    }
    
  }));

  function MakePost(props){
    const [message, setMessage] = useState("");
  
    const onButtonClick = ()=>{
      let post = {
       
        "message": message
      }
      props.addNewPost(post);
    }
  
    return (<form>
      <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder="message" />
      <button onClick={onButtonClick} type="button">Submit!</button>
    </form>);
  }
  
  
  function Posts(props){
    let posts = props.postData;
    let postsHtml = []
    for(let i = 0; i < posts.length; i++){
      let post = posts[i];
      postsHtml.push(<div>
        <h3>{post.name}</h3>
        <p>{post.message}</p>
      </div>)
    }
  
    return (
      <main>
        <h1>Posts:</h1>
        {postsHtml}
      </main>
    )
  }
  
    
    const classes = useStyles();
    //Uses url parameter ID to get the correct post data
    const { postID } = useParams();
    console.log(props.feedData)

    let postArray = props.feedData;
    let postContent = postArray.find(post => post.id === postID)
    
    let postTitle = postContent.title;
    let postCategory = postContent.category;
    let postLocation = postContent.location;
    let postDescription = postContent.description;
    let postStartDate = postContent.startDate;
    let postEndDate = postContent.endDate;
    


    return (
     
      <div>
      {/* <div className={classes.viewHeight}> */}
        <div className="main-ext ">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="avatar" className={classes.avatar}/> 
        }
        className={classes.title}
        title={ <Typography gutterBottom variant="h5" component="h2">
          {postTitle}
        </Typography>}
        subheader={<Typography gutterBottom variant="h6" style={{color: 'lightgrey'}} component="p"> {`${postStartDate} | ${postLocation}`} </Typography>}
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
    <ReplyCard/>
    {/* </div> */}
    </div>
    <div className="post-buttons single-post">
      <InterestedModal />
      <ReplyModal/>
    </div>
    </div>
    
    )
};

export default CommentCard
