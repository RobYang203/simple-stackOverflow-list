import { makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import TagList from './components/TagList';
import QuestionItem from './components/QuestionItem';
import ListScrollWrapper from 'components/ListScrollWrapper';
import { useDispatch } from 'react-redux';
import { getQuestionListAction } from 'actions/creators/questions';

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
  if (index === 0) return <TagList style={style} />;

  return <QuestionItem style={style} />;
};

const fake = Array.from({ length: 20 });

function MainPage() {
  const classes = useStyles();
  const [items, setItems] = useState(fake);
  const [isLoading, setisLoading] = useState(false)
  const loadNextPage = (startIndex) => {
    setItems((items) => items.concat(Array.from({ length: 20 })));
    setisLoading(true)
  };
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getQuestionListAction({}))
  },[]);

  return (
    <Paper className={classes.root} variant='elevation' square>
      <SearchBar />
      <ListScrollWrapper
        items={items}
        hasMore={true}
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
