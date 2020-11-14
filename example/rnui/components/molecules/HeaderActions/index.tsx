import * as React from "react";
import { useState } from "react";
import { Row } from "../../atoms/Row";
import { Button } from "../../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
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
}) => {
  const { themeSet } = useStyle()
  const [isShowingMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <Row style={styles.actionContainer}>
      {moreOptions && (
        <TouchableOpacity
          onPress={() => setShowMoreOptions(true)}
          style={styles.button}
        >
          <FontAwesomeIcon icon={faEllipsisH} color={themeSet.tint} size={20} />
        </TouchableOpacity>
      )}

      {onAdd && (
        <TouchableOpacity onPress={onAdd}>
          <FontAwesomeIcon icon={faPlusCircle} color={themeSet.tint} size={20} />
        </TouchableOpacity>
      )}

      {onEdit && <Button title="Edit" onPress={onEdit} />}

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
