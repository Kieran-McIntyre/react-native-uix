import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  SectionList,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import InputSearch from "../../Molecules/InputSearch";
import Screen from "../../Atoms/Screen";
import H1 from "../../Atoms/H1";
import AnimatedHeaderTitle from "../../Atoms/AnimatedHeaderTitle";
import HeaderActions from "../../Molecules/HeaderActions";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";
import SegmentedControl from "../../Atoms/SegmentedControl";
import ISegmentedControlOption from "../../../interfaces/ISegmentedControlOption";
import IHeaderActionsMoreOptions from "../../../interfaces/IHeaderActionsMoreOptions";

export interface Props {
  title: string;
  navigation: any;
  children?: any;
  outerChildren?: any;
  onSearch?: any;
  segmentedControlOptions?: ISegmentedControlOption[];
  onEdit?: any;
  onAdd?: any;
  moreOptions?: IHeaderActionsMoreOptions[];
}

const themedStyles = styleSheetFactory((theme: any) => ({
  blendedHeader: {
    backgroundColor: theme.neutralLight,
    paddingHorizontal: 20,
  },
  headerExtras: {
    backgroundColor: theme.neutralLight,
    paddingVertical: 10,
  },
  inputSearch: {
    paddingBottom: 10,
  },
  segmentedControlWithSearch: {
    marginTop: 15,
  },
  neutralLight: {
    backgroundColor: theme.neutralLight,
  },
}));

const StaticHeader = ({
  title,
  navigation,
  children,
  outerChildren,
  onSearch,
  segmentedControlOptions,
  onEdit,
  onAdd,
  moreOptions,
}: Props) => {
  const [styles]: any = useTheme(themedStyles);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default StaticHeader;
