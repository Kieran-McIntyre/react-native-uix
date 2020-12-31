import React from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import {
  LayoutTopLevelScreen,
  GroupedTable,
  IGroupedTableItem,
  Avatar,
} from "react-native-ios-ui";
import {
  faBuilding,
  faUtensils,
  faUniversity,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { SectionUpNext } from "../components/UpNext";
// import { InputSearch } from "../components/InputSearch";
import { useStyle } from "react-native-ios-ui";

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
      {/* <View style={{ paddingHorizontal: 20 }}>
        <InputSearch />
      </View> */}
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
