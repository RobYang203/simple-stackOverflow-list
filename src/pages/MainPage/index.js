import { makeStyles, Paper } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import TagList from './components/TagList';
import QuestionItem from './components/QuestionItem';
import ListScrollWrapper from 'components/ListScrollWrapper';
import { useDispatch, useSelector } from 'react-redux';
import {
  getQuestionListAction,
  initialGetQuestionListAction,
} from 'actions/creators/questions';
import types from 'actions/types';
import { getTagListAction } from 'actions/creators/tags';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    padding: theme.spacing(1, 0),
    overflow: 'auto',
    position: 'relative',
  },
}));

const getItemSize = (index) => {
  return index > 0 ? 160 : 121;
};

const ItemsCreator = ({ index, style, data }) => {
  if (index === 0) return <TagList style={style} {...data[0]} />;

  return <QuestionItem style={style} {...data[index]} />;
};

const useTrackTags = (callback) => {
  const tags = useSelector(({ tags }) => tags);
  const dispatch = useDispatch();

  useEffect(() => {
    if (tags.items.length !== 0) {
      callback(tags.items[0].name);
    } else {
      dispatch(getTagListAction({}));
    }
  }, [tags]);
};

const useGetQuestions = () => {
  const dispatch = useDispatch();
  const questions = useSelector(({ questions, setting }) => {
    return {
      ...questions,
      isLoading: Boolean(setting.fetchingTypes[types.GET_QUESTION_LIST]),
    };
  });

  const initialQuestions = useCallback((payload) => {
    dispatch(
      initialGetQuestionListAction({
        ...payload,
        page: 1,
      })
    );
  }, []);

  const getNextQuestions = useCallback((payload) => {
    dispatch(
      getQuestionListAction({
        ...payload,
      })
    );
  }, []);

  return {
    ...questions,
    initialQuestions,
    getNextQuestions,
  };
};

const getTagged = (tags) => {
  return tags.join(';');
};

function MainPage() {
  const classes = useStyles();
  const [selectedTags, setSelectedTags] = useState([]);
  const [page, setPage] = useState(0);

  const { items, getNextQuestions, initialQuestions, ...other } =
    useGetQuestions();

  useTrackTags((tag) => {
    setSelectedTags([tag]);
    setPage(() => {
      initialQuestions({
        tagged: tag,
        page: 1,
      });

      return 1;
    });
  });

  const loadNextPage = (startIndex) => {
    if (startIndex !== 1)
      setPage((page) => {
        const nextPage = page + 1;
        getNextQuestions({
          tagged: getTagged(selectedTags),
          page: nextPage,
        });

        return nextPage;
      });
  };

  const onSelectedTagListChange = (tags) => {
    setSelectedTags(tags);
    setPage(() => {
      initialQuestions({
        tagged: getTagged(tags),
        page: 1,
      });

      return 1;
    });
  };

  return (
    <Paper className={classes.root} variant='elevation' square>
      <SearchBar />
      <ListScrollWrapper
        {...other}
        items={[{ selectedTags, onSelectedTagListChange }, ...items]}
        loadNextPage={loadNextPage}
        ItemsCreator={ItemsCreator}
        getItemSize={getItemSize}
        height={window.innerHeight - 50}
      />
    </Paper>
  );
}

export default MainPage;
