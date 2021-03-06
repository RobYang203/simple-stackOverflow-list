import React from 'react';
import PropTypes from 'prop-types';
import { VariableSizeList } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

function ListScrollWrapper({
  items,
  height,
  isLoading,
  getItemSize,
  loadNextPage,
  ItemsCreator,
  hasMore,
}) {
  const isItemLoaded = (index) => index < items.length;
  const loadMore = isLoading ? () => {} : loadNextPage;
  const itemCount = hasMore ? items.length + 1 : items.length;
  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMore}>
      {({ onItemsRendered, ref }) => {
        return (
          <VariableSizeList
            ref={ref}
            height={height}
            itemData={items}
            itemCount={itemCount}
            itemSize={getItemSize}
            onItemsRendered={onItemsRendered}>
            {ItemsCreator}
          </VariableSizeList>
        );
      }}
    </InfiniteLoader>
  );
}

ListScrollWrapper.propTypes = {
  items: PropTypes.array.isRequired,
  height:PropTypes.number.isRequired ,
  isLoading:PropTypes.bool.isRequired ,
  getItemSize:PropTypes.func.isRequired ,
  loadNextPage:PropTypes.func.isRequired ,
  ItemsCreator:PropTypes.func.isRequired ,
  hasMore:PropTypes.bool.isRequired ,
};

export default ListScrollWrapper;
