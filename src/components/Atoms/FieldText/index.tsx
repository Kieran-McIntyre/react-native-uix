import * as React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export interface Props {
  initialValue: string;
  placeholder?: string;
  onChangeText: any;
  isTextarea?: boolean;
}

const FieldText = ({
  initialValue,
  placeholder,
  onChangeText,
  isTextarea = false,
}: Props) => {
  const inputStyles = [styles.input];

  if (isTextarea) {
    inputStyles.push(styles.textarea as any);
  }

  return (
    <TextInput
      defaultValue={initialValue}
      style={inputStyles}
      placeholder={placeholder}
      onChangeText={onChangeText}
      multiline={true}
    />
  );
};

export default FieldText;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },

  textarea: {
    minHeight: 85,
  },
});
