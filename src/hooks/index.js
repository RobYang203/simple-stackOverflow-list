
import { getQuestionListAction, initialGetQuestionListAction } from 'actions/creators/questions';
import { getTagListAction } from 'actions/creators/tags'
import types from 'actions/types';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useTrackTags = (callback) => {
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

export const useGetQuestions = () => {
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
