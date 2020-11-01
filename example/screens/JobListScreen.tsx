import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { LayoutTopLevelScreen, InfiniteList } from "../rnui";

const JobListScreen = ({ navigation }) => {
  return (
    <LayoutTopLevelScreen title="Jobs" navigation={navigation}>
      <InfiniteList />
    </LayoutTopLevelScreen>
  );
};

export default JobListScreen;
