import { ViewStyle } from "react-native";

export interface InputSearchProps {
  style?: ViewStyle;
  placeholder?: string;
  onChangeText?: (searchValue: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
