import * as React from "react";
import { View, Text } from "react-native";
import { LayoutDetailSectionProps } from "./types"
import { styles } from "./styles"

export const LayoutDetailSection: React.FC<LayoutDetailSectionProps> = ({ children, style, title }) => {
  return (
    <View style={[styles.layoutDetailSection, style]}>
      {title && <Text style={styles.layoutDetailSectionTitle}>{title}</Text>}

      <View style={styles.layoutDetailSectionContent}>{children}</View>
    </View>
  );
};
