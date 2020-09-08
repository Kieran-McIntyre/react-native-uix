import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import sizes from "../../../values/sizes";
import Row from "../../../components/Atoms/Row";
import DisclosureIcon from "../../../components/Atoms/DisclosureIcon";
import IGroupedTableItem from "../../../interfaces/IGroupedTableItem";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const TableRow = (item: IGroupedTableItem, index: number) => {
  return (
    <View style={styles.tableRow} key={item.id}>
      {index > 0 && <View style={styles.separatorLine} />}

      <TouchableOpacity>
        <Row style={styles.content} between>
          <Row>
            <DisclosureIcon
              icon={item.icon}
              backgroundColor={item.iconBackgroundColor}
            />
            <Text style={styles.label}>{item.label}</Text>
          </Row>
          <FontAwesomeIcon icon="chevron-right" color={colors.light.neutral} />
        </Row>
      </TouchableOpacity>
    </View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "column",
  },
  modal: {
    backgroundColor: "white",
    borderRadius: sizes.spacing.sm,
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
});
