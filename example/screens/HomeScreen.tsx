import React from "react";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  LayoutTopLevelScreen,
  GroupedTable,
  IGroupedTableItem,
  Avatar,
} from "../rnui/index";
import {
  faBuilding,
  faUtensils,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

import { SectionUpNext } from "../components/UpNext";
import { useStyle } from "../rnui/hooks/useStyle";

const HomeScreen = ({ navigation }) => {
  const { themeSet } = useStyle();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Avatar
            backgroundColor={"red"}
            firstName={"James"}
            lastName={"Smith"}
            style={styles.avatar}
          />
        );
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items: IGroupedTableItem[] = [
    {
      id: 0,
      label: "Hotels",
      count: 2,
      iconBackgroundColor: themeSet.red,
      icon: faBuilding,
      onPress: () => {
        navigation.navigate("Detail");
      },
    },
    {
      id: 1,
      label: "Restaraunts",
      count: 2,
      iconBackgroundColor: themeSet.teal,
      icon: faUtensils,
      onPress: () => {
        navigation.navigate("List");
      },
    },
    {
      id: 2,
      label: "Universities",
      count: 3,
      iconBackgroundColor: themeSet.yellow,
      icon: faUniversity,
      onPress: () => {},
    },
  ];

  return (
    <LayoutTopLevelScreen
      title="Home"
      navigation={navigation}
      onSearch={() => {}}
      onAdd={() => {}}
      segmentedControlOptions={[
        {
          id: 1,
          label: "Test",
          onPress: () => {}
        },
        {
          id: 2,
          label: "Test",
          onPress: () => {}
        },
      ]}
      moreOptions={[
        {label: "Label"}
      ]}
    >
      <SectionUpNext navigation={navigation} />
      <GroupedTable title="Places" items={items} />
    </LayoutTopLevelScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 20,
  },
});
