import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export interface Props {
  title: string;
  onPress: any;
  disabled?: boolean;
  type?: "default" | "submit";
  style?: any;
}

const Button = ({
  title,
  type = "default",
  disabled = false,
  onPress,
  style,
}: Props) => {
  const buttonSubmit = type === "submit" && styles.buttonSubmit;
  const buttonDisabled = disabled ? styles.buttonDisabled : styles.buttonActive;

  const buttonStyles = [styles.button, buttonSubmit, buttonDisabled];
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <Text style={buttonStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    fontSize: 17,
  },

  buttonSubmit: {
    fontWeight: "500",
  },

  buttonDisabled: {
    color: "#007afe",
    opacity: 0.5,
  },

  buttonActive: {
    color: "#007afe",
  },
});
