import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  SectionList,
  View,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
  StyleSheet,
} from "react-native";
import InputSearch from "../../Molecules/InputSearch";
import Screen from "../../Atoms/Screen";
import H2 from "../../Atoms/H2";
import AnimatedHeaderTitle from "../../Atoms/AnimatedHeaderTitle";
import HeaderActions from "../../Molecules/HeaderActions";
import { useTheme } from "react-native-themed-styles";
import { styleSheetFactory } from "../../../utils/themes";
import SegmentedControl from "../../Atoms/SegmentedControl";
import ISegmentedControlOption from "../../../interfaces/ISegmentedControlOption";
import IHeaderActionsMoreOptions from "../../../interfaces/IHeaderActionsMoreOptions";
import IDetailMeta from "../../../interfaces/IDetailMeta";
import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";
import colors from "../../../values/colors";
import H4 from "../../Atoms/H4";
import DetailMeta from "../../Molecules/DetailMeta";
import TableRow from "../../Molecules/TableRow";
import { ScrollView } from "react-native-gesture-handler";
import ButtonPrimary from "../../Atoms/ButtonPrimary";
import Row from "../../Atoms/Row";

export interface Props {
  navigation: any;
  children?: any;
  onEdit?: any;
  onAdd?: any;
  moreOptions?: IHeaderActionsMoreOptions[];

  caption?: string;
  title: string;
  meta?: IDetailMeta[];
  tableItems?: IGroupedTableItem[];
}

const LayoutDetailScreen = ({
  navigation,
  children,
  caption,
  title,
  onEdit,
  onAdd,
  meta,
  moreOptions,
  tableItems = [],
}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      backgroundColor: "red",
      shadowColor: "transparent",
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

  const getFilteredMeta = () => {
    if (!meta) return [];
    return meta.filter((item) => !!item.label);
  };

  const filteredMeta = getFilteredMeta();
  const hasMeta = filteredMeta.length > 0;

  const hasTableItems = !!tableItems && tableItems.length > 0;

  return (
    <Screen>
      <ScrollView>
        <View>
          <View style={[styles.container, styles.topContainer]}>
            <H4 style={styles.titleCaption}>{caption}</H4>
            <H2 numberOfLines={2} ellipsizeMode="middle">
              {title}
            </H2>

            {hasMeta && (
              <View style={styles.metaContainer}>
                {filteredMeta.map((item, i) => (
                  <DetailMeta key={item.id} meta={item} index={i} />
                ))}
              </View>
            )}

            <Row style={styles.actionsContainer}>
              <ButtonPrimary label={"Log Time"} index={0} numberOfButtons={2} />
              <ButtonPrimary
                label={"Mark Complete"}
                index={1}
                numberOfButtons={2}
              />
            </Row>
          </View>

          {hasTableItems && (
            <View style={[styles.container]}>
              {tableItems.map((item, index) => (
                <TableRow key={item.id} item={item} index={index} />
              ))}
            </View>
          )}
        </View>

        {children}
      </ScrollView>
    </Screen>
  );
};

export default LayoutDetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.light.neutral,
  },

  topContainer: {
    paddingTop: 16,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  actionsContainer: {
    marginTop: 20,
  },

  titleCaption: {
    marginBottom: 10,
  },

  metaContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
