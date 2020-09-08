import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import LayoutTopLevelScreen from "../src/components/Atoms/LayoutTopLevelScreen";
// import Avatar from "../src/components/Atoms/Avatar";
// import GroupedTable from "../src/components/Organisms/GroupedTable";

import { Avatar } from "react-native-ios-ui";

const HomeScreen = ({ navigation }) => {
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

  return (
    <LayoutTopLevelScreen title="Home 5" navigation={navigation}>
      {/* <Pop url={"https://avatars2.githubusercontent.com/u/25485732?s=60&v=4"} /> */}
      {/* <GroupedTable /> */}
    </LayoutTopLevelScreen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 20,
  },
});
