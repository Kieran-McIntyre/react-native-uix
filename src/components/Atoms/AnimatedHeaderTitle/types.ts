import { TextStyle, Animated } from "react-native";

export interface AnimatedHeaderTitleProps {
  title: string;
  style?: Animated.WithAnimatedValue<TextStyle>;
}
