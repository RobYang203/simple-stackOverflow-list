import { makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TagList from './components/TagList';
import QuestionList from './components/QuestionList';
import { VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import QuestionItem from './components/QuestionList/components/QuestionItem';
import ListScrollWrapper from 'components/ListScrollWrapper';

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
    console.log(
      '🚀 ~ file: index.js ~ line 36 ~ loadNextPage ~ startIndex',
      startIndex
    );
    setItems((items) => items.concat(Array.from({ length: 20 })));
    setisLoading(true)
  };

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
