import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../values/colors";

export interface Props {
  label: string;
  numberOfButtons?: number;
  index?: number;
}

const BUTTON_SPACING = 16;

const ButtonPrimary = ({ label, numberOfButtons = 1, index }: Props) => {
  const hasManyButtons = numberOfButtons && numberOfButtons > 1;

  const buttonGap = BUTTON_SPACING / numberOfButtons;
  const marginRight = hasManyButtons && index === 0 ? buttonGap : 0;
  const marginLeft = hasManyButtons && !!index && index > 0 ? buttonGap : 0;

  return (
    <View style={[styles.container, { marginRight, marginLeft }]}>
      <TouchableOpacity style={styles.buttonPrimary}>
        <View style={styles.buttonPrimaryContent}>
          <Text style={styles.buttonPrimaryLabel}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonPrimary: {
    height: 44,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light.neutral,
    borderRadius: 4,
    flex: 1,
    backgroundColor: "white",

    // shadow
    shadowColor: colors.light.neutralDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },

  buttonPrimaryContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  buttonPrimaryLabel: {
    fontSize: 16,
    color: "#007afe",
    fontWeight: "500",
  },
});
