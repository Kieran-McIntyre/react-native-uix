import * as React from "react";
import { useMemo } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";
import { mapPropsToStyle } from "../../../utils/mapPropsToStyle";

export const Button: React.FC<ButtonProps> = props => {
  const { title, disabled, onPress, style } = props;

  const { styles } = useStyle(dynamicStyles);
  const mappedStyles = useMemo(() => mapPropsToStyle(props, styles), [
    styles,
    props,
  ]);

  return (
    <TouchableOpacity testID="button" disabled={disabled} style={style} onPress={onPress}>
      <Text testID="button__label" style={[styles.button, mappedStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};
