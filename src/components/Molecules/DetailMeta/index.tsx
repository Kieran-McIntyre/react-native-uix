import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../../values/colors";
import Row from "../../Atoms/Row";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import IDetailMeta from "../../../interfaces/IDetailMeta";

export interface Props {
  meta: IDetailMeta;
  index?: number;
}

const DetailMeta = ({ meta }: Props) => {
  return (
    <Row style={styles.container}>
      <FontAwesomeIcon icon={meta.icon} color={colors.light.neutralDark} />
      <Text style={styles.label}>{meta.label}</Text>
    </Row>
  );
};

export default DetailMeta;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 20,
  },

  label: {
    fontSize: 14,
    color: colors.light.neutralDark,
    marginLeft: 5,
  },
});
