import React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  LayoutTopLevelScreen,
  GroupedTable,
  IGroupedTableItem,
  Avatar,
  useStyle
} from "react-native-ios-ui";
import {
  faBuilding,
  faUtensils,
  faUniversity,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const HomeScreen = ({ navigation }) => {
  const { themeSet } = useStyle();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Avatar
            firstName={"James"}
            lastName={"Smith"}
            style={styles.avatar}
          />
        );
      },
    });
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
    {
      id: 3,
      label: "Gardens",
      count: 0,
      iconBackgroundColor: themeSet.green,
      icon: faLeaf,
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
          onPress: () => {},
        },
        {
          id: 2,
          label: "Test",
          onPress: () => {},
        },
      ]}
      moreOptions={[{ label: "Label" }]}
    >
      <GroupedTable
        title="Places" 
        items={items} 
      />
    </LayoutTopLevelScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 20,
  },
});
