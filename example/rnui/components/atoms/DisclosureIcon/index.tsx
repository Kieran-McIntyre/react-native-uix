import * as React from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DisclosureIconProps } from "./types";
import { styles } from "./styles";

export const DisclosureIcon: React.FC<DisclosureIconProps> = ({
  icon,
  backgroundColor,
}) => {
  return (
    <View style={[styles.icon, { backgroundColor }]}>
      <FontAwesomeIcon icon={icon} color="white" />
    </View>
  );
};
