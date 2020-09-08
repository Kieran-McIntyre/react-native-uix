import * as React from "react";
import { Text, StyleSheet } from "react-native";

const H2 = ({ children, style }: { children?: string; style?: any }) => (
  <Text style={[styles.h2, style]}>{children}</Text>
);

export default H2;

const styles = StyleSheet.create({
  h2: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
