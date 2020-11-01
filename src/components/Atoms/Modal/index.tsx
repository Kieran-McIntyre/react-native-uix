import * as React from "react";
import { Modal, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Row from "../../Atoms/Row";
import Button from "../Button";
import colors from "../../../values/colors";

export interface Props {
  visible: boolean;
  startButtonLabel?: string;
  startButtonOnPress?: any;
  headerTitle?: string;
  endButtonLabel?: string;
  endButtonOnPress?: any;
  children?: any;
  onDismiss: any;
  presentationStyle?: "fullScreen" | "formSheet";
  visualStyle?: "default" | "form";
}

const CustomModal = ({
  visible,
  children,
  startButtonLabel = "Cancel",
  startButtonOnPress,
  endButtonLabel = "Submit",
  endButtonOnPress,
  headerTitle,
  onDismiss,
  presentationStyle = "formSheet",
}: Props) => {
  return (
    <Modal
      visible={visible}
      presentationStyle={presentationStyle}
      animationType={"slide"}
      onDismiss={onDismiss}
    >
      <SafeAreaView style={[styles.content]}>
        <Row style={styles.header}>
          {startButtonOnPress && (
            <View style={[styles.headerSection, styles.headerSectionStart]}>
              <Button title={startButtonLabel} onPress={startButtonOnPress} />
            </View>
          )}

          {headerTitle && (
            <View style={[styles.headerSection, styles.headerSectionCenter]}>
              <Text style={styles.headerTitle}>{headerTitle}</Text>
            </View>
          )}

          {endButtonOnPress && (
            <View style={[styles.headerSection, styles.headerSectionEnd]}>
              <Button
                title={endButtonLabel}
                type="submit"
                onPress={endButtonOnPress}
              />
            </View>
          )}
        </Row>

        {children}
      </SafeAreaView>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 20,
  },

  headerDefault: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.light.neutralDark,
  },

  content: {
    flex: 1,
  },

  contentForm: {
    backgroundColor: colors.light.neutralLight,
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  headerSection: {
    flex: 1,
  },

  headerSectionStart: {
    alignItems: "flex-start",
  },
  headerSectionCenter: {
    alignItems: "center",
  },
  headerSectionEnd: {
    alignItems: "flex-end",
  },
});
