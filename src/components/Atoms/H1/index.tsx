import * as React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

export interface Props extends TextProps {
  children?: string;
}

const H1 = (props: Props) => (
  <Text {...props} style={[styles.h1, props.style]}>
    {props.children}
  </Text>
);

export default H1;

const styles = StyleSheet.create({
  h1: {
    fontSize: 34,
    fontWeight: "bold",
  },
});
