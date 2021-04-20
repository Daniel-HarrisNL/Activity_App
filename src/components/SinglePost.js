import React from 'react'
import NavBar from "./NavBar.js";
import Form from './Form';
import Buttons from './Buttons';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';


// import avatar from './assets/avatar.png';



const theme = createMuiTheme({
    palette: {
      primary: {
        // light: '#757ce8',
        main: '#f9f9fe',
        // dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      
    },
  });
  
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 360,
      background: '#4892BC',
      border: '1px solid rgba(0, 0, 0, 0.28)',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '10px',
      margin: '25px auto'
    
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    title: {
      color: 'white',
    },
    dividerColor: {
      backgroundColor: 'white',
      width: '80%',
      margin: 'auto'
    },
    textArea: {
      // border: '1px solid rgba(0, 0, 0, 0.28)',
      boxSizing: 'border-box',
      // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.29)',
    
      backgroundColor: 'rgba(0, 0, 0, 0.29)'
    }
    
  
    
  }));
  

export default function CommentCard() {
  

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <div>
    <NavBar 
            nav_title="EVENT"/>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src="./assets/avatar.png" aria-label="avatar" className={classes.avatar}> 
           
          </Avatar>
        }
        className={classes.title}
        title="Looking for biking friends"
        subheader="TimeStamp Placeholder"
      />
      <Divider className={classes.dividerColor} />
      <CardContent>
        <ThemeProvider theme={theme}>
        <Typography variant="body2" color="primary" component="p" className={classes.textArea}>
        “Hey all!  I am looking to organize a biking trip for this weekend.  Hoping to find a few friends who are interested.”
        </Typography>
        </ThemeProvider>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="I'm interested">
          <EmojiEmotionsIcon style={{color: 'yellow'}} /> <h6 style={{color: 'lightGrey'}} >-I'm Interested!</h6>
        </IconButton>
        <IconButton aria-label="comment">
          <MessageOutlinedIcon fontSize="large" style={{color: 'white'}} />
          <h6 style={{color: 'black'}} >-Comment</h6>
        </IconButton>
      
      </CardActions>
      
    </Card>
    <Link to="/feed" >
    <Footer />
    </Link>
    </div>
    )
}



