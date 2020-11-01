import * as React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

export interface Props extends TextProps {
  children?: string;
  style?: any;
  light?: boolean;
}

const H2 = (props: Props) => {
  const fontWeightStyle = props.light ? styles.light : styles.bold;

  return (
    <Text {...props} style={[styles.h2, fontWeightStyle, props.style]}>
      {props.children}
    </Text>
  );
};

export default H2;

const styles = StyleSheet.create({
  h2: {
    fontSize: 28,
  },
  bold: {
    fontWeight: "500",
  },
  light: {
    fontWeight: "300",
  },
});
