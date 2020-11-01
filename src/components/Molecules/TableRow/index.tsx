import * as React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import sizes from "../../../values/sizes";
import Row from "../../../components/Atoms/Row";
import DisclosureIcon from "../../../components/Atoms/DisclosureIcon";
import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export interface Props {
  item: IGroupedTableItem;
  index: number;
}

const TableRow = ({ item, index }: Props) => {
  const { icon, iconBackgroundColor, label, count, onPress, id } = item;
  const hasCount = count != null;

  return (
    <TouchableHighlight
      underlayColor={colors.light.neutral}
      onPress={onPress}
      key={id}
    >
      <View style={styles.tableRow}>
        {index > 0 && <View style={styles.separatorLine} />}

        <Row style={styles.content} between>
          <Row>
            <DisclosureIcon icon={icon} backgroundColor={iconBackgroundColor} />
            <Text style={styles.label}>{label}</Text>
          </Row>

          <Row>
            {hasCount && <Text style={styles.count}>{count}</Text>}

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

export default TableRow;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "column",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  separatorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.light.neutral,
    flexShrink: 0,
    marginLeft: 64,
  },
  label: {
    fontSize: 16,
    marginLeft: 12,
  },
  count: {
    color: colors.light.neutralDark,
    fontSize: 16,
    marginRight: 5,
  },
});
