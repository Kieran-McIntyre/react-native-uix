import * as React from "react";
import { useMemo } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { ButtonPrimaryProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

const BUTTON_SPACING = 16;

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  label,
  numberOfButtons = 1,
  index,
}) => {
  const { styles, themeSet } = useStyle(dynamicStyles);

  const buttonStyle = useMemo(() => {
    const hasManyButtons = numberOfButtons && numberOfButtons > 1;

    const buttonGap = BUTTON_SPACING / numberOfButtons;
    const marginRight = hasManyButtons && index === 0 ? buttonGap : 0;
    const marginLeft = hasManyButtons && !!index && index > 0 ? buttonGap : 0;

    return { marginRight, marginLeft };
  }, [numberOfButtons, index]);

  return (
    <View style={[styles.container, buttonStyle]}>
      <TouchableHighlight
        underlayColor={themeSet.tertiarySystemBackground}
        style={styles.buttonPrimary}
        onPress={() => {}}
      >
        <View style={styles.buttonPrimaryContent}>
          <Text style={styles.buttonPrimaryLabel}>{label}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
