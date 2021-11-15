import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TagButton from './TagButton';
import { FormGroup, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { initialGetQuestionListAction } from 'actions/creators/questions';
import { getTagListAction } from 'actions/creators/tags';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '100%',
      overflow: 'auto',
      padding: theme.spacing(1, 0.5),
    },
    group: {
      flexWrap: 'nowrap',
      padding: theme.spacing(1, 2),
      '& > *': {
        marginRight: theme.spacing(3),
      },
    },
  };
});

const insertTag = (tags, name) => {
  return tags.concat(name);
};

const removeTag = (tags, name) => {
  return tags.filter((tag) => tag !== name);
};

function TagList({ selectedTags, onSelectedTagListChange, style }) {
  const classes = useStyles();
  const { items: tags } = useSelector(({ tags }) => {
    return tags;
  });

  const dispatch = useDispatch();

  const isTagInclude = useCallback(
    (name) => {
      return selectedTags.includes(name);
    },
    [selectedTags]
  );

  const onTagChange = (e) => {
    const selected = e.target.value;

    let nextSelectedTags = null;
    if (!isTagInclude(selected)) {
      nextSelectedTags = insertTag(selectedTags, selected);
    } else {
      nextSelectedTags = removeTag(selectedTags, selected);
    }

    onSelectedTagListChange(nextSelectedTags);
  };

  useEffect(() => {
    if (tags.length === 0) {
      dispatch(getTagListAction({}));
    }
  }, [tags]);

  return (
    <div className={classes.root} style={style}>
      <Typography variant='h4'>Trending</Typography>
      <FormGroup className={classes.group} onChange={onTagChange} row>
        {tags.map(({ name }) => {
          return (
            <TagButton
              key={`tag-${name}`}
              label={name}
              value={name}
              checked={isTagInclude(name)}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}

TagList.propTypes = {};

export default TagList;
