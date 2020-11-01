import * as React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

export interface Props extends TextProps {
  children?: string;
  style?: any;
}

const H3 = (props: Props) => (
  <Text {...props} style={[styles.h3, props.style]}>
    {props.children}
  </Text>
);

export default H3;

const styles = StyleSheet.create({
  h3: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
