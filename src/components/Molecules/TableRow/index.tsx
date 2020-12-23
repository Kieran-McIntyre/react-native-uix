import * as React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Row } from "../../atoms/Row";
import { DisclosureIcon } from "../../atoms/DisclosureIcon";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TableRowProps } from "./types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";
import { Label } from "../../atoms/Label";

export const TableRow: React.FC<TableRowProps> = ({ item, index }) => {
  const { icon, iconBackgroundColor, label, count, onPress, id } = item;
  const hasCount = count != null;

  const { styles, themeSet } = useStyle(dynamicStyles);

  return (
    <TouchableHighlight
      underlayColor={themeSet.tertiarySystemBackground}
      onPress={onPress}
      key={id}
    >
      <View style={styles.tableRow}>
        {index > 0 && <View style={styles.separatorLine} />}

        <Row style={styles.content} between>
          <Row>
            <DisclosureIcon icon={icon} backgroundColor={iconBackgroundColor} />
            <Label style={styles.label}>{label}</Label>
          </Row>

          <Row>
            {hasCount && (
              <Label secondary style={styles.count}>
                {count}
              </Label>
            )}

            <FontAwesomeIcon icon={faChevronRight} color={themeSet.separator} />
          </Row>
        </Row>
      </View>
    </TouchableHighlight>
  );
};
