import * as React from "react";
import { Row } from "../../atoms/Row";
import { Label } from "../../atoms/Label";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DetailMetaProps } from "./types";
import { styles } from "./styles";
import { useStyle } from "../../../hooks/useStyle";

export const DetailMeta: React.FC<DetailMetaProps> = ({
  meta,
  ...otherProps
}) => {
  const { themeSet } = useStyle();

  return (
    <Row {...otherProps} style={styles.container} testID="detailMeta">
      <FontAwesomeIcon icon={meta.icon} color={themeSet.textSecondary} />

      <Label testID="label" secondary style={styles.label}>
        {meta.label}
      </Label>
    </Row>
  );
};
