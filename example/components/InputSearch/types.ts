import { TextInputProps, ViewStyle } from "react-native";

export interface InputSearchProps extends TextInputProps {
  style?: ViewStyle;
  onChangeText?: (searchValue: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
