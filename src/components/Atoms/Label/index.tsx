import * as React from "react";
import { useMemo } from "react";
import { Text } from "react-native";
import { LabelProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";
import { mapPropsToStyle } from "../../../utils/mapPropsToStyle";

export const Label: React.FC<LabelProps> = props => {
  const { styles } = useStyle(dynamicStyles);

  const mappedStyles = useMemo(() => mapPropsToStyle(props, styles), [
    styles,
    props,
  ]);

  return (
    <Text {...props} style={[styles.primary, mappedStyles, props.style]}>
      {props.children}
    </Text>
  );
};
