import * as React from "react";
import { View, Text } from "react-native";
import { H3 } from "../../Atoms/H3";
import { SectionProps } from "./types"
import { styles } from "./styles"

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  emptyStateMessage,
  shouldShowEmptyState,
  style,
}) => {
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