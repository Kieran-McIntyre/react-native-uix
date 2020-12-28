import { TouchableOpacityProps, ViewStyle } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  submit?: boolean;
  style?: ViewStyle;
}
