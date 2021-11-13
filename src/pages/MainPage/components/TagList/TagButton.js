import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      margin: theme.spacing(1),
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 10,
      userSelect: 'none',
    },
    label: {
      padding : 10
    },
    hideCheckBox: {
      display: 'none',
      '&.Mui-checked + *':{
        background: theme.palette.primary.main,
      }
    },
  };
});

function TagButton(props) {
  const classes = useStyles();
  return (
    <FormControlLabel
      {...props}
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      control={<Checkbox className={classes.hideCheckBox} />}
    />
  );
}

TagButton.propTypes = {};

export default TagButton;
