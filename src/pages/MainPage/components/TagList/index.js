import React from 'react';
import PropTypes from 'prop-types';
import TagButton from './TagButton';
import { FormGroup, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root:{
      width: '100%',
      overflow:'auto',
      padding: theme.spacing(1 ,0.5)
    },
    group: {
      flexWrap: 'nowrap',
      padding:theme.spacing(1 , 2),
      '& > *':{
        marginRight: theme.spacing(3)
      }
    },
  };
});

function TagList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Typography variant='h4'>Trending</Typography>
      <FormGroup className={classes.group} row>
        <TagButton label='javascript' />
        <TagButton label='C#' />
      </FormGroup>
    </div>
  );
}

TagList.propTypes = {};

export default TagList;
