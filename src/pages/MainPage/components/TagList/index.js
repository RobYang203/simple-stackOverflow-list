import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TagButton from './TagButton';
import { FormGroup, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {  initialGetQuestionListAction } from 'actions/creators/questions';
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

const insertTag = (name) => (tags) => {
  return tags.concat(name);
};

const removeTag = (name) => (tags) => {
  return tags.filter((tag) => tag !== name);
};

function TagList({ style }) {
  const classes = useStyles();
  const { items: tags } = useSelector(({ tags }) => {
    return tags;
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch();

  const getQuestionsByTag = (tags) => {
    dispatch(
      initialGetQuestionListAction({
        tagged: tags.join(';'),
        page: 1,
      })
    );

    return tags;
  };

  const isTagInclude = useCallback(
    (name) => {
      return selectedTags.includes(name);
    },
    [selectedTags]
  );

  const onTagChange = (e) => {
    const selected = e.target.value;
    if (!isTagInclude(selected)) {
      setSelectedTags(insertTag(selected));
    } else {
      setSelectedTags(removeTag(selected));
    }

    setSelectedTags(getQuestionsByTag);
  };

  useEffect(() => {
    if (tags.length === 0) {
      dispatch(getTagListAction({}));
    } else if (selectedTags.length === 0 && tags.length !== 0) {
      setSelectedTags(insertTag(tags[0].name));
      getQuestionsByTag([tags[0].name]);
    }
  }, [tags, selectedTags]);

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
