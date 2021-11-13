import React from 'react';
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import FieldContent from './FieldContent';

const useStyles = makeStyles((theme) => {
  return {
    subItem: {
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
      },
    },
    avatar: {
      textAlign: 'center',
      alignSelf: 'flex-end',
      marginRight: 5,
      width: 75,
    },
    avatarImg: {
      [theme.breakpoints.up('md')]: {
        width: 75,
        height: 75,
      },
      [theme.breakpoints.down('sm')]: {
        width: 60,
        height: 60,
      },
      marginBottom: 5,
    },
    avatarName: {
      wordBreak: 'break-all',
    },
  };
});

function QuestionItem(props) {
  const classes = useStyles();

  return (
    <ListItem divider alignItems='center' disableGutters>
      <Grid container direction='column'>
        <ListItem>
          <Typography variant='h6'>Question 1</Typography>
        </ListItem>
        <ListItem className={classes.subItem}>
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Score
              </Typography>
            }
            secondary={<FieldContent value='123' highlightType='text' />}
          />
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Answers
              </Typography>
            }
            secondary={<FieldContent value='123' highlightType='outline' />}
          />
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Viewed
              </Typography>
            }
            secondary={<FieldContent value='123' highlightType='contented' />}
          />
        </ListItem>
      </Grid>
      <ListItemAvatar className={classes.avatar}>
        <Avatar className={classes.avatarImg} />
        <Typography className={classes.avatarName} variant='h7'>
          Name
        </Typography>
      </ListItemAvatar>
    </ListItem>
  );
}

QuestionItem.propTypes = {};

export default QuestionItem;
