import * as React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { InputSearch } from "../../molecules/InputSearch";
import { HeaderActions } from "../../molecules/HeaderActions";
import { useStyle } from "../../../hooks/useStyle";
import { SegmentedControl } from "../../atoms/SegmentedControl";

import { StaticHeaderCollapsedProps } from "./types";
import { dynamicStyles } from "./styles";

export const StaticHeaderCollapsed: React.FC<StaticHeaderCollapsedProps> = ({
  title,
  navigation,
  children,
  outerChildren,
  onSearch,
  segmentedControlOptions,
  onEdit,
  onAdd,
  moreOptions,
}) => {
  const { styles } = useStyle(dynamicStyles);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: styles.neutralLightest.backgroundColor,
        shadowColor: "transparent",
      },
      title,
      headerRight: () => (
        <HeaderActions
          onAdd={onAdd}
          onEdit={onEdit}
          moreOptions={moreOptions}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shouldRenderHeaderExtras = !!onSearch || !!segmentedControlOptions;

  return (
    <View style={styles.blendedHeader}>
      {shouldRenderHeaderExtras && (
        <View style={styles.headerExtras}>
          {onSearch && (
            <View style={styles.inputSearch}>
              <InputSearch placeholder={"Search"} onChangeText={onSearch} />
            </View>
          )}

          {segmentedControlOptions && (
            <SegmentedControl
              style={onSearch && styles.segmentedControlWithSearch}
              options={segmentedControlOptions}
            />
          )}
        </View>
      )}
    </View>
  );
};
