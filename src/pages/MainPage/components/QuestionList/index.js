import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  makeStyles,
  Typography,
} from '@material-ui/core';
import QuestionItem from './components/QuestionItem';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      overflow: 'auto',
      padding: theme.spacing(1, 0.5),
    },
    subItem: {
      textAlign: 'center',
    },
    avatar: {
      textAlign: 'center',
      alignSelf: 'flex-end',
    },
    avatarImg: {
      width: 75,
      height: 75,
      marginBottom: 5,
    },
  };
});

function QuestionList(props) {
  const classes = useStyles();

  return (
    <List>
      <QuestionItem />
    </List>
  );
}

QuestionList.propTypes = {};

export default QuestionList;
