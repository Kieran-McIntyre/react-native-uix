import * as React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProps } from "./types"
import { styles } from "./styles"

export const Button: React.FC<ButtonProps> = ({
  title,
  type = "default",
  disabled = false,
  onPress,
  style,
}) => {
  const buttonSubmit = type === "submit" && styles.buttonSubmit;
  const buttonDisabled = disabled ? styles.buttonDisabled : styles.buttonActive;

  const buttonStyles = [styles.button, buttonSubmit, buttonDisabled];
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <Text style={buttonStyles}>{title}</Text>
    </TouchableOpacity>
  );
};
