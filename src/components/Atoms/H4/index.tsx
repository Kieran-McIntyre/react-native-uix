import * as React from "react";
import { Text, StyleSheet, TextProps } from "react-native";
import colors from "../../../values/colors";

export interface Props extends TextProps {
  children?: string;
  style?: any;
}

const H4 = (props: Props) => (
  <Text {...props} style={[styles.h4, props.style]}>
    {props.children}
  </Text>
);

export default H4;

const styles = StyleSheet.create({
  h4: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.light.neutralDark,
  },
});
