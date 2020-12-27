import { PropsWithChildren } from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";

type MappedStyle = ViewStyle | TextStyle | ImageStyle;

/**
 * mapPropsToStyle
 * @param props
 * @param styles
 */
export const mapPropsToStyle = (
  props: PropsWithChildren<any>,
  styles: StyleSheet.NamedStyles<any>
): StyleSheet.NamedStyles<any> => {
  return Object.entries(props).reduce((mappedStyles, currEntry) => {
    const [attribute, shouldInclude] = currEntry;
    const mappedStyle = styles[attribute];

    return pop(shouldInclude, mappedStyle, mappedStyles);
  }, {});
};

const pop = (
  shouldInclude: unknown,
  mappedStyle: MappedStyle,
  mappedStyles: StyleSheet.NamedStyles<any>
) => {
  if (!!shouldInclude && mappedStyle) {
    return {
      ...mappedStyles,
      ...mappedStyle,
    };
  }

  return mappedStyles;
};
