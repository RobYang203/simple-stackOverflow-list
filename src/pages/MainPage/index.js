import {
  AppBar,
  Button,
  Chip,
  IconButton,
  makeStyles,
  OutlinedInput,
  Paper,
} from '@material-ui/core';
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './components/SearchBar';
import TagButton from './components/TagList/TagButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(1 , 0)
  },
  inputRoot: {
    borderRadius: 20,
  },
  inputAdornedEnd: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    background: '#fff',
  },
  title: {
    flexGrow: 1,
  },
}));

function MainPage() {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant='elevation' square >
     <SearchBar/>
     <TagButton label='javascript' />
     <TagButton label='C#' />
    </Paper>
  );
}

export default MainPage;
