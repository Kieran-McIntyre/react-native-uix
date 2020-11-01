import * as React from "react";
import { useState } from "react";

import { Button, StyleSheet } from "react-native";
import Row from "../../Atoms/Row";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import IHeaderActionsMoreOptions from "../../../interfaces/IHeaderActionsMoreOptions";
import ActionSheet from "../../Atoms/ActionSheet";

export interface Props {
  onEdit?: any;
  onAdd?: any;
  moreOptions?: IHeaderActionsMoreOptions[];
}

const HeaderActions = ({ onEdit, onAdd, moreOptions }: Props) => {
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
        <TouchableOpacity>
          <FontAwesomeIcon icon="plus-circle" color="blue" size={20} />
        </TouchableOpacity>
      )}

      {onEdit && <Button title="Edit" onPress={() => {}} />}

      {isShowingMoreOptions && (
        <ActionSheet
          options={[...moreOptions, { label: "Cancel", isCancel: true }]}
          onAction={() => setShowMoreOptions(false)}
        />
      )}
    </Row>
  );
};

export default HeaderActions;

const styles = StyleSheet.create({
  actionContainer: {
    marginRight: 20,
  },

  button: {
    marginRight: 10,
  },
});
