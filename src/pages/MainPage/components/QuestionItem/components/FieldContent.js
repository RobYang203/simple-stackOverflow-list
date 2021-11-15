import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 1),
      },
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 4),
      },
    },
    text: {
      color: '#CD292B',
    },
    outline: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#547D52',
      color: '#547D52',
    },
    contented: {
      background: '#377E22',
      color: '#fff',
    },
  };
});

function FieldContent({ value, highlightType }) {
  const classes = useStyles();

  return (
    <Typography
      className={classNames(classes.root, classes[highlightType])}
      color='textPrimary'
      component='span'
      variant='h6'>
      {value}
    </Typography>
  );
}

FieldContent.propTypes = {};

export default FieldContent;
