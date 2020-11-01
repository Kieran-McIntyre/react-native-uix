import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import H3 from "../../Atoms/H3";

import sizes from "../../../values/sizes";

export interface Props {
  children?: any;
  title?: string;
  emptyStateMessage?: string;
  shouldShowEmptyState?: boolean;
  style?: any;
}

const Section = ({
  children,
  title,
  emptyStateMessage,
  shouldShowEmptyState,
  style,
}: Props) => {
  const shouldRenderEmptyState = !!emptyStateMessage && shouldShowEmptyState;

  return (
    <View style={[styles.container, style]}>
      {!!title && <H3 style={styles.title}>{title}</H3>}

      {!shouldRenderEmptyState && (
        <View style={styles.section}>{children}</View>
      )}

      {shouldRenderEmptyState && (
        <View style={[styles.section, styles.emptyStateSection]}>
          <Text style={styles.message}>{emptyStateMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: sizes.spacing.md,
  },
  title: {
    marginBottom: sizes.spacing.sm,
  },
  section: {
    backgroundColor: "white",
    borderRadius: sizes.spacing.sm,
    overflow: "hidden",
  },
  emptyStateSection: {
    padding: 20,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
  },
});
