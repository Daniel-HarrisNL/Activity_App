import React from 'react'
import InterestedModal from './InterestedModal';
import ReplyModal from './ReplyModal';
import { Divider } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ReplyCard from './ReplyCard';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';


import avatar from '../../assets/avatar.png';

function CommentCard() {

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
      maxWidth: 390,
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
  
    const classes = useStyles();
      
    return (
        <div className="main-ext">
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="avatar" className={classes.avatar}/> 
        }
        className={classes.title}
        title={ <Typography gutterBottom variant="h5" component="h2">
          Looking for biking friends
        </Typography>}
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
      <CardActions disableSpacing className="post-buttons">
        <InterestedModal />
        <ReplyModal />
      </CardActions>
    </Card>
    <ReplyCard/>
    </div>
    )
};

export default CommentCard
