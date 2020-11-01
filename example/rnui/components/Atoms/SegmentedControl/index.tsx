import * as React from "react";
import NativeSegmentedControl from "@react-native-community/segmented-control";
import ISegmentedControlOption from "../../../interfaces/ISegmentedControlOption";

const SegmentedControl = ({
  options,
  style,
  selectedIndex = 0,
}: {
  options: ISegmentedControlOption[];
  style?: any;
  selectedIndex?: number;
}) => {
  const onChange = event => {
    const { selectedSegmentIndex } = event.nativeEvent;
    const selectedOption = options[selectedSegmentIndex];

    selectedOption?.onPress();
  };

  return (
    <NativeSegmentedControl
      style={style}
      values={options.map(option => option.label)}
      selectedIndex={selectedIndex}
      onChange={onChange}
    />
  );
};

export default SegmentedControl;
