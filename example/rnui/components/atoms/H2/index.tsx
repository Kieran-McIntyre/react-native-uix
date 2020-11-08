import * as React from "react";
import { Text } from "react-native";
import { H2Props } from "./types"
import { styles } from "./styles"

export const H2: React.FC<H2Props> = (props) => {
  const fontWeightStyle = props.light ? styles.light : styles.bold;

  return (
    <Text {...props} style={[styles.h2, fontWeightStyle, props.style]}>
      {props.children}
    </Text>
  );
};