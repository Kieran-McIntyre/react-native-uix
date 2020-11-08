import React from "react";
import { Text, View } from "react-native";
import { LayoutTopLevelScreen } from "react-native-ios-ui";

const HomeScreen = ({ navigation }) => {
  return <LayoutTopLevelScreen title="Title" navigation={navigation} />;
};

export default HomeScreen;
