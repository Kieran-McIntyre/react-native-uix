import * as React from "react";
import { Text } from "react-native";
import { H4Props } from "./types"
import { styles } from "./styles"

export const H4: React.FC<H4Props> = (props) => (
  <Text {...props} style={[styles.h4, props.style]}>
    {props.children}
  </Text>
);