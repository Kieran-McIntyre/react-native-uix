import * as React from "react";
import { View } from "react-native";
import { RowProps } from "./types"
import { styles } from "./styles"

const getStyle = (props: RowProps) => {
  if (props.centred) {
    return styles.centredRow;
  }

  if (props.between) {
    return styles.between;
  }

  if (props.around) {
    return styles.around;
  }

  return styles.row;
};

export const Row: React.FC<RowProps> = (props) => (
  <View style={{ ...getStyle(props), ...props.style }}>{props.children}</View>
);
