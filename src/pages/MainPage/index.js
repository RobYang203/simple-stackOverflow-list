import { makeStyles, Paper } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import SearchBar from './components/SearchBar';
import ListScrollWrapper from 'components/ListScrollWrapper';
import { useGetQuestions, useTrackTags } from 'hooks';
import ItemsCreator from './components/ItemsCreator';

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

const getTagged = (tags) => {
  return tags.join(';');
};

function MainPage() {
  const classes = useStyles();
  const [selectedTags, setSelectedTags] = useState([]);
  const [page, setPage] = useState(0);

  const { items, getNextQuestions, initialQuestions, ...other } =
    useGetQuestions();

  useTrackTags(
    useCallback((tag) => {
      setSelectedTags([tag]);
      setPage(1);
      
      initialQuestions({
        tagged: tag,
        page: 1,
      });

    }, [])
  );

  const loadNextPage = (startIndex) => {
    if (startIndex !== 1) {
      const nextPage = page + 1;
      setPage(nextPage);

      getNextQuestions({
        tagged: getTagged(selectedTags),
        page: nextPage,
      });


    }
  };

  const onSelectedTagListChange = (tags) => {
    setSelectedTags(tags);
    setPage(1);

    initialQuestions({
      tagged: getTagged(tags),
      page: 1,
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
