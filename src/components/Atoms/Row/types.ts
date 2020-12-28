import { ReactNode } from "react";
import { ViewProps, ViewStyle } from "react-native";

export interface RowProps extends ViewProps {
  centred?: boolean;
  between?: boolean;
  around?: boolean;
  style?: ViewStyle;
  children?: ReactNode;
}
