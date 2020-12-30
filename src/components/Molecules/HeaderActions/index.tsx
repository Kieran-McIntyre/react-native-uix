import * as React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Row } from "../../atoms/Row";
import { Button } from "../../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ActionSheet } from "../../atoms/ActionSheet";
import { HeaderActionsProps } from "./types";
import { styles } from "./styles";
import { faPlusCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { useStyle } from "../../../hooks/useStyle";

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  onEdit,
  onAdd,
  renderCustomAction,
  moreOptions,
  ...otherProps
}) => {
  const { themeSet } = useStyle();
  const [isShowingMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <Row {...otherProps} style={styles.actionContainer}>
      {moreOptions && (
        <TouchableOpacity
          testID={"moreOptionsButton"}
          onPress={() => setShowMoreOptions(true)}
          style={styles.button}
        >
          <FontAwesomeIcon icon={faEllipsisH} color={themeSet.tint} size={20} />
        </TouchableOpacity>
      )}

      {onAdd && (
        <TouchableOpacity testID="addButton" onPress={onAdd}>
          <FontAwesomeIcon
            icon={faPlusCircle}
            color={themeSet.tint}
            size={20}
          />
        </TouchableOpacity>
      )}

      {onEdit && <Button testID="editButton" title="Edit" onPress={onEdit} />}

      {renderCustomAction && renderCustomAction()}

      {isShowingMoreOptions && (
        <ActionSheet
          options={[
            ...(moreOptions ?? []),
            { label: "Cancel", isCancel: true },
          ]}
          onAction={() => setShowMoreOptions(false)}
        />
      )}
    </Row>
  );
};
