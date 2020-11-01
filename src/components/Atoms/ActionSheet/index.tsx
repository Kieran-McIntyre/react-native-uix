import * as React from "react";
import { useEffect, useRef } from "react";
import NativeActionSheet from "react-native-actionsheet";
import IHeaderActionsMoreOptions from "../../../interfaces/IHeaderActionsMoreOptions";

export interface Props {
  title?: string;
  options: IHeaderActionsMoreOptions[];
  onAction: any;
}

const ActionSheet = ({ title, options, onAction }: Props) => {
  const actionsheetRef = useRef(null);

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
      options={options.map(option => option.label)}
      cancelButtonIndex={cancelButtonIndex}
      destructiveButtonIndex={destructiveButtonIndex}
      onPress={index => {
        options[index]?.onPress && options[index].onPress();
        onAction();
      }}
    />
  );
};

export default ActionSheet;
