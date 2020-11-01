import * as React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import ListCell from "../../Molecules/ListCell";
import ListCellActions from "../../Molecules/ListCellActions";
import IListCellItem from "../../../interfaces/IListCellItem";
import IListCellItemAction from "../../../interfaces/IListCellItemAction";
import colors from "../../../values/colors";
import usePrevious from "../../../hooks/usePrevious";
import { SwipeListView } from "react-native-swipe-list-view";
import sizes from "../../../values/sizes";

export interface Props {
  items: IListCellItem[];
  initialCount: number;
  increment: number;
  onNewCount: any;
  actions?: IListCellItemAction[];
}

const InfiniteList = ({
  items,
  onNewCount,
  initialCount,
  increment,
  actions,
}: Props) => {
  const hasItems = items && items.length > 0;

  const [hasFetchedAllItems, setFetchedAllItems] = useState(true);
  const prevItemCount = usePrevious(items.length);

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
    if (hasFetchedAllItems) return null;

    return (
      <View style={styles.loadingFooter}>
        <ActivityIndicator color={"blue"} />
      </View>
    );
  };

  const renderHiddenItem = ({ item }: { item: IListCellItem }) => {
    return <ListCellActions item={item} actions={actions ?? []} />;
  };

  if (!hasItems) {
    return null;
  }

  const startActions = actions?.filter((action) => action.isStart) ?? [];
  const endActions = actions?.filter((action) => !action.isStart) ?? [];

  const rightOpenValue = -1 * sizes.listCellActionWidth * endActions.length;
  const leftOpenValue = sizes.listCellActionWidth * startActions.length;

  return (
    <SwipeListView
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

export default InfiniteList;

const styles = StyleSheet.create({
  infiniteList: {
    backgroundColor: "white",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light.neutral,
  },

  loadingFooter: {
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
