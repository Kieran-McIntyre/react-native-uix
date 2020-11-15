import { StyleSheet } from "react-native";

export const mapPropsToStyle = (
  props: object,
  styles: StyleSheet.NamedStyles<any>
) => {
  const styleDict = {};

  Object.entries(props).forEach(entry => {
    const [attribute, value] = entry;

    if (value && styles[attribute]) {
      styleDict[attribute] = styles[attribute];
    }
  });

  return Object.values(styleDict);
};
