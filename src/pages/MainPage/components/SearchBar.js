import {
  AppBar,
  Button,
  makeStyles,
  OutlinedInput,
  Toolbar,
} from '@material-ui/core';
import React from 'react';

const SEARCH_BAR_RADIUS = 10;

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: SEARCH_BAR_RADIUS,
  },
  toolBar:{
    padding: 0,
    alignItems: 'stretch',
  },
  searchInput: {
    borderTopLeftRadius: SEARCH_BAR_RADIUS,
    borderBottomLeftRadius: SEARCH_BAR_RADIUS,
    background: '#fff',
  },
  searchButton: {
    padding: theme.spacing(0 , 3),
    borderTopRightRadius: SEARCH_BAR_RADIUS,
    borderBottomRightRadius: SEARCH_BAR_RADIUS,
    textTransform: 'none'
  },
}));

function SearchBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position={'sticky'}>
      <Toolbar className={classes.toolBar} variant='dense'>
        <OutlinedInput
          className={classes.searchInput}
          fullWidth
          variant='outlined'
          margin='dense'
        />
        <Button className={classes.searchButton} >
          Search
        </Button>
      </Toolbar>
    </AppBar>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
