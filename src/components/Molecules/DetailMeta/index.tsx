import * as React from "react";
import { Text } from "react-native"
import colors from "../../../values/colors";
import { Row } from "../../Atoms/Row";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DetailMetaProps } from "./types"
import { styles } from "./styles"

export const DetailMeta: React.FC<DetailMetaProps> = ({ meta }) => {
  return (
    <Row style={styles.container}>
      <FontAwesomeIcon icon={meta.icon} color={colors.light.neutralDark} />
      <Text style={styles.label}>{meta.label}</Text>
    </Row>
  );
};
