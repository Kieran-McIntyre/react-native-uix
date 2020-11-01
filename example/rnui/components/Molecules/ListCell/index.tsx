import * as React from "react";
// import { useState, useEffect, useRef } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import Row from "../../../components/Atoms/Row";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const ListCell = (item: any, index: number) => {
  return (
    <TouchableHighlight
      underlayColor={colors.light.neutral}
      onPress={item.onPress}
      key={item.id}
    >
      <View style={styles.tableRow}>
        {index > 0 && <View style={styles.separatorLine} />}

        <Row style={styles.content} between>
          <Row>
            <Text style={styles.label}>{item.label}</Text>
          </Row>
          <FontAwesomeIcon icon="chevron-right" color={colors.light.neutral} />
        </Row>
      </View>
    </TouchableHighlight>
  );
};

export default ListCell;

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
});
