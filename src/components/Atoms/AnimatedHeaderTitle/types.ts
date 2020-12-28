import { TextStyle, Animated, TextProps } from "react-native";

export interface AnimatedHeaderTitleProps
  extends Animated.WithAnimatedValue<TextProps> {
  title: string;
  style?: Animated.WithAnimatedValue<TextStyle>;
}
