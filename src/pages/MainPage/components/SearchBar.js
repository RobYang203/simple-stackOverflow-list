import {
  AppBar,
  Button,
  makeStyles,
  OutlinedInput,
  Toolbar,
} from '@material-ui/core';
import { getTagListAction } from 'actions/creators/tags';
import { throttle } from 'lodash';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

const SEARCH_BAR_RADIUS = 10;

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: SEARCH_BAR_RADIUS,
  },
  toolBar: {
    padding: 0,
    alignItems: 'stretch',
  },
  searchInput: {
    borderTopLeftRadius: SEARCH_BAR_RADIUS,
    borderBottomLeftRadius: SEARCH_BAR_RADIUS,
    background: '#fff',
  },
  searchButton: {
    padding: theme.spacing(0, 3),
    borderTopRightRadius: SEARCH_BAR_RADIUS,
    borderBottomRightRadius: SEARCH_BAR_RADIUS,
    textTransform: 'none',
  },
}));

function SearchBar() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const dispatchAction = useCallback(
    throttle(
      (searchValue) => {
        dispatch(getTagListAction({ inname: searchValue }));
      },
      100000,
      { trailing: true, leading: true }
    ),
    []
  );
  
  const onSearchChange = (e) => {
    const nextValue = e.target.value;
    setSearchValue(() => {
      dispatchAction(nextValue);
      return nextValue;
    });
  };

  return (
    <AppBar className={classes.root} position={'sticky'}>
      <Toolbar className={classes.toolBar} variant='dense'>
        <OutlinedInput
          value={searchValue}
          className={classes.searchInput}
          fullWidth
          variant='outlined'
          margin='dense'
          onChange={onSearchChange}
        />
        <Button className={classes.searchButton}>Search</Button>
      </Toolbar>
    </AppBar>
  );
}

SearchBar.propTypes = {};

export default SearchBar;
