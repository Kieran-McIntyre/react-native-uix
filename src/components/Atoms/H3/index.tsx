import * as React from "react";
import { Text } from "react-native";
import { H3Props } from "./types"
import { styles } from "./styles"

export const H3: React.FC<H3Props> = (props) => (
  <Text {...props} style={[styles.h3, props.style]}>
    {props.children}
  </Text>
);