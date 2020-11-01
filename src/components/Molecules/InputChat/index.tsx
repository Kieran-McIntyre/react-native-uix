import * as React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../../../values/colors";
import Row from "../../Atoms/Row";
import Grid from "../../Atoms/Grid";
import Button from "../../Atoms/Button";
import InputChatImage from "./InputChatImage";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCamera as faCameraLight,
  // faImagePolaroid as faImagePolaroidLight,
  // faSignature as faSignatureLight,
  // faFileUpload as faFileUploadLight,
} from "@fortawesome/free-solid-svg-icons";

type Action = "camera" | "photo" | "file" | "signature";

const defaultActions = ["camera", "photo", "file", "signature"] as Action[];

interface AvailableAction {
  id: Action;
  iconName: any;
}

export interface Props {
  actions: Action[];
}

const AVAILABLE_ACTIONS: AvailableAction[] = [
  {
    id: "camera",
    iconName: faCameraLight,
  },
  {
    id: "photo",
    iconName: faCameraLight,
  },
  {
    id: "file",
    iconName: faCameraLight,
  },
  {
    id: "signature",
    iconName: faCameraLight,
  },
];

const InputAction = ({ action }: { action: AvailableAction }) => {
  return (
    <TouchableOpacity key={action.id}>
      <View style={styles.action}>
        <FontAwesomeIcon
          icon={action.iconName}
          color={colors.light.neutralDark}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

const InputChat = ({ actions = defaultActions }: Props) => {
  const actionsToRender = actions
    .map((action) => {
      return AVAILABLE_ACTIONS.find(
        (availableAction) => availableAction.id === action
      );
    })
    .filter(Boolean) as AvailableAction[]

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="Add a note"
        />

        <InputChatImage />
        {/* <Grid items={} /> */}
      </View>

      <Row style={styles.actionRow} between>
        <Row style={styles.actions}>
          {actionsToRender.map((action) => (
            <InputAction action={action} />
          ))}
        </Row>

        <Button title="Send" onPress={() => {}} />
      </Row>
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    minHeight: 80,
    backgroundColor: colors.light.neutralLightest,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: colors.light.neutral,
  },

  inputRow: {
    backgroundColor: "orange",
  },

  input: {
    minHeight: 40,
    maxHeight: 200,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
  },

  actions: {},

  actionRow: {
    flex: 1,
    height: 40,
    paddingRight: 20,
    paddingLeft: 10,
    alignItems: "center",
  },

  action: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
