import * as React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import Row from "../../../components/Atoms/Row";
import colors from "../../../values/colors";
import IListCellItem from "../../../interfaces/IListCellItem";

export interface Props {
  item: IListCellItem;
  index: number;
}

const ListCell = ({ item, index }: Props) => {
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

export default ListCell;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "column",
    backgroundColor: colors.light.neutralLightest,
  },
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignItems: "flex-start",
  },
  content: {
    flex: 1,
  },
  separatorLine: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.light.neutral,
    flexShrink: 0,
  },
  label: {
    fontSize: 16,
    color: colors.light.neutralDark,
  },
  heading: {
    marginBottom: 2,
  },
  description: {
    marginTop: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  renderItemStartContent: {
    height: "100%",
    marginRight: 20,
  },
});
