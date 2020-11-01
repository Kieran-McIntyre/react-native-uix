import * as React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface Props {
  icon: IconProp;
  backgroundColor: string;
}

const DisclosureIcon = ({ icon, backgroundColor }: Props) => {
  return (
    <View style={[styles.icon, { backgroundColor }]}>
      <FontAwesomeIcon icon={icon} color="white" />
    </View>
  );
};

export default DisclosureIcon;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
