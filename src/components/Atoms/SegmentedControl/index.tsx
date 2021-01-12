import * as React from "react";
import NativeSegmentedControl from "@react-native-community/segmented-control";
import { SegmentedControlProps } from "./types";
import {
  NativeSegmentedControlIOSChangeEvent,
  NativeSyntheticEvent,
} from "react-native";

export const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  style,
  selectedIndex = 0,
  ...otherProps
}) => {
  const onChange = (
    event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>
  ) => {
    const { selectedSegmentIndex } = event.nativeEvent;
    const selectedOption = options[selectedSegmentIndex];

    selectedOption?.onPress();
  };

  return (
    <NativeSegmentedControl
      {...otherProps}
      style={style}
      values={options.map((option) => option.label)}
      selectedIndex={selectedIndex}
      onChange={onChange}
    />
  );
};
