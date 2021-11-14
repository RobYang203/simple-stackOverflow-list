import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import TagList from './components/TagList';
import QuestionItem from './components/QuestionItem';
import ListScrollWrapper from 'components/ListScrollWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionListAction } from 'actions/creators/questions';
import types from 'actions/types';
import { getTagListAction } from 'actions/creators/tags';
import { useLocation } from 'react-router';

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
  if (index === 0) return <TagList style={style} tags={data[0]} />;

  return <QuestionItem style={style} {...data[index]} />;
};

const useGetQuestions = (dispatch) => {
  const [page, setPage] = useState(0);
  const questionsInfo = useSelector(({ questions, setting }) => {
    return {
      ...questions,
      isLoading: Boolean(setting.fetchingTypes[types.GET_QUESTION_LIST]),
    };
  });

  const getNextQuestions = (payload) => {
    setPage((page) => {
      const nextPage = page + 1;
      dispatch(
        getQuestionListAction({
          ...payload,
          page: nextPage,
        })
      );
      return nextPage;
    });
  };

  return { ...questionsInfo, page, getNextQuestions };
};

function MainPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const { items, hasMore, isLoading, getNextQuestions } =
    useGetQuestions(dispatch);

  const loadNextPage = (startIndex) => {
    if (startIndex !== 1) getNextQuestions();
  };

  return (
    <Paper className={classes.root} variant='elevation' square>
      <SearchBar />
      <ListScrollWrapper
        items={[null, ...items]}
        hasMore={hasMore}
        isLoading={isLoading}
        loadNextPage={loadNextPage}
        ItemsCreator={ItemsCreator}
        getItemSize={getItemSize}
        height={window.innerHeight - 50}
      />
    </Paper>
  );
}

export default MainPage;
