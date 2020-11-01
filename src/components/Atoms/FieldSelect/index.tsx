import * as React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import Row from "../../../components/Atoms/Row";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface Props {
  labelKey: string;
  labelValue?: string;
  onPress: any;
}

const FieldSelect = ({ labelKey, labelValue, onPress }: Props) => {
  const hasValue = labelValue != null;

  return (
    <TouchableHighlight underlayColor={colors.light.neutral} onPress={onPress}>
      <View style={styles.selectRow}>
        <Row style={styles.content} between>
          <Text style={styles.label}>{labelKey}</Text>

          <Row style={styles.valueContainer}>
            <Text style={styles.value} numberOfLines={1} ellipsizeMode="tail">
              {hasValue ? labelValue : `No ${labelKey}`}
            </Text>

            <FontAwesomeIcon
              icon="chevron-right"
              color={colors.light.neutral}
            />
          </Row>
        </Row>
      </View>
    </TouchableHighlight>
  );
};

export default FieldSelect;

const styles = StyleSheet.create({
  selectRow: {
    flexDirection: "column",
  },

  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  label: {
    fontSize: 16,
    paddingRight: 40,
  },

  valueContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  value: {
    color: colors.light.neutralDark,
    fontSize: 16,
    marginRight: 5,
  },
});
