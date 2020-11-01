import * as React from "react";
import { useState, useMemo } from "react";
import { StyleSheet, ActivityIndicator, View, Text } from "react-native";
import { WebView } from "react-native-webview";
import getRichEditorHtml from "../../../utils/getRichEditorHTML";
import colors from "../../../values/colors";

export interface Props {
  initialValue: string;
  placeholder?: string;
  onChangeText: any;
  isTextarea?: boolean;
}

const RenderLoading = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator color={colors.light.red} />
    </View>
  );
};

const FieldRichText = ({ initialValue, placeholder, onChangeText }: Props) => {
  const [height, setHeight] = useState(85);

  const html = getRichEditorHtml({
    initialHtml: initialValue ?? "",
    backgroundColor: "white",
    fontSize: 16,
    placeholderColor: colors.light.neutral,
    placeholder: placeholder ?? '',
  });

  const onMessage = (event: any) => {
    const { height: editorHeight, content } = JSON.parse(
      event.nativeEvent.data
    );

    setHeight(editorHeight);
    onChangeText(content);
  };

  return (
    <View style={[styles.inputContainer, { height }]}>
      {useMemo(() => {
        return (
          <WebView
            containerStyle={styles.webview}
            source={{ html }}
            bounces={false}
            javaScriptEnabled={true}
            hideKeyboardAccessoryView={true}
            keyboardDisplayRequiresUserAction={false}
            scrollEnabled={false}
            originWhitelist={["*"]}
            dataDetectorTypes={"none"}
            domStorageEnabled={false}
            onMessage={onMessage}
            startInLoadingState={true}
            renderLoading={RenderLoading}
          />
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])}
    </View>
  );
};

export default FieldRichText;

const styles = StyleSheet.create({
  inputContainer: {
    minHeight: 80,
    position: "relative",
  },

  webview: {
    minHeight: 80,
    paddingHorizontal: 10,
  },

  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
  },
});
