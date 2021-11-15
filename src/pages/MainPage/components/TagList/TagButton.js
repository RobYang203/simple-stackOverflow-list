import React from 'react';
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
      borderStyle: 'solid',
      borderRadius: 10,
      userSelect: 'none',
      whiteSpace: 'nowrap',
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
