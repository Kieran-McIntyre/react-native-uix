import * as React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { Row } from "../../atoms/Row";
import colors from "../../../values/colors";
import { ListCellProps } from "./types"
import { styles } from "./styles"

export const ListCell: React.FC<ListCellProps> = ({ item, index }) => {
  const {
    description,
    title,
    heading,
    detail,
    onPress,
    renderItemStart,
  } = item;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.light.neutral}
      key={item.id}
      delayPressIn={0}
    >
      <View style={styles.tableRow}>
        {index > 0 && <View style={styles.separatorLine} />}

        <Row style={styles.wrapper} between>
          {!!renderItemStart && (
            <Row centred style={styles.renderItemStartContent}>
              {renderItemStart}
            </Row>
          )}

          <View style={styles.content}>
            {!!heading && (
              <Text style={[styles.label, styles.heading]}>{heading}</Text>
            )}

            <Text style={styles.title} ellipsizeMode="middle" numberOfLines={2}>
              {title}
            </Text>

            {!!description && (
              <Text
                style={[styles.label, styles.description]}
                ellipsizeMode="middle"
                numberOfLines={1}
              >
                {description}
              </Text>
            )}
          </View>
          <Row>
            {!!detail && (
              <Text style={[styles.label, styles.heading]}>{detail}</Text>
            )}
          </Row>
        </Row>
      </View>
    </TouchableHighlight>
  );
};