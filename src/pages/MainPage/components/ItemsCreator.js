import React from 'react'
import TagList from './TagList';
import QuestionItem from './QuestionItem';

function ItemsCreator({ index, style, data }) {
  if (index === 0) return <TagList style={style} {...data[0]} />;

  return <QuestionItem style={style} {...data[index]} />;
}

ItemsCreator.propTypes = {

}

export default ItemsCreator

