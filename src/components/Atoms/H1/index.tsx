import * as React from "react";
import { Text } from "react-native";
import { H1Props } from "./types"
import { styles } from "./styles"

export const H1: React.FC<H1Props> = (props) => (
  <Text {...props} style={[styles.h1, props.style]}>
    {props.children}
  </Text>
);
