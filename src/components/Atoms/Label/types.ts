import { TextProps } from "react-native";

export interface LabelProps extends TextProps {
  children?: string | number;

  xl?: boolean;
  lg?: boolean;
  md?: boolean;
  sm?: boolean;
  semibold?: boolean;
  bold?: boolean;
  primary?: boolean;
  secondary?: boolean;
  lighter?: boolean;
}
