import { ViewStyle } from "react-native";

export interface ButtonProps {
  title: string
  onPress: () => void;
  disabled?: boolean;
  submit?: boolean;
  style?: ViewStyle;
}
