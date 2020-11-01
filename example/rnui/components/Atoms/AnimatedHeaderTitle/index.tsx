import * as React from "react";
import { StyleSheet, Animated } from "react-native";

export interface Props {
  title: string;
  style: any;
}

const AnimatedHeaderTitle = ({ title, style }: Props) => {
  return <Animated.Text style={[styles.title, style]}>{title}</Animated.Text>;
};

export default AnimatedHeaderTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
