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
  onPress,
  ...otherProps
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
    <View style={[styles.container, buttonStyle]} testID="button">
      <TouchableHighlight
        {...otherProps}
        delayPressIn={0}
        underlayColor={themeSet.tertiarySystemBackground}
        style={styles.buttonPrimary}
        onPress={onPress}
        testID="button__touchable"
      >
        <View style={styles.buttonPrimaryContent}>
          <Text testID="button__label" style={styles.buttonPrimaryLabel}>
            {label}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
