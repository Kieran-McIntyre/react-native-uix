import * as React from "react";
import { Modal as NativeModal, SafeAreaView, Text, View } from "react-native";
import { Row } from "../../atoms/Row";
import { Button } from "../../atoms/Button";
import { ModalProps } from "./types"
import { styles } from "./styles"

export const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  startButtonLabel = "Cancel",
  startButtonOnPress,
  endButtonLabel = "Submit",
  endButtonOnPress,
  headerTitle,
  onDismiss,
  presentationStyle = "formSheet",
}) => {
  return (
    <NativeModal
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
    </NativeModal>
  );
};

