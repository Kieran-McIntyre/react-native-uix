import * as React from "react";
import { useState, useEffect } from "react";
import { View, ActivityIndicator, FlatList } from "react-native";
import { usePrevious } from "../../../hooks/usePrevious";
import { InfiniteFlatListProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const InfiniteFlatList: React.FC<InfiniteFlatListProps> = ({
  data,
  onNewCount,
  initialCount,
  increment,
  ...otherProps
}) => {
  const { styles, themeSet } = useStyle(dynamicStyles);
  const [hasFetchedAllItems, setFetchedAllItems] = useState(true);
  const prevItemCount = usePrevious(data?.length ?? 0);

  useEffect(() => {
    setFetchedAllItems(prevItemCount === data?.length);
  }, [data?.length]);

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
      <View 
        style={styles.loadingFooter}
        testID="infiniteFlatList__loading"
      >
        <ActivityIndicator color={themeSet.textPrimary} />
      </View>
    );
  };

  if (!data?.length) return null;

  return (
    <FlatList
      {...otherProps}
      data={data}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      ListFooterComponent={LoadingFooter}
      testID="infiniteFlatList"
    />
  );
};
