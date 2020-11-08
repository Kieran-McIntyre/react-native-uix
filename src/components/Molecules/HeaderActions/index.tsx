import * as React from "react";
import { useState } from "react";
import { Row } from "../../Atoms/Row";
import { Button } from "../../Atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActionSheet } from "../../Atoms/ActionSheet";
import { HeaderActionsProps } from "./types"
import { styles } from "./styles"

export const HeaderActions: React.FC<HeaderActionsProps> = ({
  onEdit,
  onAdd,
  renderCustomAction,
  moreOptions,
}) => {
  const [isShowingMoreOptions, setShowMoreOptions] = useState(false);

  return (
    <Row style={styles.actionContainer}>
      {moreOptions && (
        <TouchableOpacity
          onPress={() => setShowMoreOptions(true)}
          style={styles.button}
        >
          <FontAwesomeIcon icon="ellipsis-h" color="blue" size={20} />
        </TouchableOpacity>
      )}

      {onAdd && (
        <TouchableOpacity onPress={onAdd}>
          <FontAwesomeIcon icon="plus-circle" color="blue" size={20} />
        </TouchableOpacity>
      )}

      {onEdit && <Button title="Edit" onPress={onEdit} />}

      {renderCustomAction && renderCustomAction()}

      {isShowingMoreOptions && (
        <ActionSheet
          options={[...moreOptions ?? [], { label: "Cancel", isCancel: true }]}
          onAction={() => setShowMoreOptions(false)}
        />
      )}
    </Row>
  );
};
