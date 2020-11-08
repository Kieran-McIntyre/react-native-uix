import * as React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Row } from "../../atoms/Row";
import { DisclosureIcon } from "../../atoms/DisclosureIcon";
import colors from "../../../values/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TableRowProps } from "./types"
import { styles } from "./styles"

export const TableRow: React.FC<TableRowProps> = ({ item, index }) => {
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
