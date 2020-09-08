import * as React from "react";
import { View, StyleSheet } from "react-native";
import H2 from "../../Atoms/H2";

import sizes from "../../../values/sizes";

export interface Props {
  children?: any;
  title: string;
}

const Section = ({ children, title }: Props) => (
  <View style={styles.container}>
    <H2 style={styles.title}>{title}</H2>

    <View style={styles.section}>{children}</View>
  </View>
);

export default Section;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor: "orange",
    padding: sizes.spacing.md,
  },
  title: {
    marginBottom: sizes.spacing.sm,
  },
  section: {
    backgroundColor: "white",
    borderRadius: sizes.spacing.sm,
  },
});
