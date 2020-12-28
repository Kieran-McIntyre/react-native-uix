import { ReactNode } from "react";
import { ViewProps, ViewStyle } from "react-native";

export interface LayoutDetailSectionProps extends ViewProps {
  title?: string;
  style?: ViewStyle;
  children?: ReactNode;
}
