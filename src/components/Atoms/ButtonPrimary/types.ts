import { TouchableHighlightProps } from "react-native";

export interface ButtonPrimaryProps extends TouchableHighlightProps {
  label: string;
  numberOfButtons?: number;
  index?: number;
}
