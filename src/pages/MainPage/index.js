import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from './components/SearchBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: 20,
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
    <div>
     <SearchBar/>
    </div>
  );
}

export default MainPage;
