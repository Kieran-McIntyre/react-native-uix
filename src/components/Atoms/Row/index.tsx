import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface Props {
  centred?: boolean;
  between?: boolean;
  around?: boolean;
  style?: object;

  children?: any;
}

const getStyle = (props: Props) => {
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

const Row = (props: Props) => (
  <View style={{ ...getStyle(props), ...props.style }}>{props.children}</View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  centredRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  between: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  around: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
