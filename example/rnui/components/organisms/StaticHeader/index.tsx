import * as React from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { InputSearch } from "../../molecules/InputSearch";
import { H1 } from "../../atoms/H1";
import { HeaderActions } from "../../molecules/HeaderActions";
import { useStyle } from "../../../hooks/useStyle";
import { SegmentedControl } from "../../atoms/SegmentedControl";

import { StaticHeaderProps } from "./types";
import { dynamicStyles } from "./styles";

export const StaticHeader: React.FC<StaticHeaderProps> = ({
  title,
  navigation,
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
        backgroundColor: styles.neutralLight.backgroundColor,
        shadowColor: "transparent",
      },
      title: "",
      headerRight: () => (
        <HeaderActions
          onAdd={onAdd}
          onEdit={onEdit}
          moreOptions={moreOptions}
        />
      ),
    });
  }, []);

  const shouldRenderHeaderExtras = !!onSearch || !!segmentedControlOptions;

  return (
    <View style={styles.blendedHeader}>
      <H1>{title}</H1>

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
