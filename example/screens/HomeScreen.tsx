import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Section,
  Avatar,
  LayoutTopLevelScreen,
  GroupedTable,
  IGroupedTableItem,
  ISegmentedControlOption,
  IHeaderActionsMoreOptions,
} from "../rnui";

const HomeScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   backgroundColor: colors.light.neutralLight,
      //   borderBottomColor: colors.light.neutralLight,
      //   shadowColor: "transparent",
      // },
      headerLeft: () => (
        <Avatar
          url={"https://avatars2.githubusercontent.com/u/25485732?s=60&v=4"}
          style={styles.avatar}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNavToCategory = (category: string) => {
    // console.warn(category);
    navigation.navigate("JobList");
  };

  const jobCategories: IGroupedTableItem[] = [
    {
      id: 0,
      label: "Enquiry",
      icon: "folder",
      iconBackgroundColor: "#FB8532",
      onPress: () => onNavToCategory("enquiry"),
    },
    {
      id: 1,
      label: "Ongoing",
      icon: "folder",
      iconBackgroundColor: "#2188FF",
      onPress: () => onNavToCategory("ongoing"),
    },
    {
      id: 2,
      label: "Completed",
      icon: "folder",
      iconBackgroundColor: "#34D058",
      onPress: () => onNavToCategory("completed"),
    },
    {
      id: 3,
      label: "Paid",
      icon: "folder",
      iconBackgroundColor: "#8A63D2",
      onPress: () => onNavToCategory("paid"),
    },
    {
      id: 4,
      label: "Invoiced",
      icon: "folder",
      iconBackgroundColor: "#09ADA0",
      onPress: () => onNavToCategory("invoiced"),
    },
  ];

  const segmentedControlOptions: ISegmentedControlOption[] = [
    {
      id: 0,
      label: "Label A",
      onPress: () => {
        console.warn("A");
      },
    },
    {
      id: 1,
      label: "Label B",
      onPress: () => {
        console.warn("B");
      },
    },
    {
      id: 2,
      label: "Label C",
      onPress: () => {
        console.warn("C");
      },
    },
  ];

  const moreOptions: IHeaderActionsMoreOptions[] = [
    {
      label: "Option 1",
      onPress: () => {
        console.warn("option 1");
      },
    },
    {
      label: "Option 2",
      onPress: () => {},
    },
  ];

  return (
    <LayoutTopLevelScreen
      title="Home"
      navigation={navigation}
      onSearch={setSearchValue}
      segmentedControlOptions={segmentedControlOptions}
      moreOptions={moreOptions}
      onAdd={() => {}}
    >
      <Section title={"Up Next"}>
        <Text>{searchValue}</Text>
      </Section>

      <GroupedTable items={jobCategories} />
    </LayoutTopLevelScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 20,
  },
});
