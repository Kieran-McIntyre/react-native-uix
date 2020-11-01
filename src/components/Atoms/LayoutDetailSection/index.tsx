import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../../../values/colors";

export interface Props {
  title?: string;
  style?: any;
  children?: any;
}

const LayoutDetailSection = ({ children, style, title }: Props) => {
  return (
    <View style={[styles.layoutDetailSection, style]}>
      {title && <Text style={styles.layoutDetailSectionTitle}>{title}</Text>}
      <View style={styles.layoutDetailSectionContent}>{children}</View>
    </View>
  );
};

export default LayoutDetailSection;

const styles = StyleSheet.create({
  layoutDetailSection: {
    marginTop: 20,
  },

  layoutDetailSectionTitle: {
    textTransform: "uppercase",
    marginBottom: 6,
    marginTop: 10,
    marginLeft: 20,
    color: colors.light.neutralDark,
    fontSize: 12,
    letterSpacing: 0.5,
  },

  layoutDetailSectionContent: {
    backgroundColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.light.neutral,
    padding: 20,
  },
});
