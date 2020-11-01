import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "../../Atoms/Modal";
import ImageViewer from "react-native-image-zoom-viewer";

export interface Props {
  visible: boolean;
  onDismiss: any;
  imageUrls: string[];
  initialIndex?: number;
}

const ModalViewImage = ({
  visible,
  onDismiss,
  imageUrls = [],
  initialIndex = 0,
}: Props) => {
  const data = imageUrls.map((url) => ({ url }));

  if (!visible) {
    return null;
  }

  return (
    <Modal
      visible={true}
      onDismiss={onDismiss}
      startButtonLabel="Done"
      startButtonOnPress={onDismiss}
      presentationStyle="fullScreen"
    >
      <ImageViewer
        imageUrls={data}
        saveToLocalByLongPress={false}
        enablePreload={true}
        backgroundColor="white"
        index={initialIndex}
      />
    </Modal>
  );
};

export default ModalViewImage;
