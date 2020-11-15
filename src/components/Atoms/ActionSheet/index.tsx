import * as React from "react";
import { useEffect, useRef } from "react";
import NativeActionSheet from "react-native-actionsheet";
import { ActionSheetProps } from "./types";
import { useStyle } from "../../../hooks/useStyle";

export const ActionSheet: React.FC<ActionSheetProps> = ({
  title,
  options,
  onAction,
}) => {
  const actionsheetRef = useRef(null);
  const { themeSet } = useStyle();

  useEffect(() => {
    const actionsheet = actionsheetRef.current! as NativeActionSheet;
    actionsheet.show();
  }, []);

  const cancelButtonIndex = options.findIndex(option => option.isCancel);
  const destructiveButtonIndex = options.findIndex(
    option => option.isDestructive
  );

  return (
    <NativeActionSheet
      ref={actionsheetRef}
      title={title}
      tintColor={themeSet.tint}
      options={options.map(option => option.label)}
      cancelButtonIndex={cancelButtonIndex}
      destructiveButtonIndex={destructiveButtonIndex}
      onPress={index => {
        options[index]?.onPress?.();
        onAction();
      }}
    />
  );
};
