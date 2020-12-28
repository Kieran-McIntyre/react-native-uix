import * as React from "react";
import { useMemo } from "react";
import { View } from "react-native";
import { RowProps } from "./types";
import { styles } from "./styles";
import { mapPropsToStyle } from "../../../utils/mapPropsToStyle";

export const Row: React.FC<RowProps> = (props) => {
  const { style, children, ...otherProps } = props;

  const mappedStyles = useMemo(() => mapPropsToStyle(props, styles), [
    styles,
    props,
  ]);

  return (
    <View
      testID="row"
      {...otherProps}
      style={[styles.row, mappedStyles, style]}
    >
      {children}
    </View>
  );
};
