import * as React from "react";
import { View } from "react-native";
import { LayoutDetailSectionProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";
import { Label } from "../Label";

export const LayoutDetailSection: React.FC<LayoutDetailSectionProps> = ({
  children,
  style,
  title,
}) => {
  const { styles } = useStyle(dynamicStyles);

  return (
    <View style={[styles.layoutDetailSection, style]}>
      {title && (
        <Label secondary style={styles.layoutDetailSectionTitle}>
          {title}
        </Label>
      )}

      <View style={styles.layoutDetailSectionContent}>{children}</View>
    </View>
  );
};
