import * as React from "react";
import { Row } from "../../atoms/Row";
import { Label } from "../../atoms/Label";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DetailMetaProps } from "./types";
import { styles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const DetailMeta: React.FC<DetailMetaProps> = ({ meta }) => {
  const { themeSet } = useStyle();

  return (
    <Row style={styles.container}>
      <FontAwesomeIcon icon={meta.icon} color={themeSet.textSecondary} />
      <Label secondary style={styles.label}>
        {meta.label}
      </Label>
    </Row>
  );
};
