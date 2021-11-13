import {
  makeStyles,
  Paper,
} from '@material-ui/core';
import React from 'react';
import SearchBar from './components/SearchBar';
import TagList from './components/TagList';
import QuestionList from './components/QuestionList';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(1, 0),
  },
}));

function MainPage() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant='elevation' square>
      <SearchBar />
      <TagList />
      <QuestionList/>
    </Paper>
  );
}

export default MainPage;
