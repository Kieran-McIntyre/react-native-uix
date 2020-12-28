import * as React from "react";
import { View, Text } from "react-native";
import { Label } from "../../atoms/Label";
import { SectionProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  emptyStateMessage,
  shouldShowEmptyState,
  style,
  ...otherProps
}) => {
  const shouldRenderEmptyState = !!emptyStateMessage && shouldShowEmptyState;
  const { styles } = useStyle(dynamicStyles);

  return (
    <View {...otherProps} style={[styles.container, style]}>
      {!!title && (
        <Label md style={styles.title}>
          {title}
        </Label>
      )}

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
