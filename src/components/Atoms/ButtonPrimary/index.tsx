import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ButtonPrimaryProps } from "./types"
import { styles } from "./styles"

const BUTTON_SPACING = 16;

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ label, numberOfButtons = 1, index }) => {
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
