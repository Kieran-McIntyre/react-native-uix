import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { View, ActivityIndicator } from "react-native";
import { ListCell } from "../../molecules/ListCell";
import { ListCellActions } from "../../molecules/ListCellActions";
import { IListCellItem } from "../../../interfaces/IListCellItem";
import { usePrevious } from "../../../hooks/usePrevious";
import { SwipeListView } from "react-native-swipe-list-view";
import sizes from "../../../values/sizes";

import { InfiniteSwipeListViewProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const InfiniteSwipeListView: React.FC<InfiniteSwipeListViewProps> = ({
  items,
  onNewCount,
  initialCount,
  increment,
  actions,
  ...otherProps
}) => {
  const { styles, themeSet } = useStyle(dynamicStyles);
  const [hasFetchedAllItems, setFetchedAllItems] = useState(true);
  const prevItemCount = usePrevious(items.length);

  const startActions = useMemo(
    () => actions?.filter((action) => action.isStart) ?? [],
    [actions]
  );
  const endActions = useMemo(
    () => actions?.filter((action) => !action.isStart) ?? [],
    [actions]
  );
  const rightOpenValue = useMemo(
    () => -1 * sizes.listCellActionWidth * endActions.length,
    [endActions]
  );
  const leftOpenValue = useMemo(
    () => sizes.listCellActionWidth * startActions.length,
    [startActions]
  );

  useEffect(() => {
    setFetchedAllItems(prevItemCount === items.length);
  }, [items.length]);

  const onRenderItem = ({
    item,
    index,
  }: {
    item: IListCellItem;
    index: number;
  }) => {
    return <ListCell item={item} index={index} />;
  };

  const onEndReached = () => {
    if (onNewCount) {
      onNewCount(initialCount + increment);
    }
  };

  const LoadingFooter = () => {
    if (hasFetchedAllItems) {
      return null;
    }

    return (
      <View style={styles.loadingFooter}>
        <ActivityIndicator color={themeSet.textPrimary} />
      </View>
    );
  };

  const renderHiddenItem = ({ item }: { item: IListCellItem }) => {
    return <ListCellActions item={item} actions={actions ?? []} />;
  };

  const hasItems = items && items.length > 0;
  if (!hasItems) {
    return null;
  }

  return (
    <SwipeListView
      {...otherProps}
      style={styles.infiniteList}
      data={items}
      renderItem={onRenderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      ListFooterComponent={LoadingFooter}
      stopLeftSwipe={leftOpenValue * 1.5}
      stopRightSwipe={rightOpenValue * 1.5}
      leftOpenValue={leftOpenValue}
      rightOpenValue={rightOpenValue}
      disableRightSwipe={startActions.length === 0}
      disableLeftSwipe={endActions.length === 0}
      renderHiddenItem={actions && renderHiddenItem}
    />
  );
};
