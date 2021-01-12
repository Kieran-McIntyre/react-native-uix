import * as React from "react";
import { TouchableHighlight, View, Text } from "react-native";
import { Row } from "../../atoms/Row";
import { ListCellProps } from "./types";
import { dynamicStyles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const ListCell: React.FC<ListCellProps> = ({
  item,
  index,
  ...otherProps
}) => {
  const {
    description,
    title,
    heading,
    detail,
    onPress,
    renderItemStart,
  } = item;

  const { styles, themeSet } = useStyle(dynamicStyles);

  return (
    <TouchableHighlight
      onPress={onPress}
      delayPressIn={0}
      underlayColor={themeSet.tertiarySystemBackground}
      key={item.id}
      style={styles.touchableWrapper}
      testID="listCell__wrapper"
    >
      <View {...otherProps} style={styles.tableRow}>
        {index > 0 && (
          <View testID="listCell__separatorLine" style={styles.separatorLine} />
        )}

        <Row style={styles.contentWrapper} between>
          {!!renderItemStart && (
            <Row centred style={styles.renderItemStartContent}>
              {renderItemStart}
            </Row>
          )}

          <View style={styles.content}>
            {!!heading && (
              <Text
                style={[styles.label, styles.heading]}
                testID="listCell__heading"
              >
                {heading}
              </Text>
            )}

            <Text
              style={styles.title}
              ellipsizeMode="middle"
              numberOfLines={2}
              testID="listCell__title"
            >
              {title}
            </Text>

            {!!description && (
              <Text
                style={[styles.label, styles.description]}
                ellipsizeMode="middle"
                numberOfLines={1}
                testID="listCell__description"
              >
                {description}
              </Text>
            )}
          </View>
          <Row>
            {!!detail && (
              <Text
                style={[styles.label, styles.heading]}
                testID="listCell__detail"
              >
                {detail}
              </Text>
            )}
          </Row>
        </Row>
      </View>
    </TouchableHighlight>
  );
};
